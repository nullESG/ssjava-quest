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
   試験範囲修正

   今回の試験範囲に含まれないもの：
   ・セッションスコープ
   ・アプリケーションスコープ

   上記を含む問題を出題データから削除する。
========================================================= */

const excludedQuestionIds = new Set([
  "scope-04",
  "scope-05",
  "scope-w02"
]);

for (let i = quizData.length - 1; i >= 0; i--) {
  if (excludedQuestionIds.has(quizData[i].id)) {
    quizData.splice(i, 1);
  }
}

/* =========================================================
   試験範囲内の追加問題

   範囲外を削除した代わりに、
   Servlet・JSP・MVC・フォワード・
   リクエストスコープなどを強化する。
========================================================= */

quizData.push(
  /* =======================================================
     Servletの基本・追加問題
  ======================================================= */

  C(
    "servlet-add-01",
    "servlet",
    "<code>doGet()</code>の引数として基本的に受け取る2つのオブジェクトはどれ？",
    [
      "HttpServletRequestとHttpServletResponse",
      "HttpSessionとPrintWriter",
      "StringとInteger",
      "JSPとHTML"
    ],
    0,
    "<code>doGet(HttpServletRequest request, HttpServletResponse response)</code>のように、リクエストとレスポンスを引数として受け取ります。"
  ),

  C(
    "servlet-add-02",
    "servlet",
    "<code>doPost()</code>をオーバーライドしているServletへ、GETリクエストだけを送った場合の説明として適切なものはどれ？",
    [
      "通常、作成したdoPost()の処理は実行されない",
      "必ずdoPost()が実行される",
      "自動的にJSPへフォワードされる",
      "必ずdoGet()が自動生成される"
    ],
    0,
    "GETとPOSTでは呼び出されるメソッドが異なります。POST用の処理を実行したい場合は、フォームなどからPOSTリクエストを送る必要があります。"
  ),

  C(
    "servlet-add-03",
    "servlet",
    "<code>@WebServlet(\"/Sample\")</code>を指定したServletへアクセスするURLとして、確認すべき部分はどれ？",
    [
      "URL末尾の/Sample",
      "Javaファイルのコメント数",
      "CSSのファイル名",
      "変数のデータ型だけ"
    ],
    0,
    "URLパターンが<code>/Sample</code>なら、Webアプリケーションのコンテキストパスに続けて<code>/Sample</code>へアクセスします。"
  ),

  C(
    "servlet-add-04",
    "servlet",
    "Servletを修正したのに以前の実行結果が表示される場合、確認事項として最も適切なものはどれ？",
    [
      "修正内容がサーバーへ反映されているか確認する",
      "必ずパソコンを買い替える",
      "HTMLをすべて削除する",
      "URLパターンを毎回ランダムにする"
    ],
    0,
    "Servletの修正後は、サーバーへの再反映・再公開や再起動が必要な場合があります。正しいURLへアクセスしているかも確認します。"
  ),

  W(
    "servlet-add-w01",
    "servlet",
    "GETリクエストを処理する<code>doGet()</code>の基本的なメソッド宣言を書きなさい。",
    "protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException",
    [
      ["protected"],
      ["void"],
      ["doget"],
      ["httpservletrequest"],
      ["httpservletresponse"]
    ],
    "基本形は<code>protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException</code>です。教材の書き方に合わせて記述できるようにしましょう。"
  ),

  /* =======================================================
     フォーム・リクエスト処理の追加問題
  ======================================================= */

  C(
    "request-add-01",
    "request",
    "HTMLフォームの<code>action</code>属性には、基本的に何を指定する？",
    [
      "送信先のURL",
      "入力欄の文字色",
      "リクエストの戻り値",
      "JavaBeansのプロパティ型"
    ],
    0,
    "<code>action</code>属性にはフォームデータの送信先を指定します。ServletのURLパターンを送信先にすることがあります。"
  ),

  C(
    "request-add-02",
    "request",
    "<code>request.getParameter(\"userName\")</code>で値を取得するため、HTMLの入力欄に必要な指定はどれ？",
    [
      "name=\"userName\"",
      "class=\"userName\"",
      "id=\"userName\"だけ",
      "method=\"userName\""
    ],
    0,
    "getParameterの引数は、フォーム部品の<code>name</code>属性と対応します。id属性だけではリクエストパラメータ名になりません。"
  ),

  C(
    "request-add-03",
    "request",
    "次のうち、リンクからパラメータ<code>id=10</code>をGET送信する記述として適切なものはどれ？",
    [
      "<a href=\"Detail?id=10\">詳細</a>",
      "<a method=\"post\">詳細</a>",
      "<form href=\"id=10\">詳細</form>",
      "<jsp id=\"10\">詳細</jsp>"
    ],
    0,
    "URLの<code>?</code>以降へ<code>名前=値</code>を記述すると、クエリ文字列としてGET送信できます。"
  ),

  C(
    "request-add-04",
    "request",
    "複数のGETパラメータをURLへ付けるとき、2つ目以降のパラメータを区切る記号はどれ？",
    [
      "&",
      "#",
      "%",
      ":"
    ],
    0,
    "<code>Search?keyword=java&page=2</code>のように、最初は<code>?</code>、2つ目以降は<code>&amp;</code>で区切ります。"
  ),

  W(
    "request-add-w01",
    "request",
    "<code>name</code>という名前の入力欄をPOST送信で<code>Register</code>へ送る、基本的なHTMLフォームを書きなさい。",
    "<form action=\"Register\" method=\"post\"><input type=\"text\" name=\"name\"><button type=\"submit\">送信</button></form>",
    [
      ["<form"],
      ["action=\"register\"", "action='register'"],
      ["method=\"post\"", "method='post'"],
      ["name=\"name\"", "name='name'"]
    ],
    "重要なのは、formの<code>action</code>と<code>method</code>、入力欄の<code>name</code>です。"
  ),

  W(
    "request-add-w02",
    "request",
    "フォーム部品の<code>name</code>属性と、<code>request.getParameter()</code>の関係を説明しなさい。",
    "フォーム部品のname属性がリクエストパラメータ名になり、getParameterの引数へ同じ名前を指定して値を取得する。",
    [
      ["name"],
      ["getparameter"],
      ["同じ", "対応"]
    ],
    "例えば<code>name=\"age\"</code>なら、<code>request.getParameter(\"age\")</code>で値を取得します。"
  ),

  /* =======================================================
     レスポンス・HTML生成の追加問題
  ======================================================= */

  C(
    "response-add-01",
    "response",
    "ServletでHTMLを出力する前に、文字化け対策として行う設定はどれ？",
    [
      "Content-Typeと文字コードを設定する",
      "URLパターンを削除する",
      "doGet()をmain()へ変更する",
      "JSPコメントを追加する"
    ],
    0,
    "<code>response.setContentType(\"text/html; charset=UTF-8\");</code>のように設定します。"
  ),

  C(
    "response-add-02",
    "response",
    "Servletから見出し「結果」をHTMLとして出力する記述はどれ？",
    [
      "out.println(\"<h1>結果</h1>\");",
      "request.getParameter(\"<h1>結果</h1>\");",
      "response.sendRedirect(\"<h1>結果</h1>\");",
      "dispatcher.forward(\"<h1>結果</h1>\");"
    ],
    0,
    "PrintWriterを取得し、<code>out.println()</code>などを使ってHTML文字列を出力します。"
  ),

  C(
    "response-add-03",
    "response",
    "リダイレクトの説明として正しいものはどれ？",
    [
      "ブラウザへ移動先への再リクエストを指示する",
      "サーバー内部だけでJSPを実行する",
      "リクエストパラメータをintへ変換する",
      "JavaBeansを自動生成する"
    ],
    0,
    "リダイレクトではレスポンスを受け取ったブラウザが、指定された移動先へ新しいリクエストを送ります。"
  ),

  W(
    "response-add-w01",
    "response",
    "ServletからHTMLを出力するために、Content-Typeを設定してPrintWriterを取得するコードを書きなさい。",
    "response.setContentType(\"text/html; charset=UTF-8\"); PrintWriter out = response.getWriter();",
    [
      ["response.setcontenttype"],
      ["text/html"],
      ["utf-8", "utf8"],
      ["printwriter"],
      ["response.getwriter"]
    ],
    "Content-Typeを設定した後、<code>response.getWriter()</code>でPrintWriterを取得します。"
  ),

  /* =======================================================
     JSPの追加問題
  ======================================================= */

  C(
    "jsp-add-01",
    "jsp",
    "JSPが必要とされる理由として適切なものはどれ？",
    [
      "ServletのprintlnだけでHTMLを作るより、画面を記述しやすい",
      "Servletを一切使えなくするため",
      "GETとPOSTを同じものにするため",
      "JavaBeansを削除するため"
    ],
    0,
    "ServletでHTMLを1行ずつ出力すると、画面が複雑になるほど保守しにくくなります。JSPを使うとHTML中心で画面を記述できます。"
  ),

  C(
    "jsp-add-02",
    "jsp",
    "スクリプト式<code>&lt;%= name %&gt;</code>について正しい説明はどれ？",
    [
      "nameの値を画面へ出力する",
      "nameというServletを実行する",
      "nameをリダイレクト先にする",
      "nameを必ずintへ変換する"
    ],
    0,
    "スクリプト式は、式を評価した結果をレスポンスへ出力します。"
  ),

  C(
    "jsp-add-03",
    "jsp",
    "次のうち、JSPコメントとHTMLコメントの違いとして正しいものはどれ？",
    [
      "JSPコメントは生成されるHTMLに含まれない",
      "JSPコメントは必ずブラウザへ表示される",
      "HTMLコメントでは文字を書けない",
      "両者はJavaクラスを継承する"
    ],
    0,
    "JSPコメント<code>&lt;%-- --%&gt;</code>は、JSPの処理段階で除かれるため、ブラウザへ返すHTMLに含まれません。"
  ),

  C(
    "jsp-add-04",
    "jsp",
    "JSPファイルをWebサーバー上で実行する方法として適切なものはどれ？",
    [
      "JSPへアクセスするか、Servletからフォワードする",
      "Javaのmain()だけを実行する",
      "CSSとして読み込む",
      "画像ファイルへ変換する"
    ],
    0,
    "JSPはWebサーバー上で処理されます。MVC構成ではServletからJSPへフォワードする形が基本です。"
  ),

  W(
    "jsp-add-w01",
    "jsp",
    "JSPが必要とされる理由を、ServletによるHTML生成と比較して説明しなさい。",
    "Servletでprintlnを使って大量のHTMLを生成すると画面の記述が複雑になるため、JSPを使ってHTML中心に表示部分を作成する。",
    [
      ["servlet"],
      ["html"],
      ["jsp"],
      ["表示", "画面"]
    ],
    "「ServletだけではHTML生成が複雑」「JSPならHTML中心に表示を作れる」という比較がポイントです。"
  ),

  /* =======================================================
     MVCの追加問題
  ======================================================= */

  C(
    "mvc-add-01",
    "mvc",
    "Servletがリクエストを受け、JavaBeansを作成し、JSPへフォワードする構成で、Servletの役割はどれ？",
    [
      "Controller",
      "View",
      "HTMLコメント",
      "プロパティ"
    ],
    0,
    "Servletはリクエストを受けて処理の流れを制御するため、Controllerを担当します。"
  ),

  C(
    "mvc-add-02",
    "mvc",
    "MVCでJSPへ担当させる処理として最も適切なものはどれ？",
    [
      "受け取ったデータを使った画面表示",
      "すべての業務処理",
      "URLパターンのアノテーション設定",
      "Servletクラスの継承"
    ],
    0,
    "JSPはViewとして画面表示を担当します。複雑な処理はServletやModel側へ分けるのが基本です。"
  ),

  W(
    "mvc-add-w01",
    "mvc",
    "Servlet・JavaBeans・JSPを使うMVCの基本的な処理の流れを説明しなさい。",
    "Servletがリクエストを受けて処理を制御し、必要なデータをJavaBeansにまとめてスコープへ保存し、JSPへフォワードして表示する。",
    [
      ["servlet"],
      ["javabeans", "beans", "bean"],
      ["スコープ", "setattribute"],
      ["jsp"],
      ["フォワード", "forward"]
    ],
    "ControllerであるServletが処理し、データをModelへまとめ、ViewであるJSPへフォワードして表示する流れを覚えましょう。"
  ),

  /* =======================================================
     フォワード・直接アクセス禁止の追加問題
  ======================================================= */

  C(
    "forward-add-01",
    "forward",
    "ServletからJSPへデータを渡して表示する場合、リダイレクトよりフォワードが適している主な理由はどれ？",
    [
      "同じリクエストを使ってリクエストスコープのデータを渡せる",
      "必ずURLをJSPのURLへ変更できる",
      "Stringが自動的にintへ変わる",
      "JSPがServletを継承しなくなる"
    ],
    0,
    "フォワードでは同じリクエストが転送されるため、Servletがリクエストスコープへ保存したデータをJSPで取得できます。"
  ),

  C(
    "forward-add-02",
    "forward",
    "JSPを<code>WEB-INF</code>内へ配置する理由として最も適切なものはどれ？",
    [
      "ブラウザからJSPへ直接リクエストされるのを防ぐ",
      "JSPを画像として表示する",
      "GETをPOSTへ自動変換する",
      "JavaBeansを不要にする"
    ],
    0,
    "JSPへ直接アクセスさせず、Servletで必要な処理を行ってからフォワードする構成にできます。"
  ),

  C(
    "forward-add-03",
    "forward",
    "次のうち、フォワードの基本的な呼び出しとして正しいものはどれ？",
    [
      "dispatcher.forward(request, response);",
      "response.forward(dispatcher);",
      "request.sendRedirect(dispatcher);",
      "out.forward(request);"
    ],
    0,
    "RequestDispatcherを取得した後、<code>dispatcher.forward(request, response);</code>を実行します。"
  ),

  C(
    "forward-add-04",
    "forward",
    "フォワード先を<code>/WEB-INF/jsp/result.jsp</code>にする記述として正しいものはどれ？",
    [
      "request.getRequestDispatcher(\"/WEB-INF/jsp/result.jsp\")",
      "request.getParameter(\"/WEB-INF/jsp/result.jsp\")",
      "response.setContentType(\"/WEB-INF/jsp/result.jsp\")",
      "Integer.parseInt(\"/WEB-INF/jsp/result.jsp\")"
    ],
    0,
    "<code>getRequestDispatcher()</code>へフォワード先のパスを指定します。"
  ),

  W(
    "forward-add-w01",
    "forward",
    "JSPへの直接リクエストを禁止する理由と、そのためのJSP配置場所を説明しなさい。",
    "処理前のJSPへ直接アクセスされるのを防ぎ、Servletを経由させるため、JSPをWEB-INFフォルダ内へ配置する。",
    [
      ["直接"],
      ["servlet"],
      ["web-inf"]
    ],
    "JSPをWEB-INF内へ配置し、Servletからフォワードして表示する構成を説明できるようにしましょう。"
  ),

  /* =======================================================
     リクエストスコープの追加問題
  ======================================================= */

  C(
    "scope-add-01",
    "scope",
    "<code>request.setAttribute(\"message\", message)</code>の第1引数<code>\"message\"</code>は何を表す？",
    [
      "データを保存・取得するときに使う名前",
      "必ず表示されるHTML",
      "URLパターン",
      "リクエストメソッド"
    ],
    0,
    "第1引数は属性名です。取得するときも同じ名前を指定して<code>getAttribute(\"message\")</code>を使います。"
  ),

  C(
    "scope-add-02",
    "scope",
    "<code>getParameter()</code>と<code>getAttribute()</code>の違いとして正しいものはどれ？",
    [
      "getParameterは送信値、getAttributeはスコープへ保存した値を取得する",
      "どちらも必ずintを返す",
      "どちらもリダイレクトする",
      "getAttributeはHTMLの色を取得する"
    ],
    0,
    "getParameterはフォームなどから送信されたリクエストパラメータ、getAttributeはスコープへ保存した属性を取得します。"
  ),

  C(
    "scope-add-03",
    "scope",
    "リクエストスコープへ保存したJavaBeansをJSPで取得するとき、取得名は何と対応させる必要がある？",
    [
      "setAttribute()の第1引数",
      "@WebServletのURLだけ",
      "doGet()の戻り値",
      "Content-Typeだけ"
    ],
    0,
    "<code>setAttribute(\"user\", user)</code>で保存したなら、JSP側でも<code>getAttribute(\"user\")</code>のように同じ名前を使います。"
  ),

  C(
    "scope-add-04",
    "scope",
    "Servletがリクエストスコープへデータを保存した後の画面遷移として適切なものはどれ？",
    [
      "同じリクエストを渡せるフォワード",
      "必ずリダイレクト",
      "必ずアンカーリンク",
      "JavaBeansの削除"
    ],
    0,
    "リクエストスコープは1回のリクエスト内で共有します。そのため、ServletからJSPへ渡す場合はフォワードが適しています。"
  ),

  W(
    "scope-add-w01",
    "scope",
    "<code>request.setAttribute()</code>と<code>request.getAttribute()</code>の役割を説明しなさい。",
    "setAttributeは名前を付けてリクエストスコープへデータを保存し、getAttributeは同じ名前を指定して保存したデータを取得する。",
    [
      ["setattribute"],
      ["保存"],
      ["getattribute"],
      ["取得"]
    ],
    "保存時と取得時で同じ属性名を使う点も重要です。"
  ),

  W(
    "scope-add-w02",
    "scope",
    "リクエストパラメータとリクエストスコープの違いを説明しなさい。",
    "リクエストパラメータはフォームなどから送信された文字列データで、リクエストスコープはServletなどがsetAttributeでオブジェクトを保存して処理間で共有する仕組みである。",
    [
      ["パラメータ"],
      ["フォーム", "送信"],
      ["スコープ"],
      ["setattribute", "属性"]
    ],
    "getParameterで取得する送信値と、setAttribute・getAttributeで共有する属性を区別しましょう。"
  ),

  /* =======================================================
     JavaBeans・型変換の追加問題
  ======================================================= */

  C(
    "beans-add-01",
    "beans",
    "JavaBeansでnameプロパティを定義するとき、一般的に用意する組み合わせはどれ？",
    [
      "getName()とsetName()",
      "doGet()とdoPost()",
      "forward()とsendRedirect()",
      "println()とgetWriter()"
    ],
    0,
    "nameプロパティのgetterは<code>getName()</code>、setterは<code>setName()</code>です。"
  ),

  C(
    "beans-add-02",
    "beans",
    "<code>Integer.parseInt(request.getParameter(\"age\"))</code>が行っている処理はどれ？",
    [
      "ageの送信値を取得し、intへ変換する",
      "ageというJSPへフォワードする",
      "ageをリクエストスコープへ保存する",
      "ageをURLパターンにする"
    ],
    0,
    "getParameterでStringとして取得し、Integer.parseIntでint型へ変換しています。"
  ),

  C(
    "beans-add-03",
    "beans",
    "フォームから送信された文字列<code>\"20\"</code>を数値計算へ使う場合に必要な処理はどれ？",
    [
      "用途に応じて数値型へ変換する",
      "必ずJSPコメントへ変更する",
      "必ずリダイレクトする",
      "URLパターンとして登録する"
    ],
    0,
    "getParameterの戻り値はStringです。整数として扱うならInteger.parseIntなどで型変換します。"
  ),

  W(
    "beans-add-w01",
    "beans",
    "nameプロパティを持つJavaBeansのgetterとsetterの基本的なメソッド宣言を書きなさい。",
    "public String getName() { return name; } public void setName(String name) { this.name = name; }",
    [
      ["getname"],
      ["return"],
      ["setname"],
      ["this.name", "name="]
    ],
    "getterは値を返し、setterは引数で受け取った値をプロパティへ設定します。"
  )
);
/* =========================================================
   授業板書反映・4択問題

   対象：
   ・Webアプリケーション全体
   ・HTTP
   ・Servlet登録
   ・Form
   ・正規表現
   ・JSP実行
   ・JavaBeansのルール
   ・リクエストスコープ

   セッションスコープ・アプリケーションスコープは
   含めない。
========================================================= */

quizData.push(
  /* =======================================================
     Webアプリケーションの全体像
  ======================================================= */

  C(
    "board-web-01",
    "servlet",
    "Webアプリケーションの基本的な処理の順番として正しいものはどれ？",
    [
      "ブラウザからリクエスト → サーバーで処理 → HTMLなどをレスポンス",
      "サーバーからリクエスト → ブラウザでServletを実行 → Javaをレスポンス",
      "JSPからブラウザを作成 → Tomcatを削除 → HTMLを保存",
      "JavaBeansからURLを生成 → CSSでServletを実行"
    ],
    0,
    "基本は「クライアントからデータを取り込む」「サーバーで処理する」「クライアントへ結果を返す」という流れです。"
  ),

  C(
    "board-web-02",
    "servlet",
    "Webアプリケーションにおけるクライアントに該当するものはどれ？",
    [
      "ブラウザ",
      "Tomcat",
      "Servletクラス",
      "JavaBeans"
    ],
    0,
    "利用者が操作するブラウザがクライアントです。ブラウザがサーバーへリクエストを送信します。"
  ),

  C(
    "board-web-03",
    "servlet",
    "ServletやJSPを実行する環境として、授業で使用しているものはどれ？",
    [
      "Tomcat",
      "Excel",
      "GitHub Pages",
      "CSS"
    ],
    0,
    "TomcatはServletやJSPを実行するWebコンテナです。GitHub PagesではServletやJSPそのものは実行できません。"
  ),

  C(
    "board-web-04",
    "servlet",
    "サーバーサイドプログラムが動作するきっかけとして適切なものはどれ？",
    [
      "ブラウザからのリクエスト",
      "CSSの文字色",
      "JavaBeansのフィールド名だけ",
      "JSPコメントの記述だけ"
    ],
    0,
    "サーバーサイドプログラムは、ブラウザなどのクライアントからリクエストを受けてサーバー上で動作します。"
  ),

  /* =======================================================
     HTTP・Content-Type
  ======================================================= */

  C(
    "board-http-01",
    "response",
    "Content-Typeヘッダによって分かるものはどれ？",
    [
      "レスポンスボディに含まれるデータの種類",
      "Servletクラスのフィールド数",
      "JavaBeansのコンストラクタ数",
      "ブラウザの利用者名"
    ],
    0,
    "Content-Typeは、ボディ部分に含まれるデータがHTML・画像・JSONなどのどの種類であるかを表します。"
  ),

  C(
    "board-http-02",
    "response",
    "JPEG画像を表すContent-Typeとして適切なものはどれ？",
    [
      "image/jpeg",
      "text/jpeg",
      "image/html",
      "java/jpeg"
    ],
    0,
    "JPEG画像のメディアタイプは<code>image/jpeg</code>です。HTMLの場合は<code>text/html</code>です。"
  ),

  C(
    "board-http-03",
    "response",
    "HTTPレスポンスの基本的な構成として適切なものはどれ？",
    [
      "開始行・ヘッダー・ボディ",
      "getter・setter・コンストラクタ",
      "Model・View・Controllerだけ",
      "URLパターン・フィールド・プロパティ"
    ],
    0,
    "HTTPメッセージは、開始行、ヘッダー、空行、ボディという構成で確認できます。"
  ),

  C(
    "board-http-04",
    "request",
    "HTTPリクエストの開始行に含まれるものとして適切なのはどれ？",
    [
      "GETなどのリクエストメソッド",
      "JavaBeansのgetter",
      "JSPのスクリプトレット",
      "Serializableのメソッド"
    ],
    0,
    "<code>GET /sample.html HTTP/1.1</code>のように、リクエストラインにはメソッド・リクエスト対象・HTTPバージョンなどが含まれます。"
  ),

  C(
    "board-http-05",
    "request",
    "<code>curl</code>の説明として適切なものはどれ？",
    [
      "サーバーへリクエストを送り、レスポンスを確認できるツール",
      "JavaBeansを自動生成するJSPタグ",
      "Servletを継承するJavaクラス",
      "URLパターンを削除するコマンド"
    ],
    0,
    "curlはURLを指定してリクエストを送り、受け取ったレスポンスを確認できるツールです。"
  ),

  C(
    "board-http-06",
    "request",
    "<code>curl -v</code>の<code>-v</code>オプションの役割はどれ？",
    [
      "通信の詳細情報を表示する",
      "必ずPOSTへ変更する",
      "JSPをServletへ変換する",
      "JavaBeansをシリアライズする"
    ],
    0,
    "<code>-v</code>はverboseの意味で、リクエストヘッダーやレスポンスヘッダーなどの詳細を確認できます。"
  ),

  /* =======================================================
     Servletの登録とURLパターン
  ======================================================= */

  C(
    "board-map-01",
    "servlet",
    "ServletをURLパターンへ登録する方法として、授業で扱われている組み合わせはどれ？",
    [
      "@WebServletまたはweb.xml",
      "CSSまたはJavaBeans",
      "getterまたはsetter",
      "GETまたはContent-Type"
    ],
    0,
    "ServletのURLマッピングは、<code>@WebServlet</code>アノテーション、または<code>web.xml</code>で設定できます。"
  ),

  C(
    "board-map-02",
    "servlet",
    "<code>web.xml</code>の<code>&lt;servlet&gt;</code>要素の主な役割はどれ？",
    [
      "Servlet名とServletクラスを登録する",
      "HTMLフォームを表示する",
      "リクエストパラメータを取得する",
      "JPEG画像を作成する"
    ],
    0,
    "<code>&lt;servlet&gt;</code>では、<code>&lt;servlet-name&gt;</code>と<code>&lt;servlet-class&gt;</code>を使ってServletを登録します。"
  ),

  C(
    "board-map-03",
    "servlet",
    "<code>web.xml</code>の<code>&lt;servlet-mapping&gt;</code>要素の役割はどれ？",
    [
      "Servlet名とURLパターンを対応付ける",
      "JavaBeansのプロパティを設定する",
      "HTMLの文字コードを設定する",
      "リクエストスコープを削除する"
    ],
    0,
    "<code>&lt;servlet-mapping&gt;</code>でServlet名と<code>&lt;url-pattern&gt;</code>を対応付けます。"
  ),

  C(
    "board-map-04",
    "servlet",
    "既存のServletクラスをコピーして新しいクラスを作る場合、特に確認すべきものはどれ？",
    [
      "@WebServletのURLパターン",
      "HTMLの背景色",
      "JSPコメントの文章",
      "getterの戻り値だけ"
    ],
    0,
    "クラスをコピーしても<code>@WebServlet</code>のURLパターンは自動変更されません。コピー後は必ず確認します。"
  ),

  C(
    "board-map-05",
    "servlet",
    "複数のServletで同じURLパターンを指定した場合に起こり得ることはどれ？",
    [
      "URLマッピングが重複し、サーバーの起動に失敗する",
      "すべてのフォームがGETになる",
      "JSPコメントがブラウザへ表示される",
      "JavaBeansのフィールドがpublicになる"
    ],
    0,
    "同じWebアプリケーション内でURLパターンが重複すると、どのServletを実行すべきか決められず、起動エラーになることがあります。"
  ),

  /* =======================================================
     javax・jakarta
  ======================================================= */

  C(
    "board-package-01",
    "servlet",
    "Tomcat 10以降で主に使用するServlet APIのパッケージ名はどれ？",
    [
      "jakarta.servlet",
      "javax.servletだけ",
      "java.servlet",
      "tomcat.servlet"
    ],
    0,
    "Tomcat 10以降では主に<code>jakarta.servlet</code>を使用します。古い教材やTomcat 9以前では<code>javax.servlet</code>が使われます。"
  ),

  C(
    "board-package-02",
    "servlet",
    "Tomcat 9以前の教材でよく見られるServlet APIのパッケージ名はどれ？",
    [
      "javax.servlet",
      "jakarta.html",
      "java.beans.servlet",
      "tomcat.javax"
    ],
    0,
    "Tomcat 9以前では、主に<code>javax.servlet</code>パッケージが使用されます。使用しているTomcatの世代に合わせる必要があります。"
  ),

  /* =======================================================
     HTMLフォーム
  ======================================================= */

  C(
    "board-form-01",
    "request",
    "HTMLの<code>&lt;label&gt;</code>要素の役割として適切なものはどれ？",
    [
      "入力欄などのフォーム部品へ説明を付ける",
      "Servletを継承する",
      "JSPをコンパイルする",
      "リダイレクト先を設定する"
    ],
    0,
    "label要素はフォーム部品の項目名や説明を表します。for属性と入力欄のidを対応させる書き方もあります。"
  ),

  C(
    "board-form-02",
    "request",
    "ラジオボタンで、実際にサーバーへ送信される値を指定する属性はどれ？",
    [
      "value",
      "id",
      "class",
      "pattern"
    ],
    0,
    "ラジオボタンでは<code>name</code>がパラメータ名、選択された項目の<code>value</code>が送信値になります。"
  ),

  C(
    "board-form-03",
    "request",
    "同じグループとして扱いたいラジオボタンには、どの属性を同じ値にする？",
    [
      "name属性",
      "value属性",
      "id属性",
      "pattern属性"
    ],
    0,
    "同じname属性を持つラジオボタンは同じグループとして扱われ、通常はその中から1つを選択します。"
  ),

  C(
    "board-form-04",
    "request",
    "画面には表示せず、データだけをフォーム送信したい場合に使うものはどれ？",
    [
      "hiddenフィールド",
      "JSPコメント",
      "RequestDispatcher",
      "Content-Type"
    ],
    0,
    "<code>&lt;input type=\"hidden\" name=\"registerDate\" value=\"...\"&gt;</code>のように使用します。"
  ),

  C(
    "board-form-05",
    "request",
    "hiddenフィールドについて正しい説明はどれ？",
    [
      "画面には通常表示されないが、フォームデータとして送信される",
      "利用者から絶対に変更できない安全なデータである",
      "必ずint型で送信される",
      "リクエストスコープへ自動保存される"
    ],
    0,
    "hiddenは画面に表示しない送信項目です。ただしブラウザの開発者ツールなどで変更できるため、信頼できる秘密情報の保存には使えません。"
  ),

  /* =======================================================
     pattern属性・正規表現
  ======================================================= */

  C(
    "board-regex-01",
    "request",
    "HTMLの入力値を正規表現で制限するために使用する属性はどれ？",
    [
      "pattern",
      "action",
      "method",
      "forward"
    ],
    0,
    "<code>pattern</code>属性へ正規表現を指定すると、入力値の形式をブラウザ側で検証できます。"
  ),

  C(
    "board-regex-02",
    "request",
    "正規表現の<code>^</code>が表すものはどれ？",
    [
      "文字列の先頭",
      "文字列の末尾",
      "1回以上の繰り返し",
      "4回の繰り返し"
    ],
    0,
    "<code>^</code>は文字列の先頭を表します。<code>$</code>は文字列の末尾を表します。"
  ),

  C(
    "board-regex-03",
    "request",
    "正規表現の<code>$</code>が表すものはどれ？",
    [
      "文字列の末尾",
      "文字列の先頭",
      "任意の1文字",
      "文字の候補"
    ],
    0,
    "<code>$</code>は文字列の末尾を表します。"
  ),

  C(
    "board-regex-04",
    "request",
    "正規表現の<code>+</code>が表すものはどれ？",
    [
      "直前の要素を1回以上繰り返す",
      "直前の要素を必ず4回繰り返す",
      "文字列の先頭",
      "文字列の末尾"
    ],
    0,
    "<code>+</code>は直前の文字やグループが1回以上連続することを表します。"
  ),

  C(
    "board-regex-05",
    "request",
    "正規表現の<code>{4}</code>が表すものはどれ？",
    [
      "直前の要素を4回繰り返す",
      "4文字のうち1文字を選ぶ",
      "4回以上繰り返す",
      "文字列の4番目から開始する"
    ],
    0,
    "<code>{4}</code>は直前の要素をちょうど4回繰り返すことを表します。"
  ),

  C(
    "board-regex-06",
    "request",
    "正規表現<code>^[0-9a-zA-Z]{4}$</code>の意味として正しいものはどれ？",
    [
      "半角数字または半角英字の4文字",
      "数字だけを1文字以上",
      "大文字だけを4文字以上",
      "任意の文字を最大4文字"
    ],
    0,
    "<code>[0-9a-zA-Z]</code>が半角英数字、<code>{4}</code>が4回、<code>^</code>と<code>$</code>が文字列全体を表します。"
  ),

  C(
    "board-regex-07",
    "request",
    "<code>pattern=\"^[a-zA-Z]+$\"</code>で制限される入力として適切なのはどれ？",
    [
      "1文字以上の半角英字",
      "半角数字4文字",
      "日本語だけ",
      "任意の文字を必ず1文字"
    ],
    0,
    "<code>[a-zA-Z]</code>は半角英字、<code>+</code>は1回以上を表します。"
  ),

  /* =======================================================
     JSPの実行・構造
  ======================================================= */

  C(
    "board-jsp-01",
    "jsp",
    "JSPファイルがTomcat内部で実行されるまでの流れとして正しいものはどれ？",
    [
      "JSPをServletソースへ変換し、コンパイルして実行する",
      "JSPをCSSへ変換し、ブラウザでJavaを実行する",
      "JSPをJavaBeansへ変換し、GETへ変更する",
      "JSPをURLパターンへ変換するだけ"
    ],
    0,
    "JSPは内部でServletのソースコードへ変換され、Javaとしてコンパイルされた後に実行されます。"
  ),

  C(
    "board-jsp-02",
    "jsp",
    "ServletとJSPの両方で基本的に同じWeb処理を実現できる理由はどれ？",
    [
      "JSPが最終的にServletへ変換されて実行されるから",
      "Servletが最終的にCSSへ変換されるから",
      "JSPが必ず外部サイトへリダイレクトするから",
      "ServletがJavaBeansを継承するから"
    ],
    0,
    "JSPの処理は最終的にServletとして実行されるため、ServletとJSPで実現可能なことは基本的に共通しています。"
  ),

  C(
    "board-jsp-03",
    "jsp",
    "JSPのpageディレクティブでJavaクラスを読み込む指定はどれ？",
    [
      "import属性",
      "action属性",
      "method属性",
      "pattern属性"
    ],
    0,
    "<code>&lt;%@ page import=\"パッケージ名.クラス名\" %&gt;</code>のように指定します。"
  ),

  C(
    "board-jsp-04",
    "jsp",
    "JSPの「テンプレート」に該当するものはどれ？",
    [
      "通常のHTML部分",
      "JavaBeansのprivateフィールド",
      "@WebServletのURLパターン",
      "ServletのdoPost()だけ"
    ],
    0,
    "JSP内の通常のHTML部分をテンプレートと呼びます。実行結果のHTMLへ基本的にそのまま出力されます。"
  ),

  C(
    "board-jsp-05",
    "jsp",
    "JSPでリクエストスコープを利用するとき、宣言せずに使用できるオブジェクトはどれ？",
    [
      "request",
      "dispatcher",
      "user",
      "scanner"
    ],
    0,
    "JSPでは<code>request</code>が暗黙オブジェクトとして用意されているため、宣言せずに使用できます。"
  ),

  /* =======================================================
     フォワード・リダイレクト
  ======================================================= */

  C(
    "board-forward-01",
    "forward",
    "フォワードの基本的なリクエスト回数はどれ？",
    [
      "1回",
      "2回",
      "必ず3回",
      "0回"
    ],
    0,
    "フォワードはサーバー内部で同じリクエストを転送するため、ブラウザからのリクエストは基本的に1回です。"
  ),

  C(
    "board-forward-02",
    "forward",
    "リダイレクトの基本的なリクエスト回数はどれ？",
    [
      "2回",
      "1回",
      "0回",
      "必ず10回"
    ],
    0,
    "最初のリクエストに対して移動指示が返り、ブラウザが移動先へ新しいリクエストを送るため、基本的に2回です。"
  ),

  C(
    "board-forward-03",
    "forward",
    "別のWebアプリケーションや外部サイトへ移動するときに使用できるものはどれ？",
    [
      "リダイレクト",
      "フォワードだけ",
      "request.setAttribute()",
      "Integer.parseInt()"
    ],
    0,
    "リダイレクトはブラウザへ別URLへのアクセスを指示するため、外部サイトへも移動できます。"
  ),

  C(
    "board-forward-04",
    "forward",
    "リクエストスコープの値がリダイレクト先へ原則引き継がれない理由はどれ？",
    [
      "ブラウザから新しいリクエストが送られるから",
      "Content-TypeがHTMLだから",
      "JavaBeansがSerializableだから",
      "JSPがServletへ変換されるから"
    ],
    0,
    "リダイレクト先へのアクセスは別のリクエストです。1回のリクエストで有効なリクエストスコープは引き継がれません。"
  ),

  /* =======================================================
     リクエストスコープ
  ======================================================= */

  C(
    "board-scope-01",
    "scope",
    "リクエストスコープの保存先の正体はどれ？",
    [
      "HttpServletRequestインスタンス",
      "HttpServletResponseインスタンス",
      "PrintWriterインスタンス",
      "HTMLのform要素"
    ],
    0,
    "リクエストスコープは、<code>HttpServletRequest</code>インスタンスである<code>request</code>へ属性として保存します。"
  ),

  C(
    "board-scope-02",
    "scope",
    "同じ属性名ですでにデータが保存されている状態で、再び<code>setAttribute()</code>を実行するとどうなる？",
    [
      "新しい値で上書きされる",
      "必ずサーバーが停止する",
      "自動的に別名で保存される",
      "何も起こらない"
    ],
    0,
    "同じ属性名を指定してsetAttributeを実行すると、以前の値は新しい値で上書きされます。"
  ),

  C(
    "board-scope-03",
    "scope",
    "<code>request.getAttribute()</code>の基本的な戻り値の型はどれ？",
    [
      "Object",
      "Stringだけ",
      "int",
      "HttpServletResponse"
    ],
    0,
    "getAttributeの戻り値は基本的にObjectです。JavaBeansなど元の型で扱うためにキャストします。"
  ),

  C(
    "board-scope-04",
    "scope",
    "<code>User user = (User) request.getAttribute(\"user\");</code>の<code>(User)</code>が行っていることはどれ？",
    [
      "Objectとして取得した値をUser型へキャストする",
      "UserをURLパターンへ登録する",
      "UserをPOSTへ変更する",
      "UserをHTMLコメントへ変換する"
    ],
    0,
    "<code>(User)</code>はキャストです。Object型として取得したインスタンスをUser型として扱えるようにします。"
  ),

  /* =======================================================
     JavaBeans
  ======================================================= */

  C(
    "board-beans-01",
    "beans",
    "授業で扱うJavaBeansのルールとして適切なものはどれ？",
    [
      "java.io.Serializableを実装する",
      "必ずHttpServletを継承する",
      "すべてのフィールドをpublicにする",
      "必ずdoGet()を持つ"
    ],
    0,
    "授業では、JavaBeansのルールとして<code>java.io.Serializable</code>の実装を扱っています。"
  ),

  C(
    "board-beans-02",
    "beans",
    "<code>Serializable</code>の説明として適切なものはどれ？",
    [
      "メソッドを持たないマーカーインターフェース",
      "GETリクエストを処理するクラス",
      "HTMLを生成するメソッド",
      "URLパターンを設定するアノテーション"
    ],
    0,
    "Serializableは、シリアライズ可能であることを示すマーカーインターフェースです。基本的に実装すべきメソッドはありません。"
  ),

  C(
    "board-beans-03",
    "beans",
    "授業で扱うJavaBeansのコンストラクタのルールはどれ？",
    [
      "publicな引数なしコンストラクタを持つ",
      "privateな引数ありコンストラクタだけを持つ",
      "コンストラクタを絶対に作らない",
      "doGet()をコンストラクタにする"
    ],
    0,
    "JavaBeansでは、外部の仕組みが空のインスタンスを作成できるように、publicな引数なしコンストラクタを用意します。"
  ),

  C(
    "board-beans-04",
    "beans",
    "JavaBeansのフィールドに付ける基本的なアクセス修飾子はどれ？",
    [
      "private",
      "public",
      "protectedだけ",
      "アクセス修飾子は付けられない"
    ],
    0,
    "フィールドはprivateにしてカプセル化し、getterとsetterを通して扱うのが基本です。"
  ),

  C(
    "board-beans-05",
    "beans",
    "フィールドとプロパティの違いとして適切なものはどれ？",
    [
      "フィールドは内部の変数、プロパティはgetter・setterを通して公開されるデータの概念",
      "フィールドとプロパティは必ず同じコードを指す",
      "フィールドはURL、プロパティはHTMLを表す",
      "フィールドはJSPだけ、プロパティはServletだけで使う"
    ],
    0,
    "フィールドはクラス内部の変数そのものです。プロパティはgetterやsetterを通して外部から扱えるデータの概念です。"
  ),

  C(
    "board-beans-06",
    "beans",
    "getterの役割として正しいものはどれ？",
    [
      "プロパティの値を読み取る",
      "プロパティの値を必ず削除する",
      "Servletをフォワードする",
      "POSTをGETへ変更する"
    ],
    0,
    "getterはプロパティの値を読み取るメソッドです。例えばageプロパティなら<code>getAge()</code>です。"
  ),

  C(
    "board-beans-07",
    "beans",
    "setterの役割として正しいものはどれ？",
    [
      "プロパティの値を設定・変更する",
      "プロパティの値を画面へ必ず表示する",
      "JSPをServletへ変換する",
      "レスポンスヘッダーを取得する"
    ],
    0,
    "setterはプロパティの値を設定・変更するメソッドです。例えばageプロパティなら<code>setAge(int age)</code>です。"
  ),

  C(
    "board-beans-08",
    "beans",
    "<code>serialVersionUID</code>の主な目的はどれ？",
    [
      "シリアライズされるクラスのバージョンを識別する",
      "ServletのURLパターンを設定する",
      "HTMLの文字コードを設定する",
      "ラジオボタンの送信値を決める"
    ],
    0,
    "<code>serialVersionUID</code>は、シリアライズ時のクラスのバージョン識別に使用されます。"
  ),

  C(
    "board-beans-09",
    "beans",
    "JavaBeansを作成するときの基本的な手順として適切なものはどれ？",
    [
      "引数なしコンストラクタでインスタンスを作り、setterで値を設定する",
      "doGet()でインスタンスを作り、Content-Typeで値を設定する",
      "フォワードでインスタンスを作り、GETで値を設定する",
      "JSPコメントでインスタンスを作る"
    ],
    0,
    "JavaBeansでは、まず空のインスタンスを作成し、その後setterを使って各プロパティへ値を設定する流れを取れます。"
  )
);

/* =========================================================
   授業板書反映・記述問題

   基本構文・用語説明・処理の流れなど、
   記述式で出題されやすい問題を追加する。

   セッションスコープ・アプリケーションスコープは
   含めない。
========================================================= */

quizData.push(
  /* =======================================================
     Webアプリケーションの全体像
  ======================================================= */

  W(
    "board-web-w01",
    "servlet",
    "ブラウザからWebアプリケーションへアクセスして、画面が表示されるまでの基本的な流れを説明しなさい。",
    "ブラウザがサーバーへリクエストを送り、Tomcat上でServletまたはJSPが実行され、その処理結果がHTMLなどのレスポンスとしてブラウザへ返される。",
    [
      ["ブラウザ", "クライアント"],
      ["リクエスト"],
      ["tomcat", "サーバー", "サーバ"],
      ["servlet", "jsp"],
      ["レスポンス"]
    ],
    "「ブラウザからリクエスト」「サーバーでServletまたはJSPを実行」「HTMLをレスポンス」「ブラウザへ表示」という順序を書きましょう。"
  ),

  W(
    "board-web-w02",
    "servlet",
    "ServletとJSPの主な役割の違いを説明しなさい。",
    "ServletはJavaを中心にリクエスト処理や制御を行い、JSPはHTMLを中心に画面表示を作成する。",
    [
      ["servlet"],
      ["処理", "制御", "java"],
      ["jsp"],
      ["表示", "画面", "html"]
    ],
    "Servletは処理・制御、JSPは画面表示という分担が基本です。MVCではServletがController、JSPがViewを担当します。"
  ),

  /* =======================================================
     HTTP・Content-Type
  ======================================================= */

  W(
    "board-http-w01",
    "response",
    "Content-Typeヘッダとは何か説明し、HTMLをUTF-8で返す場合の値を書きなさい。",
    "Content-Typeヘッダはレスポンスボディに含まれるデータの種類や文字コードを表す。HTMLをUTF-8で返す場合は text/html; charset=UTF-8 とする。",
    [
      ["content-type", "contenttype"],
      ["データ", "種類", "形式"],
      ["text/html"],
      ["utf-8", "utf8"]
    ],
    "Content-Typeはボディのデータ形式を表します。HTMLをUTF-8で返す値は<code>text/html; charset=UTF-8</code>です。"
  ),

  W(
    "board-http-w02",
    "response",
    "HTMLをUTF-8でレスポンスするためのServletのコードを書きなさい。",
    "response.setContentType(\"text/html; charset=UTF-8\");",
    [
      ["response.setcontenttype"],
      ["text/html"],
      ["charset"],
      ["utf-8", "utf8"]
    ],
    "<code>response.setContentType(\"text/html; charset=UTF-8\");</code>と記述します。Content-Typeのハイフンと、setContentTypeのメソッド名を区別しましょう。"
  ),

  W(
    "board-http-w03",
    "request",
    "HTTPリクエストまたはレスポンスの基本的な構成を説明しなさい。",
    "HTTPメッセージは開始行、ヘッダー、空行、ボディで構成される。リクエストの開始行にはGETなどのメソッドやリクエスト先が含まれる。",
    [
      ["開始行", "リクエストライン", "ステータスライン"],
      ["ヘッダー", "ヘッダ"],
      ["ボディ", "ボディー"]
    ],
    "基本構造は「開始行・ヘッダー・空行・ボディ」です。リクエストでは開始行をリクエストラインと呼びます。"
  ),

  W(
    "board-http-w04",
    "request",
    "<code>curl</code>と<code>-v</code>オプションの役割を説明しなさい。",
    "curlはサーバーへリクエストを送りレスポンスを受け取るツールで、-vオプションを付けるとリクエストやレスポンスのヘッダーなど詳細情報を表示できる。",
    [
      ["curl"],
      ["リクエスト"],
      ["レスポンス"],
      ["-v", "詳細", "verbose"]
    ],
    "curlはHTTP通信の確認に利用できます。<code>-v</code>を付けることで通信の詳細を確認できます。"
  ),

  /* =======================================================
     Servlet登録・URLパターン
  ======================================================= */

  W(
    "board-map-w01",
    "servlet",
    "URLパターン<code>/hello</code>を設定する<code>@WebServlet</code>アノテーションを書きなさい。",
    "@WebServlet(\"/hello\")",
    [
      ["@webservlet"],
      ["/hello"]
    ],
    "<code>@WebServlet(\"/hello\")</code>と記述します。Servletクラスの宣言より前へ付けます。"
  ),

  W(
    "board-map-w02",
    "servlet",
    "<code>web.xml</code>でServletを登録するとき、<code>&lt;servlet&gt;</code>と<code>&lt;servlet-mapping&gt;</code>がそれぞれ何を設定するか説明しなさい。",
    "servlet要素ではservlet-nameとservlet-classを使ってServlet名とServletクラスを登録し、servlet-mapping要素ではservlet-nameとurl-patternを使ってServlet名とURLパターンを対応付ける。",
    [
      ["servlet-name"],
      ["servlet-class"],
      ["servlet-mapping"],
      ["url-pattern"]
    ],
    "<code>&lt;servlet&gt;</code>でクラスを登録し、<code>&lt;servlet-mapping&gt;</code>でそのServlet名とURLを対応付けます。"
  ),

  W(
    "board-map-w03",
    "servlet",
    "Servletクラスをコピーして新しいServletを作る場合、<code>@WebServlet</code>について注意すべきことを説明しなさい。",
    "クラスをコピーしても@WebServletのURLパターンは自動的に変更されないため、既存のServletと重複しないURLパターンへ変更する。重複するとサーバーが起動できない場合がある。",
    [
      ["@webservlet"],
      ["自動", "変更されない"],
      ["url", "パターン"],
      ["重複"]
    ],
    "コピー後はクラス名だけでなく、<code>@WebServlet</code>のURLパターンも必ず確認します。"
  ),

  W(
    "board-map-w04",
    "servlet",
    "<code>web.xml</code>で、Servlet名<code>hello</code>とURLパターン<code>/hello</code>を対応付ける部分を書きなさい。",
    "&lt;servlet-mapping&gt;&lt;servlet-name&gt;hello&lt;/servlet-name&gt;&lt;url-pattern&gt;/hello&lt;/url-pattern&gt;&lt;/servlet-mapping&gt;",
    [
      ["servlet-mapping"],
      ["servlet-name"],
      ["hello"],
      ["url-pattern"],
      ["/hello"]
    ],
    "<code>&lt;servlet-mapping&gt;</code>の中へ、同じServlet名とURLパターンを記述します。"
  ),

  /* =======================================================
     Servletの基本構造
  ======================================================= */

  W(
    "board-servlet-w01",
    "servlet",
    "Servletクラスが継承するクラスと、GET・POSTで実行されるメソッドを説明しなさい。",
    "ServletクラスはHttpServletを継承し、GETリクエストではdoGetメソッド、POSTリクエストではdoPostメソッドが実行される。",
    [
      ["httpservlet"],
      ["継承", "extends"],
      ["get", "doget"],
      ["post", "dopost"]
    ],
    "HttpServletの継承と、GET＝doGet、POST＝doPostの対応は最重要です。"
  ),

  W(
    "board-servlet-w02",
    "servlet",
    "<code>HttpServletRequest request</code>と<code>HttpServletResponse response</code>の役割を説明しなさい。",
    "HttpServletRequestはブラウザからサーバーへ送られたリクエスト情報を扱い、HttpServletResponseはサーバーからブラウザへ返すレスポンス情報を扱う。",
    [
      ["httpservletrequest"],
      ["リクエスト"],
      ["httpservletresponse"],
      ["レスポンス"]
    ],
    "requestは受信情報、responseは返却情報という対比で説明します。"
  ),

  W(
    "board-servlet-w03",
    "servlet",
    "Tomcat 9以前とTomcat 10以降で、Servlet APIのパッケージ名がどのように異なるか説明しなさい。",
    "Tomcat 9以前では主にjavax.servletを使用し、Tomcat 10以降では主にjakarta.servletを使用する。",
    [
      ["tomcat9", "tomcat 9"],
      ["javax.servlet"],
      ["tomcat10", "tomcat 10"],
      ["jakarta.servlet"]
    ],
    "教材のTomcatのバージョンと、importするパッケージ名を一致させる必要があります。"
  ),

  W(
    "board-servlet-w04",
    "servlet",
    "GETリクエストを処理するServletの基本的なクラス構造を、<code>HttpServlet</code>の継承と<code>doGet()</code>を含めて書きなさい。",
    "public class HelloServlet extends HttpServlet { protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { } }",
    [
      ["class"],
      ["extendshttpservlet", "extends httpservlet"],
      ["doget"],
      ["httpservletrequest"],
      ["httpservletresponse"]
    ],
    "クラスはHttpServletを継承し、doGetはrequestとresponseを引数として受け取ります。"
  ),

  /* =======================================================
     ServletからHTMLを返す
  ======================================================= */

  W(
    "board-response-w01",
    "response",
    "ServletからHTMLを返す基本的な3つの手順を、順番に説明しなさい。",
    "最初にresponse.setContentTypeでデータ形式と文字コードを設定し、次にresponse.getWriterでPrintWriterを取得し、最後にout.printlnなどでHTMLを出力する。",
    [
      ["setcontenttype"],
      ["getwriter"],
      ["printwriter"],
      ["println", "出力"]
    ],
    "順序は「Content-Type設定」「PrintWriter取得」「HTML出力」です。"
  ),

  W(
    "board-response-w02",
    "response",
    "ServletでPrintWriterを取得し、見出し「HTMLコード」を出力するコードを書きなさい。",
    "PrintWriter out = response.getWriter(); out.println(\"&lt;h1&gt;HTMLコード&lt;/h1&gt;\");",
    [
      ["printwriter"],
      ["response.getwriter"],
      ["out.println"],
      ["h1"],
      ["htmlコード"]
    ],
    "<code>response.getWriter()</code>で取得したPrintWriterへ、<code>println()</code>でHTML文字列を書き込みます。"
  ),

  /* =======================================================
     GET・POST
  ======================================================= */

  W(
    "board-method-w01",
    "request",
    "GETとPOSTの違いを、「主な用途」「データの送信場所」「URL表示」に触れて説明しなさい。",
    "GETは主にデータの取得や閲覧に使い、送信データをURLの末尾へ付加するためURLに表示される。POSTは主に登録・更新・削除に使い、データをリクエストボディへ格納するためURLには基本的に表示されない。",
    [
      ["get"],
      ["取得", "閲覧"],
      ["url"],
      ["post"],
      ["登録", "更新", "削除", "変更"],
      ["ボディ"]
    ],
    "GETは取得・URL、POSTは送信や変更・リクエストボディという対応を説明しましょう。"
  ),

  W(
    "board-method-w02",
    "request",
    "POSTを使用しても、それだけでは通信内容が暗号化されない理由と、通信を保護するために必要なものを説明しなさい。",
    "POSTはデータをURLではなくリクエストボディへ格納するだけで、通信内容を暗号化するものではない。通信を保護するにはHTTPSを使用する。",
    [
      ["post"],
      ["url", "ボディ"],
      ["暗号化"],
      ["https"]
    ],
    "試験ではGETとPOSTを比較しつつ、実際の暗号化にはHTTPSが必要であることも理解しておきましょう。"
  ),

  /* =======================================================
     HTMLフォーム
  ======================================================= */

  W(
    "board-form-w01",
    "request",
    "送信先を<code>FormSampleServlet</code>、送信方法をPOSTとするformタグの開始タグを書きなさい。",
    "&lt;form action=\"FormSampleServlet\" method=\"post\"&gt;",
    [
      ["<form"],
      ["action=\"formsampleservlet\"", "action='formsampleservlet'"],
      ["method=\"post\"", "method='post'"]
    ],
    "<code>&lt;form action=\"FormSampleServlet\" method=\"post\"&gt;</code>と記述します。"
  ),

  W(
    "board-form-w02",
    "request",
    "フォーム部品の<code>name</code>属性と、ラジオボタンの<code>value</code>属性の役割を説明しなさい。",
    "name属性はサーバー側で値を取得するときのリクエストパラメータ名になり、radioボタンのvalue属性はその項目が選択されたときに実際に送信される値になる。",
    [
      ["name"],
      ["パラメータ", "名前"],
      ["value"],
      ["送信", "値"]
    ],
    "nameはパラメータ名、valueは選択時に送られる値です。"
  ),

  W(
    "board-form-w03",
    "request",
    "名前を入力するテキストボックスを作り、パラメータ名を<code>name</code>とするHTMLを書きなさい。",
    "&lt;input type=\"text\" id=\"name\" name=\"name\"&gt;",
    [
      ["<input"],
      ["type=\"text\"", "type='text'"],
      ["name=\"name\"", "name='name'"]
    ],
    "サーバー側で<code>request.getParameter(\"name\")</code>と取得するには、入力欄へ<code>name=\"name\"</code>を設定します。"
  ),

  W(
    "board-form-w04",
    "request",
    "画面には表示せず、<code>registerDate</code>という名前で値を送信するhiddenフィールドを書きなさい。",
    "&lt;input type=\"hidden\" name=\"registerDate\" value=\"2026-07-13\"&gt;",
    [
      ["<input"],
      ["type=\"hidden\"", "type='hidden'"],
      ["name=\"registerdate\"", "name='registerdate'"],
      ["value"]
    ],
    "hiddenフィールドは<code>type=\"hidden\"</code>とし、nameとvalueを指定します。"
  ),

  /* =======================================================
     正規表現・pattern属性
  ======================================================= */

  W(
    "board-regex-w01",
    "request",
    "正規表現<code>^[0-9a-zA-Z]{4}$</code>の意味を説明しなさい。",
    "文字列の先頭から末尾までが、半角数字または半角英字のちょうど4文字であることを表す。",
    [
      ["先頭", "^"],
      ["末尾", "$"],
      ["半角"],
      ["英数字", "数字", "英字"],
      ["4"]
    ],
    "<code>^</code>と<code>$</code>で文字列全体、<code>[0-9a-zA-Z]</code>で半角英数字、<code>{4}</code>で4文字を表します。"
  ),

  W(
    "board-regex-w02",
    "request",
    "名前を1文字以上の半角英字だけに制限するinput要素を書きなさい。パラメータ名は<code>name</code>とする。",
    "&lt;input type=\"text\" name=\"name\" pattern=\"^[a-zA-Z]+$\"&gt;",
    [
      ["<input"],
      ["name=\"name\"", "name='name'"],
      ["pattern"],
      ["[a-za-z]", "[a-zA-Z]"],
      ["+"]
    ],
    "<code>&lt;input type=\"text\" name=\"name\" pattern=\"^[a-zA-Z]+$\"&gt;</code>のように記述します。"
  ),

  W(
    "board-regex-w03",
    "request",
    "正規表現の<code>^</code>、<code>$</code>、<code>+</code>、<code>{4}</code>が表す意味をそれぞれ説明しなさい。",
    "^は文字列の先頭、$は文字列の末尾、+は直前の要素を1回以上繰り返すこと、{4}は直前の要素を4回繰り返すことを表す。",
    [
      ["先頭"],
      ["末尾"],
      ["1回以上", "1つ以上"],
      ["4回"]
    ],
    "正規表現のメタ文字は、記号と意味を組み合わせて答えられるようにしましょう。"
  ),

  /* =======================================================
     JSP
  ======================================================= */

  W(
    "board-jsp-w01",
    "jsp",
    "JSPファイルがTomcat内部で実行されるまでの流れを説明しなさい。",
    "JSPファイルはServletのソースファイルへ変換され、JavaとしてコンパイルされてServletのクラスファイルになり、そのServletが実行されてHTMLレスポンスを返す。",
    [
      ["jsp"],
      ["servlet"],
      ["変換"],
      ["コンパイル"],
      ["html", "レスポンス"]
    ],
    "「JSP→Servletソース→コンパイル→Servletクラス→実行」という順序が重要です。"
  ),

  W(
    "board-jsp-w02",
    "jsp",
    "JSPのpageディレクティブで、HTML・UTF-8を設定する記述を書きなさい。",
    "&lt;%@ page contentType=\"text/html; charset=UTF-8\" %&gt;",
    [
      ["<%@page", "<%@ page"],
      ["contenttype"],
      ["text/html"],
      ["utf-8", "utf8"],
      ["%>"]
    ],
    "<code>&lt;%@ page contentType=\"text/html; charset=UTF-8\" %&gt;</code>と記述します。"
  ),

  W(
    "board-jsp-w03",
    "jsp",
    "JSPのpageディレクティブで、<code>sample.User</code>クラスをimportする記述を書きなさい。",
    "&lt;%@ page import=\"sample.User\" %&gt;",
    [
      ["<%@page", "<%@ page"],
      ["import"],
      ["sample.user"],
      ["%>"]
    ],
    "<code>&lt;%@ page import=\"sample.User\" %&gt;</code>と記述します。"
  ),

  W(
    "board-jsp-w04",
    "jsp",
    "JSPのスクリプトレット・スクリプト式・JSPコメントの役割と記号を説明しなさい。",
    "スクリプトレットは&lt;% %&gt;でJavaコードを書き、スクリプト式は&lt;%= %&gt;で式の値を画面へ出力し、JSPコメントは&lt;%-- --%&gt;でブラウザへ出力されないコメントを書く。",
    [
      ["<%"],
      ["java", "コード"],
      ["<%="],
      ["出力", "表示"],
      ["<%--"],
      ["コメント"]
    ],
    "3種類の記号と役割をセットで覚えましょう。"
  ),

  /* =======================================================
     MVC
  ======================================================= */

  W(
    "board-mvc-w01",
    "mvc",
    "MVCモデルにおけるModel・View・Controllerの役割と、Servlet・JSP・JavaBeansの対応を説明しなさい。",
    "Modelは業務処理やデータ操作を担当しJavaクラスやJavaBeansが対応する。Viewは画面表示を担当しJSPが対応する。Controllerはリクエストを受けて処理の流れを制御しServletが対応する。",
    [
      ["model", "モデル"],
      ["業務", "データ", "処理"],
      ["view", "ビュー"],
      ["jsp"],
      ["controller", "コントローラ"],
      ["servlet"]
    ],
    "Model＝処理・データ、View＝JSPによる表示、Controller＝Servletによる制御です。"
  ),

  /* =======================================================
     フォワード・リダイレクト
  ======================================================= */

  W(
    "board-forward-w01",
    "forward",
    "フォワードとリダイレクトの違いを、「リクエスト回数」「URL」「リクエスト情報」「転送先」に触れて説明しなさい。",
    "フォワードは同じWebアプリケーション内で同じリクエストを転送するため基本的に1回のリクエストで、URLは変わらずリクエスト情報を引き継げる。リダイレクトはブラウザが移動先へ新しいリクエストを送るため基本的に2回で、URLが変わりリクエスト情報は原則引き継がれず、外部サイトにも移動できる。",
    [
      ["フォワード", "forward"],
      ["1回"],
      ["変わらない"],
      ["引き継"],
      ["リダイレクト", "redirect"],
      ["2回"],
      ["url", "変わる"],
      ["外部", "別"]
    ],
    "試験では表形式の比較を文章にできるようにします。フォワードは内部・1回・URL不変、リダイレクトは再アクセス・2回・URL変化です。"
  ),

  W(
    "board-forward-w02",
    "forward",
    "<code>/WEB-INF/jsp/request.jsp</code>へフォワードするコードを書きなさい。",
    "RequestDispatcher dispatcher = request.getRequestDispatcher(\"/WEB-INF/jsp/request.jsp\"); dispatcher.forward(request, response);",
    [
      ["requestdispatcher"],
      ["request.getrequestdispatcher"],
      ["/web-inf/jsp/request.jsp"],
      ["dispatcher.forward"],
      ["request"],
      ["response"]
    ],
    "RequestDispatcherを取得し、<code>forward(request, response)</code>を実行します。"
  ),

  W(
    "board-forward-w03",
    "forward",
    "<code>https://www.google.com/</code>へリダイレクトするコードを書きなさい。",
    "response.sendRedirect(\"https://www.google.com/\");",
    [
      ["response.sendredirect"],
      ["https://www.google.com"]
    ],
    "外部URLへの移動には<code>response.sendRedirect()</code>を使用できます。"
  ),

  /* =======================================================
     リクエストスコープ
  ======================================================= */

  W(
    "board-scope-w01",
    "scope",
    "リクエストスコープとは何か、有効期間と保存先に触れて説明しなさい。",
    "リクエストスコープは1回のリクエストを処理している間だけデータを保存・共有できる領域で、HttpServletRequestインスタンスにデータを保存する。",
    [
      ["1回"],
      ["リクエスト"],
      ["保存", "共有"],
      ["httpservletrequest", "request"]
    ],
    "「1回のリクエストの間」「保存先はHttpServletRequest」が重要です。"
  ),

  W(
    "board-scope-w02",
    "scope",
    "変数<code>user</code>を属性名<code>user</code>でリクエストスコープへ保存し、取得してUser型へキャストするコードを書きなさい。",
    "request.setAttribute(\"user\", user); User user = (User) request.getAttribute(\"user\");",
    [
      ["request.setattribute"],
      ["\"user\"", "'user'"],
      ["request.getattribute"],
      ["(user)"]
    ],
    "保存はsetAttribute、取得はgetAttributeです。取得結果はObject型なので、<code>(User)</code>でキャストします。"
  ),

  W(
    "board-scope-w03",
    "scope",
    "同じ属性名で<code>request.setAttribute()</code>を複数回実行した場合、どうなるか説明しなさい。",
    "同じ属性名ですでにインスタンスが保存されている場合、後からsetAttributeで保存した値によって上書きされる。",
    [
      ["同じ"],
      ["属性名", "名前"],
      ["上書き"]
    ],
    "属性名が同じ場合、複数の値が同時に保存されるのではなく、新しい値へ上書きされます。"
  ),

  W(
    "board-scope-w04",
    "scope",
    "JSPでリクエストスコープを利用するときに使う暗黙オブジェクトと、その意味を説明しなさい。",
    "JSPでは暗黙オブジェクトrequestを使用する。requestはHttpServletRequestインスタンスであり、getAttributeを使ってリクエストスコープの値を取得できる。",
    [
      ["暗黙"],
      ["request"],
      ["httpservletrequest"],
      ["getattribute"]
    ],
    "JSPではrequestを自分で宣言せずに使用できます。これを暗黙オブジェクトと呼びます。"
  ),

  W(
    "board-scope-w05",
    "scope",
    "Servletでリクエストスコープへ保存した値が、リダイレクト先では原則利用できない理由を説明しなさい。",
    "リダイレクトではブラウザが移動先へ新しいリクエストを送るため、1回のリクエストだけで有効なリクエストスコープの値は引き継がれない。",
    [
      ["リダイレクト"],
      ["新しい", "別"],
      ["リクエスト"],
      ["引き継", "利用できない"]
    ],
    "リクエストスコープは1回のリクエストに結び付いています。リダイレクト後は別リクエストです。"
  ),

  /* =======================================================
     JavaBeans
  ======================================================= */

  W(
    "board-beans-w01",
    "beans",
    "授業で扱うJavaBeansの主なルールを4つ以上説明しなさい。",
    "java.io.Serializableを実装し、publicなクラスとしてパッケージへ所属させ、publicな引数なしコンストラクタを用意し、フィールドをprivateにして、命名規則に従ったgetterとsetterを用意する。",
    [
      ["serializable"],
      ["public"],
      ["引数なし", "引数のない"],
      ["private"],
      ["getter", "get"],
      ["setter", "set"]
    ],
    "重要なルールは、Serializable、publicクラス、引数なしコンストラクタ、privateフィールド、getter・setterです。"
  ),

  W(
    "board-beans-w02",
    "beans",
    "<code>Serializable</code>とは何か、JavaBeansで実装する意味を説明しなさい。",
    "Serializableは実装すべきメソッドを持たないマーカーインターフェースであり、クラスのインスタンスをシリアライズ可能なデータとして扱えることを示す。",
    [
      ["serializable"],
      ["マーカー"],
      ["インターフェース", "interface"],
      ["シリアライズ", "保存"]
    ],
    "Serializableはメソッドを持たず、シリアライズ可能であることを示すマーカーとして働きます。"
  ),

  W(
    "board-beans-w03",
    "beans",
    "JavaBeansにpublicな引数なしコンストラクタを用意する理由を説明しなさい。",
    "外部の仕組みが引数を指定せずに空のインスタンスを作成し、その後setterを使ってプロパティへ値を設定できるようにするため。",
    [
      ["引数なし", "引数のない"],
      ["インスタンス"],
      ["setter", "set"],
      ["値", "プロパティ"]
    ],
    "「空のインスタンスを作る」「後からsetterで値を設定する」という統一した手順にできます。"
  ),

  W(
    "board-beans-w04",
    "beans",
    "JavaBeansにおけるフィールドとプロパティの違いを説明しなさい。",
    "フィールドはクラス内部でデータを保持する変数そのもので原則privateにする。プロパティはgetterやsetterを通して外部から読み書きできるデータの概念である。",
    [
      ["フィールド"],
      ["変数", "内部"],
      ["private"],
      ["プロパティ"],
      ["getter", "setter", "get", "set"],
      ["外部"]
    ],
    "フィールドは内部の変数、プロパティはgetter・setterを通して公開されるデータの窓口です。"
  ),

  W(
    "board-beans-w05",
    "beans",
    "String型の<code>name</code>とint型の<code>age</code>を持つJavaBeansについて、フィールドと引数なしコンストラクタを書きなさい。",
    "private String name; private int age; public User() { }",
    [
      ["private"],
      ["stringname", "string name"],
      ["intage", "int age"],
      ["publicuser()", "public user()"]
    ],
    "フィールドはprivateにし、publicな引数なしコンストラクタを用意します。"
  ),

  W(
    "board-beans-w06",
    "beans",
    "int型のageプロパティについて、getterとsetterを書きなさい。",
    "public int getAge() { return age; } public void setAge(int age) { this.age = age; }",
    [
      ["publicintgetage", "public int getage"],
      ["returnage", "return age"],
      ["publicvoidsetage", "public void setage"],
      ["intage", "int age"],
      ["this.age"]
    ],
    "getterはageを返し、setterは受け取ったageを<code>this.age</code>へ代入します。"
  ),

  W(
    "board-beans-w07",
    "beans",
    "<code>serialVersionUID</code>の記述例と役割を書きなさい。",
    "private static final long serialVersionUID = 1L; シリアライズされるクラスのバージョンを識別するために使用する。",
    [
      ["private"],
      ["static"],
      ["final"],
      ["long"],
      ["serialversionuid"],
      ["1l", "バージョン"]
    ],
    "代表的な記述は<code>private static final long serialVersionUID = 1L;</code>です。"
  ),

  /* =======================================================
     MVC・JavaBeans・スコープの総合問題
  ======================================================= */

  W(
    "board-total-w01",
    "mvc",
    "フォームから送信された名前と年齢を、JavaBeansへ設定してJSPへ表示するまでの処理の流れを説明しなさい。",
    "Servletがrequest.getParameterで名前と年齢を取得し、年齢をintへ変換する。Userインスタンスを作ってsetterで値を設定し、request.setAttributeでリクエストスコープへ保存する。その後JSPへフォワードし、JSPがgetAttributeでUserを取得してgetterの値を表示する。",
    [
      ["getparameter"],
      ["parseint", "int", "型変換"],
      ["newuser", "new user", "インスタンス"],
      ["setter", "setname", "setage"],
      ["setattribute"],
      ["フォワード", "forward"],
      ["getattribute"],
      ["getter", "getname", "getage"]
    ],
    "フォーム→Servlet→型変換→JavaBeans→リクエストスコープ→フォワード→JSPという一連の流れが最重要です。"
  ),

  W(
    "board-total-w02",
    "mvc",
    "リクエストパラメータ<code>name</code>と<code>age</code>を取得し、Userインスタンスへ設定して、属性名<code>user</code>でリクエストスコープへ保存するコードを書きなさい。",
    "String name = request.getParameter(\"name\"); String ageText = request.getParameter(\"age\"); int age = Integer.parseInt(ageText); User user = new User(); user.setName(name); user.setAge(age); request.setAttribute(\"user\", user);",
    [
      ["request.getparameter"],
      ["name"],
      ["age"],
      ["integer.parseint"],
      ["newuser", "new user"],
      ["setname"],
      ["setage"],
      ["request.setattribute"]
    ],
    "getParameterの戻り値はStringなので、年齢はInteger.parseIntでintへ変換してからsetAgeへ渡します。"
  ),

  W(
    "board-total-w03",
    "mvc",
    "JSPでリクエストスコープから属性名<code>user</code>のUserを取得し、名前をスクリプト式で表示するコードを書きなさい。",
    "&lt;% User user = (User) request.getAttribute(\"user\"); %&gt; &lt;%= user.getName() %&gt;",
    [
      ["user"],
      ["(user)"],
      ["request.getattribute"],
      ["<%="],
      ["user.getname"]
    ],
    "getAttributeの戻り値をUser型へキャストし、スクリプト式で<code>user.getName()</code>を出力します。"
  )
);


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
