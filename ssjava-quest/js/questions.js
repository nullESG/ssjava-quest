"use strict";

/*
 * category
 * servlet : Servlet・リクエスト・レスポンス
 * jsp     : JSP
 * mvc     : MVC・フォワード
 * scope   : スコープ・JavaBeans
 */

window.QUIZ_QUESTIONS = [
    {
        id: "servlet-01",
        category: "servlet",
        question:
            "サーブレットを作成するとき、基本的に継承するクラスはどれ？",
        choices: [
            "HttpServlet",
            "HttpRequest",
            "JspServlet",
            "WebApplication"
        ],
        answer: 0,
        explanation:
            "HTTP通信用のサーブレットは、基本的にHttpServletを継承して作成します。",
        tip:
            "教材によってimport文はjavax.servletまたはjakarta.servletです。授業で使用している環境を優先しましょう。"
    },
    {
        id: "servlet-02",
        category: "servlet",
        question:
            "GETリクエストを処理するためにオーバーライドするメソッドはどれ？",
        choices: [
            "doPost",
            "doGet",
            "getRequest",
            "serviceGet"
        ],
        answer: 1,
        explanation:
            "GETリクエストはdoGetメソッドで処理します。リンクのクリックやGETフォームなどで使用されます。",
        tip:
            "GETはdoGet、POSTはdoPostという対応を覚えましょう。"
    },
    {
        id: "servlet-03",
        category: "servlet",
        question:
            "POSTリクエストを処理するためにオーバーライドするメソッドはどれ？",
        choices: [
            "doPost",
            "doSend",
            "postRequest",
            "servicePost"
        ],
        answer: 0,
        explanation:
            "POSTリクエストはdoPostメソッドで処理します。",
        tip:
            "フォームのmethod=\"post\"とdoPostをセットで覚えましょう。"
    },
    {
        id: "servlet-04",
        category: "servlet",
        question:
            "次のアノテーションが表しているものは何？",
        code: '@WebServlet("/hello")',
        choices: [
            "JSPの保存場所",
            "サーブレットのURLパターン",
            "セッションの有効時間",
            "HTMLの文字コード"
        ],
        answer: 1,
        explanation:
            "@WebServletの値は、そのサーブレットへアクセスするときのURLパターンです。",
        tip:
            "URLパターンには通常、先頭に「/」を付けます。"
    },
    {
        id: "servlet-05",
        category: "servlet",
        question:
            "次のリンクをクリックした場合、通常使用されるリクエストメソッドはどれ？",
        code: '<a href="hello">実行</a>',
        choices: [
            "GET",
            "POST",
            "PUT",
            "FORWARD"
        ],
        answer: 0,
        explanation:
            "通常のアンカーリンクによるページ移動では、GETリクエストが送信されます。",
        tip:
            "アンカーはGET。フォームはmethod属性でGETまたはPOSTを指定します。"
    },
    {
        id: "servlet-06",
        category: "servlet",
        question:
            "フォームから送信されたnameパラメータを取得する処理はどれ？",
        choices: [
            'request.getParameter("name")',
            'request.getAttribute("name")',
            'response.getParameter("name")',
            'session.getParameter("name")'
        ],
        answer: 0,
        explanation:
            "フォームやURLから送信されたリクエストパラメータは、request.getParameterで取得します。",
        tip:
            "パラメータ取得はgetParameter、スコープからの取得はgetAttributeです。"
    },
    {
        id: "servlet-07",
        category: "servlet",
        question:
            "request.getParameterで取得する値の基本的な型はどれ？",
        choices: [
            "int",
            "Object",
            "String",
            "boolean"
        ],
        answer: 2,
        explanation:
            "リクエストパラメータは、基本的にString型として取得されます。",
        tip:
            "数値計算に使う場合はInteger.parseIntなどで型変換します。"
    },
    {
        id: "servlet-08",
        category: "servlet",
        question:
            "文字列の\"25\"をint型の25へ変換する処理はどれ？",
        choices: [
            'Integer.parseInt("25")',
            'Integer.toString("25")',
            'String.parseInt("25")',
            'int.convert("25")'
        ],
        answer: 0,
        explanation:
            "Integer.parseIntを使うと、数値形式の文字列をint型へ変換できます。",
        tip:
            "数値でない文字列を変換するとNumberFormatExceptionが発生します。"
    },
    {
        id: "servlet-09",
        category: "servlet",
        question:
            "HTMLをレスポンスとして返す場合のContent-Type設定はどれ？",
        choices: [
            'response.setContentType("text/html; charset=UTF-8")',
            'request.setType("html")',
            'response.setMethod("HTML")',
            'out.setEncoding("GET")'
        ],
        answer: 0,
        explanation:
            "HTMLを返す場合はresponse.setContentTypeでMIMEタイプと文字コードを指定します。",
        tip:
            "text/htmlとcharset=UTF-8の両方に注目しましょう。"
    },
    {
        id: "servlet-10",
        category: "servlet",
        question:
            "別のURLへリダイレクトする処理はどれ？",
        choices: [
            'response.sendRedirect("menu")',
            'request.redirect("menu")',
            'response.forward("menu")',
            'out.move("menu")'
        ],
        answer: 0,
        explanation:
            "リダイレクトにはresponse.sendRedirectを使用します。ブラウザから新しいリクエストが発生します。",
        tip:
            "リダイレクト後は、ブラウザのアドレスバーのURLが変化します。"
    },

    {
        id: "jsp-01",
        category: "jsp",
        question:
            "MVCモデルにおけるJSPの主な役割はどれ？",
        choices: [
            "画面表示",
            "Webサーバの起動",
            "URLの暗号化",
            "データベースそのもの"
        ],
        answer: 0,
        explanation:
            "JSPはHTMLを中心に画面を作成しやすいため、MVCでは主にViewを担当します。",
        tip:
            "ServletはController、JSPはViewという対応が頻出です。"
    },
    {
        id: "jsp-02",
        category: "jsp",
        question:
            "JSPのスクリプトレットを表す記号はどれ？",
        choices: [
            "<% Javaコード %>",
            "<%= 値 %>",
            "<%-- コメント --%>",
            "<%@ page ... %>"
        ],
        answer: 0,
        explanation:
            "スクリプトレットは、<% と %>の中にJavaコードを記述します。",
        tip:
            "スクリプトレットは処理、スクリプト式は値の出力です。"
    },
    {
        id: "jsp-03",
        category: "jsp",
        question:
            "JSPで変数valueの値を画面へ出力するスクリプト式はどれ？",
        choices: [
            "<% value %>",
            "<%= value %>",
            "<%@ value %>",
            "<%-- value --%>"
        ],
        answer: 1,
        explanation:
            "スクリプト式<%= 値 %>は、指定した値をレスポンスへ出力します。",
        tip:
            "「=」が付いたものが出力用です。"
    },
    {
        id: "jsp-04",
        category: "jsp",
        question:
            "JSPコメントとして正しいものはどれ？",
        choices: [
            "<!-- コメント -->",
            "// コメント",
            "<%-- コメント --%>",
            "/* コメント */"
        ],
        answer: 2,
        explanation:
            "JSPコメントは<%-- と --%>で囲みます。JSPの処理段階で取り除かれます。",
        tip:
            "HTMLコメントはブラウザへ送信される可能性がありますが、JSPコメントは通常レスポンスに含まれません。"
    },
    {
        id: "jsp-05",
        category: "jsp",
        question:
            "JSPのpageディレクティブとして正しい形式はどれ？",
        choices: [
            '<%@ page contentType="text/html; charset=UTF-8" %>',
            '<% page="UTF-8" %>',
            '<%= page UTF-8 %>',
            '<!-- page UTF-8 -->'
        ],
        answer: 0,
        explanation:
            "pageディレクティブは<%@ page ... %>という形式で、JSPページ全体の設定を記述します。",
        tip:
            "ディレクティブは「<%@」で始まります。"
    },
    {
        id: "jsp-06",
        category: "jsp",
        question:
            "JSPファイルをWEB-INF内に配置する主な理由はどれ？",
        choices: [
            "ブラウザからの直接アクセスを防ぐため",
            "GETを自動的にPOSTへ変えるため",
            "セッションを自動削除するため",
            "JSPをHTMLコメントへ変えるため"
        ],
        answer: 0,
        explanation:
            "WEB-INF内のファイルには、通常ブラウザから直接アクセスできません。Servletを経由して表示させる構成にできます。",
        tip:
            "ServletからWEB-INF内のJSPへフォワードする構成は重要です。"
    },

    {
        id: "mvc-01",
        category: "mvc",
        question:
            "MVCのMが表しているものはどれ？",
        choices: [
            "Method",
            "Model",
            "Main",
            "Memory"
        ],
        answer: 1,
        explanation:
            "MはModelです。データや業務処理などを担当します。",
        tip:
            "MVCはModel・View・Controllerの頭文字です。"
    },
    {
        id: "mvc-02",
        category: "mvc",
        question:
            "MVCにおけるControllerを担当することが多いものはどれ？",
        choices: [
            "CSS",
            "Servlet",
            "HTMLコメント",
            "JavaBeansのフィールドだけ"
        ],
        answer: 1,
        explanation:
            "Servletはリクエストを受け取り、処理や画面遷移を制御するControllerを担当します。",
        tip:
            "Servlet＝Controller、JSP＝Viewです。"
    },
    {
        id: "mvc-03",
        category: "mvc",
        question:
            "ServletからJSPへフォワードする基本的な処理はどれ？",
        choices: [
            "RequestDispatcherを取得してforwardする",
            "JSPをnewしてexecuteする",
            "PrintWriterでredirectする",
            "HttpSessionをcompileする"
        ],
        answer: 0,
        explanation:
            "request.getRequestDispatcherで転送先を取得し、forward(request, response)で転送します。",
        tip:
            "getRequestDispatcher → forwardの順番を覚えましょう。"
    },
    {
        id: "mvc-04",
        category: "mvc",
        question:
            "次のコードの役割はどれ？",
        code:
`RequestDispatcher dispatcher =
    request.getRequestDispatcher("/WEB-INF/result.jsp");

dispatcher.forward(request, response);`,
        choices: [
            "JSPへ処理をフォワードする",
            "ブラウザへリダイレクトする",
            "セッションを破棄する",
            "フォームの値を数値へ変換する"
        ],
        answer: 0,
        explanation:
            "RequestDispatcherを使って、サーバ内部でJSPへ処理を転送しています。",
        tip:
            "フォワードでは同じrequestとresponseを転送先へ渡します。"
    },
    {
        id: "mvc-05",
        category: "mvc",
        question:
            "フォワードした場合、ブラウザのアドレスバーは通常どうなる？",
        choices: [
            "転送先JSPのURLに変わる",
            "元のリクエストURLのまま",
            "必ずトップページになる",
            "URLが空になる"
        ],
        answer: 1,
        explanation:
            "フォワードはサーバ内部の処理なので、ブラウザのアドレスバーは通常元のURLのままです。",
        tip:
            "フォワードはURLが変わらない、リダイレクトはURLが変わると比較しましょう。"
    },
    {
        id: "mvc-06",
        category: "mvc",
        question:
            "リダイレクトとフォワードの違いとして正しいものはどれ？",
        choices: [
            "リダイレクトではブラウザから新しいリクエストが発生する",
            "フォワードでは必ずURLが変わる",
            "リダイレクトではrequestスコープがそのまま引き継がれる",
            "両者に違いはない"
        ],
        answer: 0,
        explanation:
            "リダイレクトではブラウザが移動先へ新しいリクエストを送ります。フォワードはサーバ内部で同じリクエストを転送します。",
        tip:
            "新規リクエストの有無と、アドレスバーのURLが重要です。"
    },

    {
        id: "scope-01",
        category: "scope",
        question:
            "スコープの説明として最も適切なものはどれ？",
        choices: [
            "データを保存・共有できる範囲や有効期間",
            "Javaファイルの拡張子",
            "HTMLの色指定",
            "URLの暗号化方式"
        ],
        answer: 0,
        explanation:
            "スコープとは、保存したデータをどこから利用でき、いつまで保持するかという範囲です。",
        tip:
            "request・session・application・pageでは、共有範囲と有効期間が異なります。"
    },
    {
        id: "scope-02",
        category: "scope",
        question:
            "1回のリクエスト処理内でデータを共有するのに適したスコープはどれ？",
        choices: [
            "requestスコープ",
            "sessionスコープ",
            "applicationスコープ",
            "永久スコープ"
        ],
        answer: 0,
        explanation:
            "ServletからJSPへのフォワードなど、1回のリクエスト内で共有する場合はrequestスコープが適しています。",
        tip:
            "フォワードとrequestスコープは頻出の組み合わせです。"
    },
    {
        id: "scope-03",
        category: "scope",
        question:
            "同じ利用者の複数リクエストにまたがってデータを保持するスコープはどれ？",
        choices: [
            "request",
            "session",
            "page",
            "method"
        ],
        answer: 1,
        explanation:
            "sessionスコープは、同じ利用者のセッションが有効な間、データを保持します。",
        tip:
            "ログイン利用者の情報やショッピングカートなどで利用されます。"
    },
    {
        id: "scope-04",
        category: "scope",
        question:
            "Webアプリケーション全体でデータを共有するスコープはどれ？",
        choices: [
            "page",
            "request",
            "application",
            "local"
        ],
        answer: 2,
        explanation:
            "applicationスコープは、Webアプリケーション全体で共有するデータに使用します。",
        tip:
            "共有範囲が広いため、利用者固有のデータには通常向きません。"
    },
    {
        id: "scope-05",
        category: "scope",
        question:
            "requestスコープへuserを保存する処理はどれ？",
        choices: [
            'request.setAttribute("user", user)',
            'request.getParameter("user", user)',
            'response.setAttribute("user", user)',
            'request.saveParameter("user", user)'
        ],
        answer: 0,
        explanation:
            "スコープへの保存にはsetAttributeを使用します。第1引数が属性名、第2引数が保存する値です。",
        tip:
            "保存はsetAttribute、取得はgetAttributeです。"
    },
    {
        id: "scope-06",
        category: "scope",
        question:
            "requestスコープからuserを取得する処理はどれ？",
        choices: [
            'request.getAttribute("user")',
            'request.getParameter("user")',
            'response.getAttribute("user")',
            'request.readScope("user")'
        ],
        answer: 0,
        explanation:
            "setAttributeで保存した値は、同じ属性名を指定してgetAttributeで取得します。",
        tip:
            "getAttributeの戻り値はObject型なので、必要に応じてキャストします。"
    },
    {
        id: "scope-07",
        category: "scope",
        question:
            "getParameterとgetAttributeの違いとして正しいものはどれ？",
        choices: [
            "getParameterは送信値、getAttributeはスコープ保存値を取得する",
            "両方とも完全に同じ",
            "getAttributeはフォームの値だけを取得する",
            "getParameterはJavaBeansだけを取得する"
        ],
        answer: 0,
        explanation:
            "getParameterはフォームやURLから送信された値を取得し、getAttributeはスコープへ保存された値を取得します。",
        tip:
            "名前が似ていますが、取得するデータの出所が異なります。"
    },
    {
        id: "scope-08",
        category: "scope",
        question:
            "JavaBeansのプロパティとして一般的な構成はどれ？",
        choices: [
            "privateフィールドとpublicなgetter・setter",
            "publicフィールドだけ",
            "mainメソッドだけ",
            "HTMLタグだけ"
        ],
        answer: 0,
        explanation:
            "JavaBeansでは、フィールドをprivateにし、publicなgetter・setterから値を扱う構成が一般的です。",
        tip:
            "プロパティ名はgetter・setterのメソッド名と対応します。"
    },
    {
        id: "scope-09",
        category: "scope",
        question:
            "次のJavaBeansでプロパティ名として扱われるものはどれ？",
        code:
`private String name;

public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}`,
        choices: [
            "String",
            "name",
            "public",
            "return"
        ],
        answer: 1,
        explanation:
            "getNameとsetNameに対応するプロパティ名はnameです。",
        tip:
            "getXxx・setXxxのXxx部分を先頭小文字にしたものが基本的なプロパティ名です。"
    },
    {
        id: "scope-10",
        category: "scope",
        question:
            "Servletで作成したJavaBeansをJSPへ渡す流れとして正しいものはどれ？",
        choices: [
            "setAttributeで保存してJSPへforwardする",
            "getParameterで保存してJSPをnewする",
            "sendRedirectだけでrequestスコープを渡す",
            "HTMLコメントの中へ保存する"
        ],
        answer: 0,
        explanation:
            "Servletでインスタンスを作成し、request.setAttributeなどで保存してからJSPへフォワードします。",
        tip:
            "作成 → スコープへ保存 → フォワード → JSPで取得、という流れを理解しましょう。"
    }
];
