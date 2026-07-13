"use strict";

/* =========================================================
   SSJava BATTLE
   問題データ

   C = 4択問題
   W = 記述問題
========================================================= */

const C = (
  id,
  category,
  question,
  choices,
  answer,
  explanation
) => ({
  id,
  type: "choice",
  category,
  question,
  choices,
  answer,
  explanation
});

const W = (
  id,
  category,
  question,
  modelAnswer,
  keywords,
  explanation
) => ({
  id,
  type: "written",
  category,
  question,
  modelAnswer,
  keywords,
  explanation
});

/*
  記述問題のkeywordsについて

  [
    ["httpservlet"],
    ["継承", "extends"]
  ]

  この場合は、
  ・httpservlet
  ・継承 または extends

  の両方のグループを含んでいれば正解判定になります。
*/

const quizData = [
  /* =======================================================
     1. Servletの基本
  ======================================================= */

  C(
    "servlet-01",
    "servlet",
    "Servletクラスを作成するとき、基本的に継承するクラスはどれ？",
    [
      "HttpServlet",
      "HttpRequest",
      "HttpSession",
      "JspServlet"
    ],
    0,
    "Servletクラスは通常、<code>HttpServlet</code>を継承して作成します。教材の環境によって、パッケージ名が<code>javax.servlet</code>または<code>jakarta.servlet</code>になります。"
  ),

  C(
    "servlet-02",
    "servlet",
    "GETリクエストを受け取ったときに実行される基本メソッドはどれ？",
    [
      "doPost()",
      "doGet()",
      "main()",
      "getRequest()"
    ],
    1,
    "GETリクエストでは<code>doGet()</code>、POSTリクエストでは<code>doPost()</code>が呼び出されます。"
  ),

  C(
    "servlet-03",
    "servlet",
    "ServletのURLパターンをアノテーションで設定するものはどれ？",
    [
      "@Override",
      "@WebServlet",
      "@RequestMapping",
      "@ServletURL"
    ],
    1,
    "<code>@WebServlet(\"/Sample\")</code>のように指定します。このURLパターンとServletクラスが対応します。"
  ),

  C(
    "servlet-04",
    "servlet",
    "Servletの<code>doGet()</code>を正しくオーバーライドするときに付けることが多いアノテーションはどれ？",
    [
      "@Override",
      "@Getter",
      "@Request",
      "@JavaBean"
    ],
    0,
    "<code>@Override</code>を付けることで、親クラスのメソッドを正しくオーバーライドできているかコンパイラに確認させられます。"
  ),

  W(
    "servlet-w01",
    "servlet",
    "Servletクラスの基本的な作り方を、「継承」と「実行メソッド」に触れて説明しなさい。",
    "HttpServletを継承してServletクラスを作り、GETの場合はdoGetメソッド、POSTの場合はdoPostメソッドをオーバーライドする。",
    [
      ["httpservlet"],
      ["継承", "extends"],
      ["doget", "dopost"]
    ],
    "最低でも「HttpServletを継承する」「GETはdoGet」「POSTはdoPost」という対応を書けるようにしましょう。"
  ),

  W(
    "servlet-w02",
    "servlet",
    "URLパターンが<code>/Login</code>になるように、Servletクラスへ付けるアノテーションを書きなさい。",
    "@WebServlet(\"/Login\")",
    [
      ["@webservlet"],
      ["/login"]
    ],
    "<code>@WebServlet(\"/Login\")</code>と記述します。通常はServletクラスの宣言より前へ付けます。"
  ),

  /* =======================================================
     2. リクエスト処理
  ======================================================= */

  C(
    "request-01",
    "request",
    "フォームから送信された<code>name</code>の値を取得する正しい記述はどれ？",
    [
      "request.getParameter(\"name\")",
      "request.getAttribute(\"name\")",
      "response.getParameter(\"name\")",
      "session.getParameter(\"name\")"
    ],
    0,
    "リクエストパラメータは<code>request.getParameter(\"パラメータ名\")</code>で取得します。基本的な戻り値はStringです。"
  ),

  C(
    "request-02",
    "request",
    "HTMLフォームでPOST送信を指定する正しい属性はどれ？",
    [
      "method=\"post\"",
      "type=\"post\"",
      "request=\"post\"",
      "action=\"post\""
    ],
    0,
    "<code>&lt;form action=\"送信先\" method=\"post\"&gt;</code>のように、method属性で指定します。"
  ),

  C(
    "request-03",
    "request",
    "検索条件のように、URLへパラメータが表示されても問題が少ない処理に向いているものはどれ？",
    [
      "GET",
      "POST",
      "SESSION",
      "FORWARD"
    ],
    0,
    "GETではデータがURLのクエリ文字列へ付加されます。検索やページ表示など、情報取得を中心とした処理で使われます。"
  ),

  C(
    "request-04",
    "request",
    "リンクをクリックしてServletへGETリクエストを送る基本的なHTML要素はどれ？",
    [
      "<a>",
      "<form method=\"post\">だけ",
      "<jsp>",
      "<servlet>"
    ],
    0,
    "アンカー要素の<code>href</code>へServletのURLを指定すると、基本的にGETリクエストが送られます。"
  ),

  W(
    "request-w01",
    "request",
    "リクエストパラメータ<code>age</code>を取得するJavaの式を書きなさい。",
    "request.getParameter(\"age\")",
    [
      ["request.getparameter"],
      ["age"]
    ],
    "<code>request.getParameter(\"age\")</code>です。戻り値は基本的にStringです。"
  ),

  W(
    "request-w02",
    "request",
    "GETとPOSTの違いを、URLへの送信データの表示に触れて説明しなさい。",
    "GETは送信データがURLのクエリ文字列へ付加される。POSTは送信データがURLへ直接表示されず、主にリクエストボディで送信される。",
    [
      ["get"],
      ["post"],
      ["url"]
    ],
    "GETはデータがURLへ付きます。POSTは主にリクエストボディで送信します。ただし、POSTにするだけで安全になるわけではありません。"
  ),

  /* =======================================================
     3. レスポンス処理
  ======================================================= */

  C(
    "response-01",
    "response",
    "ServletからHTMLを出力するために取得するものはどれ？",
    [
      "PrintWriter",
      "Scanner",
      "HttpSession",
      "RequestDispatcher"
    ],
    0,
    "<code>PrintWriter out = response.getWriter();</code>のように取得し、<code>out.println()</code>などでHTMLを出力します。"
  ),

  C(
    "response-02",
    "response",
    "HTMLをUTF-8で返すContent-Typeとして最も適切なものはどれ？",
    [
      "text/html; charset=UTF-8",
      "java/html; charset=Servlet",
      "text/java; charset=GET",
      "application/jsp"
    ],
    0,
    "<code>response.setContentType(\"text/html; charset=UTF-8\");</code>と設定します。文字化け防止のためにも重要です。"
  ),

  C(
    "response-03",
    "response",
    "別のURLへリダイレクトするときに使用するメソッドはどれ？",
    [
      "response.sendRedirect()",
      "request.getParameter()",
      "request.setAttribute()",
      "out.forward()"
    ],
    0,
    "<code>response.sendRedirect(\"移動先\")</code>を使用します。ブラウザが移動先へ再リクエストするため、URLも変化します。"
  ),

  C(
    "response-04",
    "response",
    "<code>response.getWriter()</code>で取得したオブジェクトを使って文字列を出力するメソッドはどれ？",
    [
      "println()",
      "getParameter()",
      "sendRedirect()",
      "setAttribute()"
    ],
    0,
    "<code>out.println(\"&lt;h1&gt;Hello&lt;/h1&gt;\");</code>のようにHTMLを出力できます。"
  ),

  W(
    "response-w01",
    "response",
    "レスポンスのContent-Typeを、HTML・UTF-8に設定するJavaコードを書きなさい。",
    "response.setContentType(\"text/html; charset=UTF-8\");",
    [
      ["response.setcontenttype"],
      ["text/html"],
      ["utf-8", "utf8"]
    ],
    "HTMLであることと、文字コードがUTF-8であることを設定します。"
  ),

  W(
    "response-w02",
    "response",
    "<code>menu.jsp</code>へリダイレクトするJavaコードを書きなさい。",
    "response.sendRedirect(\"menu.jsp\");",
    [
      ["response.sendredirect"],
      ["menu.jsp"]
    ],
    "リダイレクトには<code>response.sendRedirect()</code>を使用します。"
  ),

  /* =======================================================
     4. JSP
  ======================================================= */

  C(
    "jsp-01",
    "jsp",
    "JSPを利用する主な目的として最も適切なものはどれ？",
    [
      "HTMLを中心に画面表示を作りやすくする",
      "Javaコンパイラを削除する",
      "URLをすべて非表示にする",
      "データベースを自動作成する"
    ],
    0,
    "Servletだけで大量のHTMLを出力すると複雑になります。JSPをViewとして利用すると画面表示を作りやすくなります。"
  ),

  C(
    "jsp-02",
    "jsp",
    "JSPのスクリプトレットを表す記号はどれ？",
    [
      "<% Javaコード %>",
      "<%= 式 %>",
      "<%-- コメント --%>",
      "<%@ page ... %>"
    ],
    0,
    "<code>&lt;% Javaコード %&gt;</code>がスクリプトレットです。Javaの文や制御構文などを記述できます。"
  ),

  C(
    "jsp-03",
    "jsp",
    "JSPで式の値を画面へ出力するスクリプト式はどれ？",
    [
      "<%= 式 %>",
      "<% 式 %>",
      "<%@ 式 %>",
      "<%-- 式 --%>"
    ],
    0,
    "<code>&lt;%= 式 %&gt;</code>は式の評価結果を画面へ出力します。基本的に式の末尾へセミコロンは付けません。"
  ),

  C(
    "jsp-04",
    "jsp",
    "JSPコメントとして正しいものはどれ？",
    [
      "<%-- コメント --%>",
      "<!-- コメント --!>",
      "// コメント //",
      "<%@ コメント %>"
    ],
    0,
    "<code>&lt;%-- コメント --%&gt;</code>がJSPコメントです。生成されるHTMLには含まれません。"
  ),

  C(
    "jsp-05",
    "jsp",
    "JSPのpageディレクティブとして正しい書き始めはどれ？",
    [
      "<%@ page",
      "<%= page",
      "<%-- page",
      "<java page"
    ],
    0,
    "pageディレクティブは<code>&lt;%@ page contentType=\"text/html; charset=UTF-8\" %&gt;</code>などの形で記述します。"
  ),

  W(
    "jsp-w01",
    "jsp",
    "変数<code>name</code>の値を、JSPのスクリプト式で画面へ表示する記述を書きなさい。",
    "<%= name %>",
    [
      ["<%="],
      ["name"],
      ["%>"]
    ],
    "スクリプト式は<code>&lt;%= 式 %&gt;</code>です。式の結果がレスポンスへ出力されます。"
  ),

  W(
    "jsp-w02",
    "jsp",
    "JSPのスクリプトレット・スクリプト式・JSPコメントの記号を、それぞれ書きなさい。",
    "スクリプトレットは<% %>、スクリプト式は<%= %>、JSPコメントは<%-- --%>。",
    [
      ["<%"],
      ["<%="],
      ["<%--"]
    ],
    "3つは記号が似ています。スクリプトレットはJavaコード、スクリプト式は値の出力、JSPコメントは画面へ出さないコメントです。"
  ),

  /* =======================================================
     5. MVCモデル
  ======================================================= */

  C(
    "mvc-01",
    "mvc",
    "MVCモデルの「V」が表すものはどれ？",
    [
      "View",
      "Value",
      "Variable",
      "Validation"
    ],
    0,
    "MVCはModel・View・Controllerの略です。Viewは画面表示を担当します。"
  ),

  C(
    "mvc-02",
    "mvc",
    "ServletとJSPを使う基本的なMVC構成で、Controllerを担当するものはどれ？",
    [
      "Servlet",
      "JSP",
      "CSS",
      "HTMLコメント"
    ],
    0,
    "Servletはリクエストを受け、必要な処理を行い、表示先を決めるControllerを担当します。"
  ),

  C(
    "mvc-03",
    "mvc",
    "ServletとJSPを使う基本的なMVC構成で、Viewを担当するものはどれ？",
    [
      "JSP",
      "Servlet",
      "JavaBeansだけ",
      "URLパターン"
    ],
    0,
    "JSPは画面表示を担当するViewとして利用します。Servletに制御、JSPに表示を分担させます。"
  ),

  C(
    "mvc-04",
    "mvc",
    "MVCモデルを利用する利点として最も適切なものはどれ？",
    [
      "処理・表示・データを分担でき、保守しやすくなる",
      "すべての処理を1ファイルへまとめられる",
      "Javaが不要になる",
      "URLが必ず短くなる"
    ],
    0,
    "役割を分けることで変更箇所を把握しやすくなり、再利用性や保守性が向上します。"
  ),

  W(
    "mvc-w01",
    "mvc",
    "MVCのM・V・Cがそれぞれ何を表し、どのような役割を持つか説明しなさい。",
    "MはModelでデータや業務処理、VはViewで画面表示、CはControllerでリクエストを受けて処理の流れを制御する。",
    [
      ["model", "モデル"],
      ["view", "ビュー"],
      ["controller", "コントローラ"]
    ],
    "M＝データや処理、V＝画面表示、C＝リクエスト受付と処理の制御、という対応を説明できるようにしましょう。"
  ),

  /* =======================================================
     6. フォワード・リダイレクト
  ======================================================= */

  C(
    "forward-01",
    "forward",
    "ServletからJSPへフォワードするときに使用するものはどれ？",
    [
      "RequestDispatcher",
      "PrintWriter",
      "Scanner",
      "Integer"
    ],
    0,
    "<code>request.getRequestDispatcher()</code>でRequestDispatcherを取得し、<code>forward()</code>を実行します。"
  ),

  C(
    "forward-02",
    "forward",
    "フォワードしたとき、ブラウザに表示されるURLは通常どうなる？",
    [
      "元のServletのURLのまま",
      "必ずJSPのURLへ変わる",
      "URLが空欄になる",
      "ランダムに変わる"
    ],
    0,
    "フォワードはサーバー内部で処理を転送するため、ブラウザのURLは通常変わりません。"
  ),

  C(
    "forward-03",
    "forward",
    "リダイレクトしたとき、ブラウザに表示されるURLは通常どうなる？",
    [
      "移動先のURLへ変わる",
      "元のURLのまま",
      "必ずlocalhostになる",
      "URLが削除される"
    ],
    0,
    "リダイレクトではブラウザが移動先へ再リクエストするため、URLも移動先へ変化します。"
  ),

  C(
    "forward-04",
    "forward",
    "JSPへの直接アクセスを防ぎ、Servlet経由で表示させたい場合の配置先として適切なのはどれ？",
    [
      "WEB-INFフォルダ内",
      "cssフォルダ内",
      "imagesフォルダ内",
      "どこでも同じ"
    ],
    0,
    "JSPを<code>WEB-INF</code>内へ配置すると、通常はブラウザから直接アクセスできません。Servletからフォワードして表示します。"
  ),

  W(
    "forward-w01",
    "forward",
    "<code>/WEB-INF/jsp/result.jsp</code>へフォワードする基本コードを書きなさい。",
    "RequestDispatcher dispatcher = request.getRequestDispatcher(\"/WEB-INF/jsp/result.jsp\"); dispatcher.forward(request, response);",
    [
      ["getrequestdispatcher"],
      ["/web-inf/jsp/result.jsp"],
      [".forward", "forward("]
    ],
    "RequestDispatcherを取得して、<code>forward(request, response)</code>を呼び出します。"
  ),

  W(
    "forward-w02",
    "forward",
    "フォワードとリダイレクトの違いを、処理場所とURLの変化に触れて説明しなさい。",
    "フォワードはサーバー内部で転送するためURLは基本的に変わらない。リダイレクトはブラウザに再リクエストさせるためURLが移動先へ変わる。",
    [
      ["フォワード", "forward"],
      ["リダイレクト", "redirect"],
      ["url"]
    ],
    "「フォワード＝サーバー内部・URLは変わらない」「リダイレクト＝再リクエスト・URLが変わる」と対比しましょう。"
  ),

  /* =======================================================
     7. スコープ
  ======================================================= */

  C(
    "scope-01",
    "scope",
    "Servletからフォワード先のJSPへデータを渡すとき、最も基本的に使うスコープはどれ？",
    [
      "リクエストスコープ",
      "アプリケーションスコープ",
      "CSSスコープ",
      "ローカル変数"
    ],
    0,
    "1回のリクエスト処理内でServletからJSPへ渡す場合、リクエストスコープが適しています。"
  ),

  C(
    "scope-02",
    "scope",
    "リクエストスコープへデータを保存するメソッドはどれ？",
    [
      "request.setAttribute()",
      "request.getParameter()",
      "response.sendRedirect()",
      "out.println()"
    ],
    0,
    "<code>request.setAttribute(\"名前\", 値)</code>で保存します。getParameterとは用途が異なります。"
  ),

  C(
    "scope-03",
    "scope",
    "リクエストスコープからデータを取得するメソッドはどれ？",
    [
      "request.getAttribute()",
      "request.setParameter()",
      "response.getAttribute()",
      "session.getParameter()"
    ],
    0,
    "<code>request.getAttribute(\"名前\")</code>で取得します。戻り値はObjectなので、必要に応じてキャストします。"
  ),

  C(
    "scope-04",
    "scope",
    "同じ利用者の複数リクエスト間で、ログイン情報などを保持するのに適したスコープはどれ？",
    [
      "セッションスコープ",
      "リクエストスコープ",
      "ローカル変数",
      "スクリプト式"
    ],
    0,
    "セッションスコープは、同じ利用者の複数リクエスト間でデータを保持できます。"
  ),

  C(
    "scope-05",
    "scope",
    "Webアプリケーション全体でデータを共有するスコープはどれ？",
    [
      "アプリケーションスコープ",
      "リクエストスコープ",
      "フォームスコープ",
      "ローカルスコープ"
    ],
    0,
    "アプリケーションスコープはWebアプリケーション全体で共有されます。複数利用者が扱う可能性があります。"
  ),

  W(
    "scope-w01",
    "scope",
    "変数<code>user</code>を、名前<code>user</code>でリクエストスコープへ保存するコードを書きなさい。",
    "request.setAttribute(\"user\", user);",
    [
      ["request.setattribute"],
      ["user"]
    ],
    "<code>request.setAttribute(\"user\", user);</code>とします。第1引数は保存名、第2引数は保存する値です。"
  ),

  W(
    "scope-w02",
    "scope",
    "リクエスト・セッション・アプリケーションスコープの違いを、共有できる範囲に触れて説明しなさい。",
    "リクエストスコープは1回のリクエスト内、セッションスコープは同じ利用者の複数リクエスト間、アプリケーションスコープはWebアプリケーション全体で共有する。",
    [
      ["リクエスト"],
      ["セッション"],
      ["アプリケーション"]
    ],
    "どこまでデータを共有するかが異なります。用途に合ったスコープを選べるようにしましょう。"
  ),

  /* =======================================================
     8. JavaBeans・型変換
  ======================================================= */

  C(
    "beans-01",
    "beans",
    "JavaBeansのプロパティへ値を設定するメソッドとして一般的な名前はどれ？",
    [
      "set〇〇()",
      "get〇〇()",
      "print〇〇()",
      "forward〇〇()"
    ],
    0,
    "プロパティ名がnameなら、<code>setName()</code>で値を設定します。これをsetterと呼びます。"
  ),

  C(
    "beans-02",
    "beans",
    "JavaBeansのプロパティから値を取得するメソッドとして一般的な名前はどれ？",
    [
      "get〇〇()",
      "set〇〇()",
      "post〇〇()",
      "send〇〇()"
    ],
    0,
    "プロパティ名がnameなら、<code>getName()</code>で値を取得します。これをgetterと呼びます。"
  ),

  C(
    "beans-03",
    "beans",
    "<code>request.getParameter()</code>の基本的な戻り値の型はどれ？",
    [
      "String",
      "int",
      "boolean",
      "HttpSession"
    ],
    0,
    "フォームから数字が送信されても、getParameterで取得した直後は基本的にStringです。"
  ),

  C(
    "beans-04",
    "beans",
    "文字列変数<code>ageText</code>をint型へ変換する記述はどれ？",
    [
      "Integer.parseInt(ageText)",
      "String.parseInt(ageText)",
      "ageText.toServlet()",
      "request.intValue(ageText)"
    ],
    0,
    "<code>Integer.parseInt(ageText)</code>でStringをintへ変換できます。数字以外の文字列では例外が発生する可能性があります。"
  ),

  C(
    "beans-05",
    "beans",
    "JavaBeansの役割として最も適切なものはどれ？",
    [
      "関連するデータをオブジェクトとしてまとめて扱う",
      "HTMLの色だけを変更する",
      "URLを自動生成するだけ",
      "Webサーバーを終了する"
    ],
    0,
    "JavaBeansは、名前・年齢などの関連するデータを1つのインスタンスへまとめ、ServletとJSPの間などで扱いやすくします。"
  ),

  W(
    "beans-w01",
    "beans",
    "リクエストパラメータ<code>age</code>を取得し、int型へ変換するコードを書きなさい。",
    "int age = Integer.parseInt(request.getParameter(\"age\"));",
    [
      ["integer.parseint"],
      ["request.getparameter"],
      ["age"]
    ],
    "getParameterの戻り値はStringです。数値として使用する場合は<code>Integer.parseInt()</code>などで変換します。"
  ),

  W(
    "beans-w02",
    "beans",
    "JavaBeansの役割と、プロパティを操作する基本メソッドについて説明しなさい。",
    "JavaBeansは関連するデータをまとめて扱うJavaクラスで、プロパティの値はsetterで設定し、getterで取得する。",
    [
      ["データ", "値"],
      ["setter", "set"],
      ["getter", "get"]
    ],
    "JavaBeansを「データをまとめるクラス」と説明し、getterとsetterの役割も書けるようにしましょう。"
  )
];

/* =========================================================
   カテゴリ表示名
========================================================= */

const categoryNames = {
  servlet: "Servletの基本",
  request: "リクエスト処理",
  response: "レスポンス処理",
  jsp: "JSP",
  mvc: "MVCモデル",
  forward: "フォワード／リダイレクト",
  scope: "スコープ",
  beans: "JavaBeans・型変換"
};
/* =========================================================
   保存データ
========================================================= */

const STORAGE_KEY = "ssjava-battle-save-v1";

function createDefaultSaveData() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    missedIds: [],
    masteredIds: []
  };
}

function loadSaveData() {
  try {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (!savedText) {
      return createDefaultSaveData();
    }

    const parsed = JSON.parse(savedText);

    return {
      totalAnswered:
        Number.isFinite(parsed.totalAnswered)
          ? parsed.totalAnswered
          : 0,

      totalCorrect:
        Number.isFinite(parsed.totalCorrect)
          ? parsed.totalCorrect
          : 0,

      missedIds:
        Array.isArray(parsed.missedIds)
          ? parsed.missedIds
          : [],

      masteredIds:
        Array.isArray(parsed.masteredIds)
          ? parsed.masteredIds
          : []
    };
  } catch (error) {
    console.warn("学習記録を読み込めませんでした。", error);
    return createDefaultSaveData();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(saveData)
    );
  } catch (error) {
    console.warn("学習記録を保存できませんでした。", error);
  }
}

let saveData = loadSaveData();

/* =========================================================
   DOM取得
========================================================= */

const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const totalAnsweredElement =
  document.getElementById("totalAnswered");

const totalCorrectElement =
  document.getElementById("totalCorrect");

const missedCountElement =
  document.getElementById("missedCount");

const masteryPercentElement =
  document.getElementById("masteryPercent");

const reviewButtonCountElement =
  document.getElementById("reviewButtonCount");

const categorySelect =
  document.getElementById("categorySelect");

const reviewButton =
  document.getElementById("reviewButton");

const resetButton =
  document.getElementById("resetButton");

const quitButton =
  document.getElementById("quitButton");

const quizModeLabel =
  document.getElementById("quizModeLabel");

const currentNumberElement =
  document.getElementById("currentNumber");

const totalQuestionsElement =
  document.getElementById("totalQuestions");

const progressBar =
  document.getElementById("progressBar");

const categoryBadge =
  document.getElementById("categoryBadge");

const questionTypeBadge =
  document.getElementById("questionTypeBadge");

const questionText =
  document.getElementById("questionText");

const choiceArea =
  document.getElementById("choiceArea");

const writtenArea =
  document.getElementById("writtenArea");

const writtenAnswer =
  document.getElementById("writtenAnswer");

const validationMessage =
  document.getElementById("validationMessage");

const feedbackPanel =
  document.getElementById("feedbackPanel");

const feedbackIcon =
  document.getElementById("feedbackIcon");

const feedbackTitle =
  document.getElementById("feedbackTitle");

const correctAnswerText =
  document.getElementById("correctAnswerText");

const explanationText =
  document.getElementById("explanationText");

const selfJudgeArea =
  document.getElementById("selfJudgeArea");

const markCorrectButton =
  document.getElementById("markCorrectButton");

const markReviewButton =
  document.getElementById("markReviewButton");

const submitButton =
  document.getElementById("submitButton");

const nextButton =
  document.getElementById("nextButton");

const resultRank =
  document.getElementById("resultRank");

const resultTitle =
  document.getElementById("resultTitle");

const resultCorrect =
  document.getElementById("resultCorrect");

const resultTotal =
  document.getElementById("resultTotal");

const resultMessage =
  document.getElementById("resultMessage");

const retryButton =
  document.getElementById("retryButton");

const homeButton =
  document.getElementById("homeButton");

const resultReviewButton =
  document.getElementById("resultReviewButton");

/* =========================================================
   クイズの状態
========================================================= */

const modeNames = {
  choice: "4択バトル",
  written: "記述トレーニング",
  challenge: "ランダム10問",
  review: "ミス復習"
};

let quizState = {
  mode: "choice",
  lastMode: "choice",
  questions: [],
  currentIndex: 0,
  selectedChoice: null,
  answered: false,
  sessionCorrect: 0,
  currentResult: null
};

/* =========================================================
   共通処理
========================================================= */

function showScreen(targetScreen) {
  homeScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");

  targetScreen.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function shuffleArray(array) {
  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {
    const randomIndex =
      Math.floor(Math.random() * (i + 1));

    [copied[i], copied[randomIndex]] =
      [copied[randomIndex], copied[i]];
  }

  return copied;
}

/*
  4択問題の選択肢をシャッフルする。

  元データでは正解番号が固定されているが、
  出題時に選択肢と正解番号を作り直す。
*/
function shuffleChoices(question) {
  if (question.type !== "choice") {
    return { ...question };
  }

  const choicePairs = question.choices.map(
    (choice, originalIndex) => ({
      choice,
      isCorrect: originalIndex === question.answer
    })
  );

  const shuffledPairs = shuffleArray(choicePairs);

  return {
    ...question,
    choices: shuffledPairs.map(pair => pair.choice),
    answer: shuffledPairs.findIndex(
      pair => pair.isCorrect
    )
  };
}

function uniqueArray(array) {
  return [...new Set(array)];
}

function addToArray(array, value) {
  return uniqueArray([...array, value]);
}

function removeFromArray(array, value) {
  return array.filter(item => item !== value);
}

function getCurrentQuestion() {
  return quizState.questions[quizState.currentIndex];
}

/* =========================================================
   学習状況の表示
========================================================= */

function updateHomeStats() {
  saveData.missedIds = uniqueArray(
    saveData.missedIds
  ).filter(id =>
    quizData.some(question => question.id === id)
  );

  saveData.masteredIds = uniqueArray(
    saveData.masteredIds
  ).filter(id =>
    quizData.some(question => question.id === id)
  );

  const mastery =
    quizData.length === 0
      ? 0
      : Math.round(
          (
            saveData.masteredIds.length /
            quizData.length
          ) * 100
        );

  totalAnsweredElement.textContent =
    saveData.totalAnswered;

  totalCorrectElement.textContent =
    saveData.totalCorrect;

  missedCountElement.textContent =
    saveData.missedIds.length;

  reviewButtonCountElement.textContent =
    saveData.missedIds.length;

  masteryPercentElement.textContent =
    `${mastery}%`;

  if (saveData.missedIds.length === 0) {
    reviewButton.setAttribute(
      "aria-label",
      "現在、復習問題はありません"
    );
  } else {
    reviewButton.setAttribute(
      "aria-label",
      `復習問題が${saveData.missedIds.length}問あります`
    );
  }

  saveProgress();
}

/* =========================================================
   出題する問題の作成
========================================================= */

function getCategoryFilteredQuestions() {
  const selectedCategory = categorySelect.value;

  if (selectedCategory === "all") {
    return [...quizData];
  }

  return quizData.filter(
    question =>
      question.category === selectedCategory
  );
}

function createQuestionSet(mode) {
  let questions = [];

  if (mode === "review") {
    questions = quizData.filter(question =>
      saveData.missedIds.includes(question.id)
    );
  } else {
    questions = getCategoryFilteredQuestions();

    if (mode === "choice") {
      questions = questions.filter(
        question => question.type === "choice"
      );
    }

    if (mode === "written") {
      questions = questions.filter(
        question => question.type === "written"
      );
    }
  }

  questions = shuffleArray(questions);

  if (mode === "challenge") {
    questions = questions.slice(0, 10);
  }

  return questions.map(shuffleChoices);
}

/* =========================================================
   クイズ開始
========================================================= */

function startQuiz(mode) {
  const newQuestions = createQuestionSet(mode);

  if (newQuestions.length === 0) {
    if (mode === "review") {
      alert(
        "現在、復習待ちの問題はありません。\n" +
        "通常モードで問題に挑戦してみましょう！"
      );
    } else {
      alert(
        "選択した条件に該当する問題がありません。"
      );
    }

    return;
  }

  quizState = {
    mode,
    lastMode: mode,
    questions: newQuestions,
    currentIndex: 0,
    selectedChoice: null,
    answered: false,
    sessionCorrect: 0,
    currentResult: null
  };

  quizModeLabel.textContent =
    modeNames[mode] || "クイズ";

  totalQuestionsElement.textContent =
    quizState.questions.length;

  showScreen(quizScreen);
  renderQuestion();
}

/* =========================================================
   問題表示
========================================================= */

function resetQuestionDisplay() {
  quizState.selectedChoice = null;
  quizState.answered = false;
  quizState.currentResult = null;

  choiceArea.innerHTML = "";

  writtenAnswer.value = "";
  writtenAnswer.disabled = false;

  feedbackPanel.classList.add("hidden");
  feedbackPanel.classList.remove(
    "is-correct",
    "is-incorrect"
  );

  selfJudgeArea.classList.add("hidden");
  validationMessage.classList.add("hidden");

  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");

  markCorrectButton.disabled = false;
  markReviewButton.disabled = false;
}

function renderQuestion() {
  resetQuestionDisplay();

  const question = getCurrentQuestion();

  if (!question) {
    finishQuiz();
    return;
  }

  const questionNumber =
    quizState.currentIndex + 1;

  currentNumberElement.textContent =
    questionNumber;

  totalQuestionsElement.textContent =
    quizState.questions.length;

  const progress =
    (
      quizState.currentIndex /
      quizState.questions.length
    ) * 100;

  progressBar.style.width = `${progress}%`;

  categoryBadge.textContent =
    categoryNames[question.category] ||
    question.category;

  questionTypeBadge.textContent =
    question.type === "choice"
      ? "4択"
      : "記述";

  questionText.innerHTML =
    question.question;

  if (question.type === "choice") {
    renderChoices(question);
  } else {
    renderWrittenQuestion();
  }
}

function renderChoices(question) {
  choiceArea.classList.remove("hidden");
  writtenArea.classList.add("hidden");

  question.choices.forEach(
    (choice, index) => {
      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "choice-button";
      button.dataset.index = String(index);

      button.innerHTML = `
        <span class="choice-number">
          ${index + 1}
        </span>

        <span class="choice-text">
          ${choice}
        </span>
      `;

      button.addEventListener("click", () => {
        selectChoice(index);
      });

      choiceArea.appendChild(button);
    }
  );
}

function renderWrittenQuestion() {
  choiceArea.classList.add("hidden");
  writtenArea.classList.remove("hidden");

  setTimeout(() => {
    writtenAnswer.focus();
  }, 100);
}

/* =========================================================
   4択問題の選択
========================================================= */

function selectChoice(index) {
  if (quizState.answered) {
    return;
  }

  const question = getCurrentQuestion();

  if (
    !question ||
    question.type !== "choice" ||
    index < 0 ||
    index >= question.choices.length
  ) {
    return;
  }

  quizState.selectedChoice = index;

  const choiceButtons =
    choiceArea.querySelectorAll(
      ".choice-button"
    );

  choiceButtons.forEach(
    (button, buttonIndex) => {
      button.classList.toggle(
        "selected",
        buttonIndex === index
      );
    }
  );

  validationMessage.classList.add("hidden");
}

/* =========================================================
   記述問題の判定
========================================================= */

function normalizeAnswer(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[。、，．]/g, "");
}

function judgeWrittenAnswer(question, answerText) {
  const normalizedAnswer =
    normalizeAnswer(answerText);

  /*
    各キーワードグループについて、
    どれか1つが含まれているか確認する。
  */
  return question.keywords.every(group =>
    group.some(keyword =>
      normalizedAnswer.includes(
        normalizeAnswer(keyword)
      )
    )
  );
}

/* =========================================================
   解答処理
========================================================= */

function submitAnswer() {
  if (quizState.answered) {
    return;
  }

  const question = getCurrentQuestion();

  if (!question) {
    return;
  }

  let isCorrect = false;

  if (question.type === "choice") {
    if (quizState.selectedChoice === null) {
      showValidation(
        "選択肢を1つ選んでください。"
      );
      return;
    }

    isCorrect =
      quizState.selectedChoice ===
      question.answer;
  } else {
    const answerText =
      writtenAnswer.value.trim();

    if (!answerText) {
      showValidation(
        "解答を入力してください。"
      );
      writtenAnswer.focus();
      return;
    }

    isCorrect =
      judgeWrittenAnswer(
        question,
        answerText
      );
  }

  quizState.answered = true;
  quizState.currentResult = isCorrect;

  recordAnswer(question, isCorrect);
  showAnswerFeedback(question, isCorrect);
}

function showValidation(message) {
  validationMessage.textContent = message;
  validationMessage.classList.remove("hidden");
}

/* =========================================================
   成績記録
========================================================= */

function recordAnswer(question, isCorrect) {
  saveData.totalAnswered += 1;

  if (isCorrect) {
    saveData.totalCorrect += 1;
    quizState.sessionCorrect += 1;

    saveData.masteredIds = addToArray(
      saveData.masteredIds,
      question.id
    );

    saveData.missedIds = removeFromArray(
      saveData.missedIds,
      question.id
    );
  } else {
    saveData.missedIds = addToArray(
      saveData.missedIds,
      question.id
    );

    saveData.masteredIds = removeFromArray(
      saveData.masteredIds,
      question.id
    );
  }

  saveProgress();
  updateHomeStats();
}

/*
  記述問題の自動判定を、
  学習者が模範解答を確認して変更する処理。
*/
function changeCurrentJudgement(isCorrect) {
  const question = getCurrentQuestion();

  if (
    !question ||
    question.type !== "written" ||
    quizState.currentResult === isCorrect
  ) {
    return;
  }

  const previousResult =
    quizState.currentResult;

  quizState.currentResult = isCorrect;

  if (previousResult === false && isCorrect) {
    saveData.totalCorrect += 1;
    quizState.sessionCorrect += 1;
  }

  if (previousResult === true && !isCorrect) {
    saveData.totalCorrect = Math.max(
      0,
      saveData.totalCorrect - 1
    );

    quizState.sessionCorrect = Math.max(
      0,
      quizState.sessionCorrect - 1
    );
  }

  if (isCorrect) {
    saveData.masteredIds = addToArray(
      saveData.masteredIds,
      question.id
    );

    saveData.missedIds = removeFromArray(
      saveData.missedIds,
      question.id
    );
  } else {
    saveData.missedIds = addToArray(
      saveData.missedIds,
      question.id
    );

    saveData.masteredIds = removeFromArray(
      saveData.masteredIds,
      question.id
    );
  }

  saveProgress();
  updateHomeStats();

  updateFeedbackStyle(isCorrect);

  feedbackTitle.textContent =
    isCorrect
      ? "正解扱いに変更しました！"
      : "要復習として登録しました";

  feedbackIcon.textContent =
    isCorrect ? "⭕" : "📝";
}

/* =========================================================
   解答・解説表示
========================================================= */

function showAnswerFeedback(
  question,
  isCorrect
) {
  validationMessage.classList.add("hidden");

  feedbackPanel.classList.remove("hidden");
  updateFeedbackStyle(isCorrect);

  if (isCorrect) {
    feedbackIcon.textContent = "⭕";
    feedbackTitle.textContent =
      getCorrectMessage();
  } else {
    feedbackIcon.textContent = "❌";
    feedbackTitle.textContent =
      getIncorrectMessage();
  }

  if (question.type === "choice") {
    correctAnswerText.innerHTML =
      `正解：<strong>${
        question.answer + 1
      }. ${question.choices[question.answer]}</strong>`;

    showChoiceResult(question);

    selfJudgeArea.classList.add("hidden");
  } else {
    correctAnswerText.innerHTML =
      `模範解答：<strong>${question.modelAnswer}</strong>`;

    writtenAnswer.disabled = true;
    selfJudgeArea.classList.remove("hidden");
  }

  explanationText.innerHTML =
    question.explanation;

  submitButton.classList.add("hidden");
  nextButton.classList.remove("hidden");

  const completedProgress =
    (
      (quizState.currentIndex + 1) /
      quizState.questions.length
    ) * 100;

  progressBar.style.width =
    `${completedProgress}%`;

  setTimeout(() => {
    feedbackPanel.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, 100);
}

function updateFeedbackStyle(isCorrect) {
  feedbackPanel.classList.remove(
    "is-correct",
    "is-incorrect"
  );

  feedbackPanel.classList.add(
    isCorrect
      ? "is-correct"
      : "is-incorrect"
  );
}

function showChoiceResult(question) {
  const buttons =
    choiceArea.querySelectorAll(
      ".choice-button"
    );

  buttons.forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (
      index === quizState.selectedChoice &&
      index !== question.answer
    ) {
      button.classList.add("incorrect");
    }
  });
}

function getCorrectMessage() {
  const messages = [
    "正解！その調子！",
    "完璧！理解できてる！",
    "ナイス！知識が刺さった！",
    "強い！そのまま進め！",
    "大正解！Javaが震えてる！"
  ];

  return messages[
    Math.floor(Math.random() * messages.length)
  ];
}

function getIncorrectMessage() {
  const messages = [
    "惜しい！ここで覚えれば勝ち！",
    "今のミスは本番前の経験値！",
    "大丈夫、解説を読めば強くなる！",
    "この問題は復習リストへ送った！",
    "まだ負けてない。ここから覚えよう！"
  ];

  return messages[
    Math.floor(Math.random() * messages.length)
  ];
}

/* =========================================================
   次の問題
========================================================= */

function goToNextQuestion() {
  if (!quizState.answered) {
    return;
  }

  quizState.currentIndex += 1;

  if (
    quizState.currentIndex >=
    quizState.questions.length
  ) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

/* =========================================================
   結果画面
========================================================= */

function finishQuiz() {
  const total =
    quizState.questions.length;

  const correct =
    quizState.sessionCorrect;

  const percentage =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);

  let rank = "C";
  let title = "ここから強くなる！";
  let message =
    "間違えた問題はミス復習で倒そう。50%以上を目指して再挑戦！";

  if (percentage >= 80) {
    rank = "A";
    title = "A評価ライン突破！";
    message =
      "得点率80%以上！かなり仕上がっています。記述問題の表現も確認しておこう。";
  } else if (percentage >= 50) {
    rank = "B";
    title = "到達水準クリア！";
    message =
      "得点率50%以上！B評価は到達水準です。ミスを減らしてA評価を狙おう。";
  }

  resultRank.textContent = rank;
  resultRank.className = "result-rank";

  if (rank === "B") {
    resultRank.classList.add("rank-b");
  }

  if (rank === "C") {
    resultRank.classList.add("rank-c");
  }

  resultTitle.textContent = title;
  resultCorrect.textContent = correct;
  resultTotal.textContent = total;

  resultMessage.textContent =
    `${correct}問正解、得点率${percentage}%です。${message}`;

  if (saveData.missedIds.length === 0) {
    resultReviewButton.classList.add("hidden");
  } else {
    resultReviewButton.classList.remove("hidden");
    resultReviewButton.textContent =
      `間違いを復習（${saveData.missedIds.length}問）`;
  }

  showScreen(resultScreen);
}

/* =========================================================
   ホームへ戻る
========================================================= */

function returnHome() {
  updateHomeStats();
  showScreen(homeScreen);
}

function quitQuiz() {
  const confirmed = confirm(
    "クイズを終了してメニューへ戻りますか？\n" +
    "すでに解答した問題の記録は保存されています。"
  );

  if (confirmed) {
    returnHome();
  }
}

/* =========================================================
   学習記録リセット
========================================================= */

function resetLearningRecord() {
  const confirmed = confirm(
    "累計解答数・正解数・ミス復習リストを" +
    "すべて削除します。\n本当にリセットしますか？"
  );

  if (!confirmed) {
    return;
  }

  saveData = createDefaultSaveData();

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn(
      "学習記録を削除できませんでした。",
      error
    );
  }

  updateHomeStats();

  alert("学習記録をリセットしました。");
}

/* =========================================================
   キーボード・テンキー操作
========================================================= */

function handleKeyboard(event) {
  if (quizScreen.classList.contains("hidden")) {
    return;
  }

  const activeTag =
    document.activeElement?.tagName?.toLowerCase();

  const isTyping =
    activeTag === "textarea" ||
    activeTag === "input" ||
    activeTag === "select";

  /*
    記述欄では通常のEnterを改行に使用する。
    Ctrl + Enter または Command + Enter で解答可能。
  */
  if (isTyping) {
    if (
      activeTag === "textarea" &&
      event.key === "Enter" &&
      (event.ctrlKey || event.metaKey)
    ) {
      event.preventDefault();

      if (!quizState.answered) {
        submitAnswer();
      } else {
        goToNextQuestion();
      }
    }

    return;
  }

  const question = getCurrentQuestion();

  if (
    question?.type === "choice" &&
    !quizState.answered &&
    ["1", "2", "3", "4"].includes(event.key)
  ) {
    event.preventDefault();

    const selectedIndex =
      Number(event.key) - 1;

    selectChoice(selectedIndex);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();

    if (quizState.answered) {
      goToNextQuestion();
    } else {
      submitAnswer();
    }
  }
}

/* =========================================================
   イベント登録
========================================================= */

document
  .querySelectorAll(".mode-card")
  .forEach(button => {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;

      if (mode) {
        startQuiz(mode);
      }
    });
  });

submitButton.addEventListener(
  "click",
  submitAnswer
);

nextButton.addEventListener(
  "click",
  goToNextQuestion
);

quitButton.addEventListener(
  "click",
  quitQuiz
);

homeButton.addEventListener(
  "click",
  returnHome
);

retryButton.addEventListener(
  "click",
  () => {
    startQuiz(quizState.lastMode);
  }
);

resultReviewButton.addEventListener(
  "click",
  () => {
    startQuiz("review");
  }
);

resetButton.addEventListener(
  "click",
  resetLearningRecord
);

markCorrectButton.addEventListener(
  "click",
  () => {
    changeCurrentJudgement(true);
  }
);

markReviewButton.addEventListener(
  "click",
  () => {
    changeCurrentJudgement(false);
  }
);

document.addEventListener(
  "keydown",
  handleKeyboard
);

/* =========================================================
   初期化
========================================================= */

updateHomeStats();
showScreen(homeScreen);
