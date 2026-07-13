"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const questions = window.QUIZ_QUESTIONS || [];
    const storageKey = "ssjava-quest-save-v1";

    const categoryNames = {
        servlet: "Servlet",
        jsp: "JSP",
        mvc: "MVC・転送",
        scope: "スコープ"
    };

    const categoryIcons = {
        servlet: "⚙️",
        jsp: "📄",
        mvc: "🔗",
        scope: "📦"
    };

    const defaultSaveData = {
        xp: 0,
        totalCorrect: 0,
        wrongIds: []
    };

    let saveData = loadSaveData();

    let currentMode = "all";
    let currentQuestions = [];
    let currentIndex = 0;
    let answered = false;

    let sessionAnswered = 0;
    let sessionCorrect = 0;
    let sessionXp = 0;
    let streak = 0;

    const elements = {
        level: document.getElementById("level"),
        xpBar: document.getElementById("xpBar"),
        xpText: document.getElementById("xpText"),

        streak: document.getElementById("streak"),
        accuracy: document.getElementById("accuracy"),
        wrongCount: document.getElementById("wrongCount"),
        totalCorrect: document.getElementById("totalCorrect"),

        currentNumber: document.getElementById("currentNumber"),
        totalNumber: document.getElementById("totalNumber"),
        category: document.getElementById("category"),
        progressBar: document.getElementById("progressBar"),

        quizSection: document.getElementById("quizSection"),
        emptySection: document.getElementById("emptySection"),
        resultSection: document.getElementById("resultSection"),

        questionCard: document.getElementById("questionCard"),
        questionIcon: document.getElementById("questionIcon"),
        questionText: document.getElementById("questionText"),

        codeArea: document.getElementById("codeArea"),
        codeText: document.getElementById("codeText"),
        choiceList: document.getElementById("choiceList"),

        explanation: document.getElementById("explanation"),
        resultIcon: document.getElementById("resultIcon"),
        resultTitle: document.getElementById("resultTitle"),
        explanationText: document.getElementById("explanationText"),
        tipText: document.getElementById("tipText"),
        nextButton: document.getElementById("nextButton"),

        rank: document.getElementById("rank"),
        finalMessage: document.getElementById("finalMessage"),
        finalCorrect: document.getElementById("finalCorrect"),
        finalAccuracy: document.getElementById("finalAccuracy"),
        finalXp: document.getElementById("finalXp"),

        resetButton: document.getElementById("resetButton"),
        startAllButton: document.getElementById("startAllButton"),
        retryButton: document.getElementById("retryButton"),
        reviewButton: document.getElementById("reviewButton"),

        toast: document.getElementById("toast"),
        confetti: document.getElementById("confetti")
    };

    function loadSaveData() {
        try {
            const saved = JSON.parse(localStorage.getItem(storageKey));

            if (!saved) {
                return { ...defaultSaveData };
            }

            return {
                xp: Number(saved.xp) || 0,
                totalCorrect: Number(saved.totalCorrect) || 0,
                wrongIds: Array.isArray(saved.wrongIds)
                    ? saved.wrongIds
                    : []
            };
        } catch (error) {
            return { ...defaultSaveData };
        }
    }

    function saveProgress() {
        localStorage.setItem(storageKey, JSON.stringify(saveData));
    }

    function shuffle(array) {
        const copiedArray = [...array];

        for (let i = copiedArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            [copiedArray[i], copiedArray[randomIndex]] = [
                copiedArray[randomIndex],
                copiedArray[i]
            ];
        }

        return copiedArray;
    }

    function calculateLevel() {
        return Math.floor(saveData.xp / 100) + 1;
    }

    function updateDashboard() {
        const level = calculateLevel();
        const currentLevelXp = saveData.xp % 100;

        elements.level.textContent = level;
        elements.xpBar.style.width = `${currentLevelXp}%`;
        elements.xpText.textContent = `${currentLevelXp} / 100 XP`;

        elements.streak.textContent = streak;
        elements.wrongCount.textContent = saveData.wrongIds.length;
        elements.totalCorrect.textContent = saveData.totalCorrect;

        if (sessionAnswered === 0) {
            elements.accuracy.textContent = "--%";
        } else {
            const accuracy = Math.round(
                (sessionCorrect / sessionAnswered) * 100
            );

            elements.accuracy.textContent = `${accuracy}%`;
        }
    }

    function getQuestions(mode) {
        if (mode === "all") {
            return shuffle(questions);
        }

        if (mode === "wrong") {
            return shuffle(
                questions.filter((question) =>
                    saveData.wrongIds.includes(question.id)
                )
            );
        }

        return shuffle(
            questions.filter(
                (question) => question.category === mode
            )
        );
    }

    function setActiveModeButton(mode) {
        document.querySelectorAll(".mode-button").forEach((button) => {
            button.classList.toggle(
                "active",
                button.dataset.mode === mode
            );
        });
    }

    function startQuiz(mode) {
        currentMode = mode;
        currentQuestions = getQuestions(mode);
        currentIndex = 0;
        answered = false;

        sessionAnswered = 0;
        sessionCorrect = 0;
        sessionXp = 0;
        streak = 0;

        setActiveModeButton(mode);
        updateDashboard();

        elements.resultSection.classList.add("hidden");

        if (currentQuestions.length === 0) {
            elements.quizSection.classList.add("hidden");
            elements.emptySection.classList.remove("hidden");
            return;
        }

        elements.emptySection.classList.add("hidden");
        elements.quizSection.classList.remove("hidden");

        renderQuestion();
    }

    function renderQuestion() {
        answered = false;

        const question = currentQuestions[currentIndex];
        const progress =
            ((currentIndex + 1) / currentQuestions.length) * 100;

        elements.currentNumber.textContent = currentIndex + 1;
        elements.totalNumber.textContent = currentQuestions.length;
        elements.progressBar.style.width = `${progress}%`;

        elements.category.textContent =
            categoryNames[question.category];

        elements.questionIcon.textContent =
            categoryIcons[question.category];

        elements.questionText.textContent = question.question;

        if (question.code) {
            elements.codeText.textContent = question.code;
            elements.codeArea.classList.remove("hidden");
        } else {
            elements.codeText.textContent = "";
            elements.codeArea.classList.add("hidden");
        }

        elements.explanation.classList.add("hidden");
        elements.nextButton.classList.add("hidden");
        elements.choiceList.innerHTML = "";

        elements.questionCard.classList.remove(
            "correct-effect",
            "wrong-effect"
        );

        question.choices.forEach((choice, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "choice-button";
            button.dataset.index = index;

            const number = document.createElement("span");
            number.className = "choice-number";
            number.textContent = index + 1;

            const choiceText = document.createElement("span");
            choiceText.textContent = choice;

            button.append(number, choiceText);

            button.addEventListener("click", () => {
                answerQuestion(index);
            });

            elements.choiceList.appendChild(button);
        });
    }

    function answerQuestion(selectedIndex) {
        if (answered) {
            return;
        }

        answered = true;

        const question = currentQuestions[currentIndex];
        const isCorrect = selectedIndex === question.answer;
        const buttons = [...elements.choiceList.children];

        sessionAnswered++;

        buttons.forEach((button, index) => {
            button.disabled = true;

            if (index === question.answer) {
                button.classList.add("correct");
            } else if (index === selectedIndex) {
                button.classList.add("wrong");
            } else {
                button.classList.add("dimmed");
            }
        });

        if (isCorrect) {
            streak++;
            sessionCorrect++;
            saveData.totalCorrect++;

            const gainedXp = 10 + Math.min(streak, 5) * 2;

            saveData.xp += gainedXp;
            sessionXp += gainedXp;

            saveData.wrongIds = saveData.wrongIds.filter(
                (id) => id !== question.id
            );

            elements.resultIcon.textContent = "✅";
            elements.resultTitle.textContent =
                streak >= 3
                    ? `${streak}連続正解！`
                    : "正解！";

            elements.questionCard.classList.add("correct-effect");

            if (streak >= 3) {
                createConfetti(18);
            }
        } else {
            streak = 0;

            if (!saveData.wrongIds.includes(question.id)) {
                saveData.wrongIds.push(question.id);
            }

            elements.resultIcon.textContent = "❌";
            elements.resultTitle.textContent =
                `正解は「${question.choices[question.answer]}」`;

            elements.questionCard.classList.add("wrong-effect");
        }

        elements.explanationText.textContent =
            question.explanation;

        elements.tipText.textContent = question.tip;

        elements.explanation.classList.remove("hidden");
        elements.nextButton.classList.remove("hidden");

        saveProgress();
        updateDashboard();
    }

    function goToNextQuestion() {
        if (!answered) {
            return;
        }

        currentIndex++;

        if (currentIndex >= currentQuestions.length) {
            showFinalResult();
            return;
        }

        renderQuestion();

        elements.quizSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function showFinalResult() {
        elements.quizSection.classList.add("hidden");
        elements.emptySection.classList.add("hidden");
        elements.resultSection.classList.remove("hidden");

        const accuracy = currentQuestions.length === 0
            ? 0
            : Math.round(
                (sessionCorrect / currentQuestions.length) * 100
            );

        let rank;
        let message;

        if (accuracy === 100) {
            rank = "S";
            message =
                "完全制覇！この範囲はかなり仕上がっています。説明問題にも挑戦できる状態です。";
            createConfetti(70);
        } else if (accuracy >= 80) {
            rank = "A";
            message =
                "A評価ライン到達！間違えた部分を復習して満点を狙いましょう。";
            createConfetti(45);
        } else if (accuracy >= 50) {
            rank = "B";
            message =
                "到達水準です。ただしC評価の項目を作らないため、弱点復習をおすすめします。";
        } else {
            rank = "C";
            message =
                "ここから伸びます。解説と用語集を確認して、弱点リベンジに挑戦しましょう。";
        }

        elements.rank.textContent = rank;
        elements.finalMessage.textContent = message;
        elements.finalCorrect.textContent =
            `${sessionCorrect} / ${currentQuestions.length}`;

        elements.finalAccuracy.textContent = `${accuracy}%`;
        elements.finalXp.textContent = `+${sessionXp}`;

        elements.reviewButton.disabled =
            saveData.wrongIds.length === 0;

        elements.resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function showToast(message) {
        elements.toast.textContent = message;
        elements.toast.classList.add("show");

        window.setTimeout(() => {
            elements.toast.classList.remove("show");
        }, 2200);
    }

    function createConfetti(amount) {
        const colors = [
            "#7c3aed",
            "#06b6d4",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#f8fafc"
        ];

        for (let i = 0; i < amount; i++) {
            const piece = document.createElement("span");

            piece.className = "confetti-piece";
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            piece.style.animationDelay =
                `${Math.random() * 0.5}s`;

            piece.style.animationDuration =
                `${1.4 + Math.random() * 1.1}s`;

            elements.confetti.appendChild(piece);

            window.setTimeout(() => {
                piece.remove();
            }, 3000);
        }
    }

    document.querySelectorAll(".mode-button").forEach((button) => {
        button.addEventListener("click", () => {
            startQuiz(button.dataset.mode);
        });
    });

    elements.nextButton.addEventListener(
        "click",
        goToNextQuestion
    );

    elements.retryButton.addEventListener("click", () => {
        startQuiz(currentMode);
    });

    elements.reviewButton.addEventListener("click", () => {
        startQuiz("wrong");
    });

    elements.startAllButton.addEventListener("click", () => {
        startQuiz("all");
    });

    elements.resetButton.addEventListener("click", () => {
        const accepted = window.confirm(
            "XP・累計正解数・間違い記録をすべて削除しますか？"
        );

        if (!accepted) {
            return;
        }

        saveData = {
            xp: 0,
            totalCorrect: 0,
            wrongIds: []
        };

        saveProgress();
        showToast("学習記録をリセットしました");
        startQuiz("all");
    });

    document.addEventListener("keydown", (event) => {
        const activeTag = document.activeElement.tagName;

        if (
            activeTag === "INPUT" ||
            activeTag === "TEXTAREA"
        ) {
            return;
        }

        const answerKeys = {
            "1": 0,
            "2": 1,
            "3": 2,
            "4": 3,
            Numpad1: 0,
            Numpad2: 1,
            Numpad3: 2,
            Numpad4: 3
        };

        const selectedIndex =
            answerKeys[event.key] ?? answerKeys[event.code];

        if (
            selectedIndex !== undefined &&
            !answered &&
            !elements.quizSection.classList.contains("hidden")
        ) {
            answerQuestion(selectedIndex);
            return;
        }

        if (
            event.key === "Enter" &&
            answered &&
            !elements.nextButton.classList.contains("hidden")
        ) {
            goToNextQuestion();
        }
    });

    startQuiz("all");
});
