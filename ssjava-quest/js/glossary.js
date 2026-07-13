"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const categoryNames = {
        servlet: "Servlet",
        jsp: "JSP",
        mvc: "MVC・転送",
        scope: "スコープ"
    };

    const terms = [
        {
            name: "Servlet",
            category: "servlet",
            description:
                "Webサーバ上で動作し、ブラウザからのリクエストを処理してレスポンスを返すJavaプログラム。",
            code: "public class HelloServlet extends HttpServlet",
            tip:
                "基本的にHttpServletを継承して作成する。"
        },
        {
            name: "HttpServlet",
            category: "servlet",
            description:
                "HTTP通信を処理するServletを作成するための基本クラス。",
            code: "extends HttpServlet",
            tip:
                "サーブレットの定義を問う問題で頻出。"
        },
        {
            name: "@WebServlet",
            category: "servlet",
            description:
                "ServletへアクセスするためのURLパターンを設定するアノテーション。",
            code: '@WebServlet("/hello")',
            tip:
                "URLパターンには通常、先頭にスラッシュを付ける。"
        },
        {
            name: "URLパターン",
            category: "servlet",
            description:
                "どのURLへアクセスしたときに、どのServletを実行するかを決める文字列。",
            code: '@WebServlet("/login")',
            tip:
                "アノテーションの値とブラウザからのアクセス先を対応させる。"
        },
        {
            name: "doGet",
            category: "servlet",
            description:
                "GETリクエストを処理するHttpServletのメソッド。",
            code:
`protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
)`,
            tip:
                "リンクのクリックやGETフォームなどで実行される。"
        },
        {
            name: "doPost",
            category: "servlet",
            description:
                "POSTリクエストを処理するHttpServletのメソッド。",
            code:
`protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
)`,
            tip:
                'フォームのmethod="post"と対応する。'
        },
        {
            name: "GET",
            category: "servlet",
            description:
                "主に情報の取得に使われるHTTPリクエストメソッド。送信値がURLに付加されることがある。",
            code: '<form method="get" action="search">',
            tip:
                "通常のアンカーリンクもGETになる。"
        },
        {
            name: "POST",
            category: "servlet",
            description:
                "主にデータの登録や送信に使われるHTTPリクエストメソッド。",
            code: '<form method="post" action="login">',
            tip:
                "POSTだから自動的に安全になるわけではない。HTTPSとの違いに注意。"
        },
        {
            name: "getParameter",
            category: "servlet",
            description:
                "フォームやURLから送信されたリクエストパラメータを取得するメソッド。",
            code: 'String name = request.getParameter("name");',
            tip:
                "基本的な戻り値はString型。getAttributeと混同しない。"
        },
        {
            name: "リクエストパラメータ",
            category: "servlet",
            description:
                "フォームなどからWebサーバへ送信される値。フォームのname属性を使って取得する。",
            code:
`<input name="age">
request.getParameter("age");`,
            tip:
                "HTMLのname属性が取得時のキーになる。"
        },
        {
            name: "setContentType",
            category: "servlet",
            description:
                "レスポンスとして返すデータの種類や文字コードを指定するメソッド。",
            code:
`response.setContentType(
    "text/html; charset=UTF-8"
);`,
            tip:
                "HTML生成ではtext/htmlとUTF-8を確認する。"
        },
        {
            name: "PrintWriter",
            category: "servlet",
            description:
                "Servletからレスポンスへ文字列やHTMLを出力するために使用するオブジェクト。",
            code:
`PrintWriter out = response.getWriter();
out.println("<h1>Hello</h1>");`,
            tip:
                "大量のHTML生成はJSPへ分担する方が管理しやすい。"
        },
        {
            name: "sendRedirect",
            category: "servlet",
            description:
                "ブラウザへ別URLへの移動を指示するリダイレクト処理。",
            code: 'response.sendRedirect("menu");',
            tip:
                "ブラウザから新しいリクエストが発生し、URLが変化する。"
        },
        {
            name: "Integer.parseInt",
            category: "servlet",
            description:
                "数値形式のStringをint型へ変換するメソッド。",
            code:
`String ageText = request.getParameter("age");
int age = Integer.parseInt(ageText);`,
            tip:
                "数値でない値を変換するとNumberFormatExceptionが発生する。"
        },

        {
            name: "JSP",
            category: "jsp",
            description:
                "HTMLの中へJavaに関係する処理を記述できる、画面作成向けの技術。MVCでは主にViewを担当する。",
            code: "result.jsp",
            tip:
                "処理はServlet、表示はJSPへ分担する。"
        },
        {
            name: "スクリプトレット",
            category: "jsp",
            description:
                "JSP内へJavaの処理を記述するための記法。",
            code:
`<%
    String name = "Java";
%>`,
            tip:
                "<% と %>で囲む。"
        },
        {
            name: "スクリプト式",
            category: "jsp",
            description:
                "JSPで変数や式の値をレスポンスへ出力する記法。",
            code: "<%= name %>",
            tip:
                "イコールが付いているものが出力用。"
        },
        {
            name: "JSPコメント",
            category: "jsp",
            description:
                "JSPの処理段階で取り除かれ、通常ブラウザへ送信されないコメント。",
            code: "<%-- この部分は送信されない --%>",
            tip:
                "HTMLコメント<!-- -->との違いが出題されやすい。"
        },
        {
            name: "pageディレクティブ",
            category: "jsp",
            description:
                "JSPページ全体の文字コードやimportなどを設定する記述。",
            code:
`<%@ page
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>`,
            tip:
                "ディレクティブは<%@から始まる。"
        },
        {
            name: "WEB-INF",
            category: "jsp",
            description:
                "ブラウザからの直接アクセスが通常禁止される、Webアプリケーション内の特別なフォルダ。",
            code: "/WEB-INF/views/result.jsp",
            tip:
                "ServletからJSPへフォワードする構成で利用される。"
        },

        {
            name: "MVCモデル",
            category: "mvc",
            description:
                "アプリケーションをModel・View・Controllerの3つの役割に分ける設計方法。",
            code:
`Model      : データ・処理
View       : 画面表示
Controller : 制御`,
            tip:
                "役割を分離することで、修正や管理をしやすくする。"
        },
        {
            name: "Model",
            category: "mvc",
            description:
                "MVCにおいて、データや業務処理を担当する部分。",
            code: "JavaBeans / 処理クラスなど",
            tip:
                "Mはデータや処理を担当する。"
        },
        {
            name: "View",
            category: "mvc",
            description:
                "MVCにおいて、利用者に見せる画面表示を担当する部分。",
            code: "JSP",
            tip:
                "サーバーサイドJavaではJSPが担当することが多い。"
        },
        {
            name: "Controller",
            category: "mvc",
            description:
                "リクエストを受け取り、処理や画面遷移を制御する部分。",
            code: "Servlet",
            tip:
                "Servletが担当することが多い。"
        },
        {
            name: "RequestDispatcher",
            category: "mvc",
            description:
                "ServletからJSPなどへ、サーバ内部でリクエスト処理を転送するために使用する。",
            code:
`RequestDispatcher dispatcher =
    request.getRequestDispatcher(
        "/WEB-INF/result.jsp"
    );`,
            tip:
                "getRequestDispatcherの後にforwardを実行する。"
        },
        {
            name: "forward",
            category: "mvc",
            description:
                "同じrequestとresponseを使用して、サーバ内部で別のServletやJSPへ処理を転送する。",
            code: "dispatcher.forward(request, response);",
            tip:
                "ブラウザのアドレスバーは通常、元のURLのまま。"
        },
        {
            name: "フォワードとリダイレクト",
            category: "mvc",
            description:
                "フォワードはサーバ内部の転送、リダイレクトはブラウザへ別URLへの再アクセスを指示する処理。",
            code:
`forward:
dispatcher.forward(request, response);

redirect:
response.sendRedirect("menu");`,
            tip:
                "URLが変わるか、新しいリクエストが発生するかを比較する。"
        },

        {
            name: "スコープ",
            category: "scope",
            description:
                "データを保存・共有できる範囲や有効期間を表す考え方。",
            code:
`page
request
session
application`,
            tip:
                "用途に応じて、狭くて適切なスコープを選ぶ。"
        },
        {
            name: "requestスコープ",
            category: "scope",
            description:
                "1回のリクエスト処理中にデータを共有するスコープ。",
            code: 'request.setAttribute("user", user);',
            tip:
                "ServletからJSPへのフォワードでよく使用する。"
        },
        {
            name: "sessionスコープ",
            category: "scope",
            description:
                "同じ利用者のセッションが有効な間、複数のリクエストをまたいでデータを保持する。",
            code:
`HttpSession session = request.getSession();
session.setAttribute("user", user);`,
            tip:
                "ログイン情報やカートなどに使用される。"
        },
        {
            name: "applicationスコープ",
            category: "scope",
            description:
                "Webアプリケーション全体でデータを共有するためのスコープ。",
            code:
`getServletContext()
    .setAttribute("count", count);`,
            tip:
                "すべての利用者で共有されるため、利用者固有情報には注意。"
        },
        {
            name: "pageスコープ",
            category: "scope",
            description:
                "同じJSPページ内だけで利用できる、最も狭いスコープ。",
            code: "pageContext.setAttribute(...)",
            tip:
                "有効範囲は現在のJSPページ内。"
        },
        {
            name: "setAttribute",
            category: "scope",
            description:
                "スコープへ名前を付けてオブジェクトを保存するメソッド。",
            code: 'request.setAttribute("user", user);',
            tip:
                "第1引数は属性名、第2引数は保存する値。"
        },
        {
            name: "getAttribute",
            category: "scope",
            description:
                "スコープへ保存されたオブジェクトを属性名から取得するメソッド。",
            code:
`User user =
    (User) request.getAttribute("user");`,
            tip:
                "戻り値はObject型なので、必要に応じてキャストする。"
        },
        {
            name: "JavaBeans",
            category: "scope",
            description:
                "複数のデータをまとめて扱うために使用されるJavaクラス。privateフィールドとpublicなgetter・setterを持つ構成が一般的。",
            code:
`public class User {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}`,
            tip:
                "インスタンスをスコープへ保存し、ServletとJSPで共有できる。"
        },
        {
            name: "プロパティ",
            category: "scope",
            description:
                "JavaBeansが保持するデータ。getter・setterを通じて読み書きする。",
            code:
`getName()
setName(...)

プロパティ名：name`,
            tip:
                "getXxx・setXxxのXxx部分と対応する。"
        },
        {
            name: "キャスト",
            category: "scope",
            description:
                "Object型として取得した値を、元のクラスの型として扱えるように変換すること。",
            code:
`User user =
    (User) request.getAttribute("user");`,
            tip:
                "getAttributeの結果をJavaBeansとして使う場合に登場する。"
        }
    ];

    const searchInput =
        document.getElementById("searchInput");

    const glossaryList =
        document.getElementById("glossaryList");

    const termCount =
        document.getElementById("termCount");

    const emptyGlossary =
        document.getElementById("emptyGlossary");

    const filterButtons =
        document.querySelectorAll(".filter-button");

    let currentCategory = "all";
    let currentSearchText = "";

    function createTermCard(term) {
        const article = document.createElement("article");
        article.className = "term-card";

        const heading = document.createElement("div");
        heading.className = "term-heading";

        const title = document.createElement("h2");
        title.textContent = term.name;

        const category = document.createElement("span");
        category.className = "term-category";
        category.textContent = categoryNames[term.category];

        heading.append(title, category);

        const description = document.createElement("p");
        description.textContent = term.description;

        article.append(heading, description);

        if (term.code) {
            const code = document.createElement("code");
            code.textContent = term.code;
            article.appendChild(code);
        }

        if (term.tip) {
            const tip = document.createElement("p");
            tip.className = "term-tip";
            tip.textContent = `★ 試験ポイント：${term.tip}`;
            article.appendChild(tip);
        }

        return article;
    }

    function normalizeText(text) {
        return String(text)
            .toLowerCase()
            .replace(/\s+/g, "");
    }

    function renderGlossary() {
        const searchWord = normalizeText(currentSearchText);

        const filteredTerms = terms.filter((term) => {
            const categoryMatches =
                currentCategory === "all" ||
                term.category === currentCategory;

            const searchableText = normalizeText(
                [
                    term.name,
                    term.description,
                    term.code,
                    term.tip,
                    categoryNames[term.category]
                ].join(" ")
            );

            const searchMatches =
                searchWord === "" ||
                searchableText.includes(searchWord);

            return categoryMatches && searchMatches;
        });

        glossaryList.innerHTML = "";
        termCount.textContent = filteredTerms.length;

        filteredTerms.forEach((term) => {
            glossaryList.appendChild(createTermCard(term));
        });

        const isEmpty = filteredTerms.length === 0;

        glossaryList.classList.toggle("hidden", isEmpty);
        emptyGlossary.classList.toggle("hidden", !isEmpty);
    }

    searchInput.addEventListener("input", (event) => {
        currentSearchText = event.target.value;
        renderGlossary();
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentCategory = button.dataset.category;

            filterButtons.forEach((targetButton) => {
                targetButton.classList.toggle(
                    "active",
                    targetButton === button
                );
            });

            renderGlossary();
        });
    });

    renderGlossary();
});
