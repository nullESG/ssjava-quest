"use strict";

/* =========================================================
   SSJava BATTLE
   重要用語集データ・表示・検索

   今回の試験範囲外：
   ・セッションスコープ
   ・アプリケーションスコープ
========================================================= */

/*
  G(
    用語名,
    読み・英語名,
    説明,
    試験ポイント,
    検索用キーワード
  )
*/

const G = (
  term,
  reading,
  description,
  examPoint,
  keywords = ""
) => ({
  term,
  reading,
  description,
  examPoint,
  keywords
});

/* =========================================================
   用語データ
========================================================= */

const glossaryData = [
  /* =======================================================
     Webアプリケーションの基本
  ======================================================= */

  G(
    "クライアント",
    "CLIENT",
    "サーバーへリクエストを送り、レスポンスを受け取る側。Webアプリケーションでは主にブラウザが該当する。",
    "基本の流れは「クライアントからリクエスト→サーバーで処理→クライアントへレスポンス」。",
    "browser ブラウザ request response web"
  ),

  G(
    "Webサーバー",
    "WEB SERVER",
    "ブラウザからのHTTPリクエストを受け取り、HTMLや画像などのレスポンスを返すサーバー。",
    "サーバーサイドプログラムは、ブラウザからのリクエストをきっかけにサーバー上で動作する。",
    "server サーバ http servlet jsp"
  ),

  G(
    "Tomcat",
    "トムキャット",
    "ServletやJSPを実行するためのWebコンテナ。ブラウザからのリクエストを受け、対応するServletやJSPを実行する。",
    "JSPはTomcat内部でServletへ変換・コンパイルされて実行される。",
    "web container webコンテナ servlet jsp server"
  ),

  G(
    "Webコンテナ",
    "WEB CONTAINER",
    "ServletやJSPの実行、URLマッピング、リクエスト・レスポンスの受け渡しなどを行う実行環境。",
    "授業で使用する代表的なWebコンテナはTomcat。",
    "tomcat servlet jsp 実行環境 アプリケーションサーバ"
  ),

  G(
    "リクエスト",
    "HTTP REQUEST",
    "ブラウザなどのクライアントから、Webサーバーへ送られる要求。",
    "Servletでは通常、<code>HttpServletRequest request</code>で扱う。",
    "request 要求 httpservletrequest"
  ),

  G(
    "レスポンス",
    "HTTP RESPONSE",
    "Webサーバーが処理結果として、ブラウザなどのクライアントへ返す応答。",
    "Servletでは通常、<code>HttpServletResponse response</code>で扱う。",
    "response 応答 httpservletresponse"
  ),

  G(
    "静的コンテンツ",
    "STATIC CONTENT",
    "利用者や処理結果によって、表示内容がほとんど変化しないコンテンツ。",
    "固定されたHTMLファイルなどが代表例。",
    "static html 固定"
  ),

  G(
    "動的コンテンツ",
    "DYNAMIC CONTENT",
    "利用者の入力やサーバー側の処理結果によって、表示内容が変化するコンテンツ。",
    "ServletやJSPを利用して生成するページが代表例。",
    "dynamic servlet jsp 動的ページ"
  ),

  /* =======================================================
     HTTP
  ======================================================= */

  G(
    "HTTPメッセージ",
    "HTTP MESSAGE",
    "ブラウザとサーバーがやり取りする、リクエストまたはレスポンスの文字列情報。",
    "基本構造は「開始行・ヘッダー・空行・ボディ」。",
    "開始行 ヘッダー ヘッダ body ボディ request response"
  ),

  G(
    "リクエストライン",
    "REQUEST LINE",
    "HTTPリクエストの開始行。リクエストメソッド、リクエスト先、HTTPバージョンなどが含まれる。",
    "例：<code>GET /sample.html HTTP/1.1</code>",
    "http get post 開始行 method"
  ),

  G(
    "HTTPヘッダー",
    "HTTP HEADER",
    "HTTPリクエストやレスポンスに関する追加情報を表す部分。",
    "代表例は<code>Host</code>、<code>User-Agent</code>、<code>Content-Type</code>。",
    "header ヘッダ host user-agent content-type"
  ),

  G(
    "HTTPボディ",
    "HTTP BODY",
    "HTTPメッセージの本体部分。POSTの送信データや、レスポンスのHTMLなどが格納される。",
    "GETのリクエストでは空の場合が多く、POSTでは入力値がリクエストボディへ格納される。",
    "body リクエストボディ レスポンスボディ post html"
  ),

  G(
    "Content-Type",
    "コンテント・タイプ",
    "ボディに含まれるデータの種類や文字コードを伝えるHTTPヘッダー。",
    "HTML・UTF-8の場合：<code>text/html; charset=UTF-8</code>",
    "contenttype header ヘッダー charset utf-8 html"
  ),

  G(
    "image/jpeg",
    "JPEGのメディアタイプ",
    "JPEG画像をレスポンスするときに使用するContent-Typeの値。",
    "HTMLは<code>text/html</code>、JPEGは<code>image/jpeg</code>。",
    "content-type image jpeg 画像"
  ),

  G(
    "curl",
    "CLIENT FOR URL",
    "サーバーへリクエストを送り、受け取ったレスポンスを確認できるツール。",
    "通信の詳細を表示する場合は<code>-v</code>を付ける。例：<code>curl.exe -v http://127.0.0.1:5500/sample.html</code>",
    "command コマンド verbose request response"
  ),

  /* =======================================================
     Servlet
  ======================================================= */

  G(
    "Servlet",
    "サーブレット",
    "Webサーバー上で動作するJavaプログラム。リクエストを受け、サーバー側で処理を行い、レスポンスを返す。",
    "通常は<code>HttpServlet</code>を継承して作成する。",
    "java server サーバーサイド"
  ),

  G(
    "HttpServlet",
    "エイチティーティーピー・サーブレット",
    "HTTP通信を扱うServletの基本クラス。作成するServletクラスで継承する。",
    "基本形：<code>public class Sample extends HttpServlet</code>",
    "extends 継承 servlet class"
  ),

  G(
    "HttpServletRequest",
    "リクエスト情報",
    "ブラウザからサーバーへ送られたリクエスト情報を扱う型。",
    "基本的な変数名は<code>request</code>。フォームの入力値やリクエストスコープを扱う。",
    "request getparameter setattribute getattribute"
  ),

  G(
    "HttpServletResponse",
    "レスポンス情報",
    "サーバーからブラウザへ返すレスポンス情報を扱う型。",
    "基本的な変数名は<code>response</code>。Content-Typeの設定やリダイレクトなどに使う。",
    "response setcontenttype sendredirect getwriter"
  ),

  G(
    "@WebServlet",
    "ウェブ・サーブレット",
    "ServletクラスとURLパターンを対応させるアノテーション。",
    "例：<code>@WebServlet(\"/Login\")</code>",
    "annotation アノテーション url pattern mapping"
  ),

  G(
    "URLパターン",
    "URL PATTERN",
    "ブラウザからアクセスされるURLと、実行するServletクラスを対応させる指定。",
    "<code>@WebServlet(\"/Login\")</code>なら、WebアプリケーションのURLに続けて<code>/Login</code>へアクセスする。",
    "webservlet mapping servlet 実行"
  ),

  G(
    "URLパターンの重複",
    "DUPLICATE URL PATTERN",
    "同じWebアプリケーション内の複数のServletへ、同じURLパターンを設定してしまうこと。",
    "Servletクラスをコピーしても<code>@WebServlet</code>は自動変更されない。重複するとサーバーが起動できない場合がある。",
    "copy コピー annotation webservlet エラー 起動"
  ),

  G(
    "doGet()",
    "ドゥー・ゲット",
    "GETリクエストを受け取ったときに実行されるServletのメソッド。",
    "検索・ページ表示・リンクからのアクセスなどでGETが使われることが多い。",
    "get servlet method override"
  ),

  G(
    "doPost()",
    "ドゥー・ポスト",
    "POSTリクエストを受け取ったときに実行されるServletのメソッド。",
    "HTMLフォームでは<code>method=\"post\"</code>を指定する。",
    "post servlet method override"
  ),

  G(
    "オーバーライド",
    "OVERRIDE",
    "親クラスから継承したメソッドを、子クラス側で同じ形式で定義し直すこと。",
    "HttpServletを継承したクラスで、<code>doGet()</code>や<code>doPost()</code>をオーバーライドする。",
    "@override 継承 doget dopost"
  ),

  G(
    "javax.servlet",
    "旧Servlet APIパッケージ",
    "Tomcat 9以前の教材や環境で主に使用されるServlet APIのパッケージ名。",
    "例：<code>javax.servlet.http.HttpServlet</code>",
    "tomcat9 import package"
  ),

  G(
    "jakarta.servlet",
    "現行Servlet APIパッケージ",
    "Tomcat 10以降で主に使用されるServlet APIのパッケージ名。",
    "例：<code>jakarta.servlet.http.HttpServlet</code>。Tomcatのバージョンとimportを一致させる。",
    "tomcat10 import package"
  ),

  G(
    "web.xml",
    "DEPLOYMENT DESCRIPTOR",
    "Webアプリケーションの設定を記述するXMLファイル。ServletクラスやURLパターンを登録できる。",
    "Servletの登録方法は、主に<code>@WebServlet</code>または<code>web.xml</code>。",
    "servlet mapping xml url-pattern"
  ),

  G(
    "servlet要素",
    "WEB.XML SERVLET",
    "web.xmlでServlet名とServletクラスを登録するための要素。",
    "<code>&lt;servlet-name&gt;</code>と<code>&lt;servlet-class&gt;</code>を記述する。",
    "servlet-name servlet-class web.xml"
  ),

  G(
    "servlet-mapping要素",
    "SERVLET MAPPING",
    "web.xmlでServlet名とURLパターンを対応付けるための要素。",
    "<code>&lt;servlet-name&gt;</code>と<code>&lt;url-pattern&gt;</code>を記述する。",
    "web.xml url-pattern 対応"
  ),

  /* =======================================================
     ServletからHTMLを返す
  ======================================================= */

  G(
    "setContentType()",
    "レスポンス形式の設定",
    "レスポンスのデータ形式や文字コードを設定するメソッド。",
    "<code>response.setContentType(\"text/html; charset=UTF-8\");</code>",
    "content-type response html utf-8 charset"
  ),

  G(
    "PrintWriter",
    "プリント・ライター",
    "Servletから文字列やHTMLをレスポンスへ出力するためのオブジェクト。",
    "<code>PrintWriter out = response.getWriter();</code>",
    "getwriter println response html"
  ),

  G(
    "println()",
    "文字列の出力",
    "PrintWriterを使って、HTMLなどの文字列をレスポンスへ書き込むメソッド。",
    "例：<code>out.println(\"&lt;h1&gt;結果&lt;/h1&gt;\");</code>",
    "printwriter out html response"
  ),

  G(
    "ServletによるHTML生成",
    "SERVLET RESPONSE",
    "ServletのJavaコード内から、PrintWriterを使ってHTMLをレスポンスへ出力する処理。",
    "順序は「Content-Type設定→getWriterでPrintWriter取得→printlnでHTML出力」。",
    "setcontenttype getwriter printwriter println"
  ),

  /* =======================================================
     GET・POST・フォーム
  ======================================================= */

  G(
    "GET",
    "ゲット・リクエスト",
    "主に情報の取得・検索・閲覧に使われるリクエストメソッド。送信データはURLの末尾へ付加される。",
    "URLへ送信値が表示される。データ量はURL長の影響を受ける。",
    "url query クエリ 取得 閲覧"
  ),

  G(
    "POST",
    "ポスト・リクエスト",
    "主にデータの登録・更新・削除などに使われるリクエストメソッド。データは主にリクエストボディへ格納される。",
    "URLへ値は基本的に表示されないが、POSTだけで暗号化されるわけではない。通信保護にはHTTPSが必要。",
    "body 登録 更新 削除 送信 https"
  ),

  G(
    "form要素",
    "HTML FORM",
    "利用者が入力したデータをServletなどへ送信するためのHTML要素。",
    "例：<code>&lt;form action=\"Register\" method=\"post\"&gt;</code>",
    "フォーム action method get post"
  ),

  G(
    "action属性",
    "FORM ACTION",
    "フォームデータの送信先URLを指定する属性。",
    "ServletのURLパターンなどを指定する。例：<code>action=\"FormSampleServlet\"</code>",
    "form 送信先 servlet url"
  ),

  G(
    "method属性",
    "FORM METHOD",
    "フォームをGETとPOSTのどちらで送信するか指定する属性。",
    "GETは<code>method=\"get\"</code>、POSTは<code>method=\"post\"</code>。",
    "form get post リクエストメソッド"
  ),

  G(
    "name属性",
    "FORM CONTROL NAME",
    "フォーム部品の送信データへ名前を付ける属性。リクエストパラメータ名として使われる。",
    "<code>name=\"age\"</code>なら、Java側で<code>request.getParameter(\"age\")</code>と取得する。",
    "input getparameter パラメータ名"
  ),

  G(
    "label要素",
    "FORM LABEL",
    "入力欄やラジオボタンなどのフォーム部品へ、項目名や説明を付けるHTML要素。",
    "<code>label</code>のfor属性と、入力欄のid属性を対応させる。",
    "form for id 入力欄"
  ),

  G(
    "ラジオボタン",
    "RADIO BUTTON",
    "複数の選択肢から、基本的に1つを選択するフォーム部品。",
    "同じグループでは<code>name</code>を同じにする。送信される値は<code>value</code>で指定する。",
    "radio name value form"
  ),

  G(
    "value属性",
    "FORM VALUE",
    "フォーム部品から実際に送信される値を指定する属性。",
    "<code>&lt;input type=\"radio\" name=\"gender\" value=\"male\"&gt;</code>なら、選択時に<code>gender=male</code>が送信される。",
    "radio input 送信値"
  ),

  G(
    "hiddenフィールド",
    "HIDDEN FIELD",
    "画面へ表示せず、フォームデータとして値を送信する入力欄。",
    "<code>&lt;input type=\"hidden\" name=\"registerDate\" value=\"2026-07-13\"&gt;</code>。画面に見えなくても改変不可能という意味ではない。",
    "input 非表示 form hidden"
  ),

  G(
    "アンカー",
    "ANCHOR・LINK",
    "HTMLの<code>&lt;a&gt;</code>要素。リンクからServletへアクセスすると、基本的にGETリクエストになる。",
    "例：<code>&lt;a href=\"Menu\"&gt;メニューへ&lt;/a&gt;</code>",
    "link href リンク servlet get"
  ),

  G(
    "クエリ文字列",
    "QUERY STRING",
    "GETリクエストでURLの末尾へ付加されるパラメータ部分。",
    "例：<code>Detail?id=10&amp;mode=edit</code>。最初は<code>?</code>、2つ目以降は<code>&amp;</code>で区切る。",
    "query get url parameter パラメータ"
  ),

  G(
    "getParameter()",
    "リクエストパラメータ取得",
    "フォームやURLから送信されたリクエストパラメータを取得するメソッド。",
    "<code>request.getParameter(\"name\")</code>。戻り値は基本的に<code>String</code>。",
    "request string form name"
  ),

  G(
    "getParameter()の戻り値",
    "STRING VALUE",
    "<code>request.getParameter()</code>で取得した値は、数字に見える場合でも基本的にString型。",
    "数値として使う場合：<code>int age = Integer.parseInt(request.getParameter(\"age\"));</code>",
    "string parseint int 型変換 数値"
  ),

  G(
    "getParameter()とgetAttribute()",
    "PARAMETER VS ATTRIBUTE",
    "<code>getParameter()</code>はフォームやURLから送信された値を取得し、<code>getAttribute()</code>はスコープへ保存されたオブジェクトを取得する。",
    "送信値はgetParameter、保存済み属性はgetAttribute。",
    "違い request パラメータ 属性 scope"
  ),

  /* =======================================================
     正規表現
  ======================================================= */

  G(
    "pattern属性",
    "HTML PATTERN",
    "HTMLの入力値を正規表現で検証するための属性。",
    "半角英字を1文字以上：<code>pattern=\"^[a-zA-Z]+$\"</code>",
    "regex regular expression 正規表現 input"
  ),

  G(
    "正規表現",
    "REGULAR EXPRESSION",
    "文字列の集合や形式を、メタ文字と呼ばれる記号を組み合わせて表す記法。",
    "<code>^[0-9a-zA-Z]{4}$</code>は、半角英数字のちょうど4文字。",
    "regex regexp pattern メタ文字"
  ),

  G(
    "^",
    "正規表現・行頭",
    "正規表現で、文字列の先頭を表すメタ文字。",
    "<code>^a</code>は、aで始まる文字列を表す。",
    "regex 正規表現 行頭 先頭"
  ),

  G(
    "$",
    "正規表現・行末",
    "正規表現で、文字列の末尾を表すメタ文字。",
    "<code>n$</code>は、nで終わる文字列を表す。",
    "regex 正規表現 行末 末尾"
  ),

  G(
    ".",
    "正規表現・任意の1文字",
    "正規表現で、基本的に任意の1文字を表すメタ文字。",
    "通常のピリオドそのものを表したい場合とは区別する。",
    "regex 正規表現 dot ドット"
  ),

  G(
    "[...]",
    "正規表現・文字の候補",
    "正規表現で、文字の候補や範囲を表す。",
    "<code>[abc]</code>はa・b・cのいずれか1文字。<code>[0-9]</code>は半角数字。",
    "regex 正規表現 論理和 範囲"
  ),

  G(
    "+",
    "正規表現・1回以上",
    "正規表現で、直前の要素を1回以上繰り返すことを表す。",
    "<code>[a-zA-Z]+</code>は、半角英字が1文字以上連続することを表す。",
    "regex 正規表現 繰り返し"
  ),

  G(
    "{4}",
    "正規表現・繰り返し回数",
    "正規表現で、直前の要素をちょうど4回繰り返すことを表す。",
    "<code>[0-9]{4}</code>は半角数字4文字。",
    "regex 正規表現 回数"
  ),

  /* =======================================================
     JSP
  ======================================================= */

  G(
    "JSP",
    "JAVA SERVER PAGES・JAKARTA SERVER PAGES",
    "HTMLを中心に、必要なJava処理を埋め込んで動的な画面を作る仕組み。",
    "ServletはJava中心で処理・制御、JSPはHTML中心で画面表示を担当する。",
    "view html servlet jakarta server pages"
  ),

  G(
    "JSPの必要性",
    "WHY JSP?",
    "Servletでprintlnを使って大量のHTMLを生成すると、Javaコードと表示コードが混ざって複雑になるため、JSPを使ってHTML中心に画面を作る。",
    "MVCではJSPをViewとして利用する。",
    "servlet html println view 表示"
  ),

  G(
    "JSPコンパイル",
    "JSP COMPILATION",
    "JSPファイルをServletのソースコードへ変換し、Javaとしてコンパイルする処理。",
    "JSPファイル→Servletソース→Javaコンパイル→Servletクラス→実行。",
    "tomcat servlet 変換 compile 実行"
  ),

  G(
    "pageディレクティブ",
    "PAGE DIRECTIVE",
    "JSPページ全体に関する設定を行う記述。",
    "文字コード：<code>&lt;%@ page contentType=\"text/html; charset=UTF-8\" %&gt;</code>",
    "jsp contenttype charset import"
  ),

  G(
    "pageディレクティブのimport",
    "JSP IMPORT",
    "JSPで使用するJavaクラスを読み込むためのpageディレクティブ。",
    "例：<code>&lt;%@ page import=\"sample.User\" %&gt;</code>",
    "class クラス パッケージ javabeans"
  ),

  G(
    "スクリプトレット",
    "SCRIPTLET",
    "JSPファイル内へJavaの文や制御構文を記述するための領域。",
    "記号：<code>&lt;% Javaコード %&gt;</code>",
    "jsp java 記号"
  ),

  G(
    "スクリプト式",
    "JSP EXPRESSION",
    "Javaの式を評価し、その結果をJSPの画面へ出力する記述。",
    "記号：<code>&lt;%= 式 %&gt;</code>。基本的に式の末尾へセミコロンを付けない。",
    "jsp expression 出力 表示"
  ),

  G(
    "JSPコメント",
    "JSP COMMENT",
    "JSPファイル内で使用するコメント。生成されるレスポンスHTMLには含まれない。",
    "記号：<code>&lt;%-- コメント --%&gt;</code>",
    "comment コメント html"
  ),

  G(
    "JSPテンプレート",
    "JSP TEMPLATE",
    "JSPファイル内に記述された通常のHTML部分。",
    "<code>&lt;!DOCTYPE html&gt;</code>や<code>&lt;h1&gt;</code>などは、基本的にレスポンスへ出力される。",
    "html 静的部分"
  ),

  G(
    "JSPの暗黙オブジェクト",
    "IMPLICIT OBJECT",
    "JSP内で、自分で宣言しなくても使用できるように用意されているオブジェクト。",
    "今回特に重要なのは<code>request</code>。例：<code>request.getAttribute(\"user\")</code>",
    "request 暗黙 implicit getattribute"
  ),

  G(
    "WEB-INF",
    "ウェブ・インフ",
    "Webアプリケーションの設定ファイルなどを配置する特別なフォルダ。",
    "JSPをWEB-INF内へ配置すると、ブラウザからの直接アクセスを防げる。Servletからフォワードして表示する。",
    "jsp 直接アクセス 禁止 forward"
  ),

  /* =======================================================
     MVC
  ======================================================= */

  G(
    "MVCモデル",
    "MODEL・VIEW・CONTROLLER",
    "アプリケーションをModel・View・Controllerの3つの役割へ分ける設計方法。",
    "Servlet＝Controller、JSP＝View、JavaクラスやJavaBeans＝Model。",
    "モデル ビュー コントローラ 設計"
  ),

  G(
    "Model",
    "モデル",
    "業務処理、計算処理、データの操作や格納などを担当する。",
    "JavaクラスやJavaBeansなどがModelとして使われる。",
    "mvc データ 業務処理 java beans"
  ),

  G(
    "View",
    "ビュー",
    "利用者へ見せる画面表示を担当する。",
    "ServletとJSPのMVC構成では、主にJSPがViewを担当する。",
    "mvc jsp 表示 画面"
  ),

  G(
    "Controller",
    "コントローラ",
    "リクエストを受け取り、Modelへ処理を依頼し、表示するViewを決定する。",
    "ServletとJSPのMVC構成では、主にServletがControllerを担当する。",
    "mvc servlet 制御 request"
  ),

  G(
    "MVCの処理の流れ",
    "MVC FLOW",
    "Servletがリクエストを受け、必要な処理やデータ作成を行い、JSPへフォワードして画面を表示する。",
    "ブラウザ→Servlet→Model・JavaBeans→リクエストスコープ→JSP→ブラウザ。",
    "forward model view controller scope"
  ),

  /* =======================================================
     フォワード・リダイレクト
  ======================================================= */

  G(
    "フォワード",
    "FORWARD",
    "同じWebアプリケーション内部で、別のServletやJSPへ同じリクエストを転送する処理。",
    "基本的にリクエストは1回。URLは変わらず、リクエスト情報を引き継げる。",
    "requestdispatcher url 1回 内部 転送"
  ),

  G(
    "RequestDispatcher",
    "リクエスト・ディスパッチャー",
    "Servletから別のServletやJSPへフォワードするときに利用するオブジェクト。",
    "<code>request.getRequestDispatcher(\"転送先\")</code>で取得する。",
    "getrequestdispatcher forward servlet jsp"
  ),

  G(
    "フォワードの基本構文",
    "FORWARD SYNTAX",
    "RequestDispatcherを取得し、requestとresponseを転送する。",
    "<code>RequestDispatcher dispatcher = request.getRequestDispatcher(\"/WEB-INF/jsp/result.jsp\");</code><br><code>dispatcher.forward(request, response);</code>",
    "dispatcher request response jsp"
  ),

  G(
    "リダイレクト",
    "REDIRECT",
    "ブラウザへ移動先を伝え、そのURLへ新しいリクエストを送らせる処理。",
    "<code>response.sendRedirect(\"移動先\")</code>。URLは移動先へ変わり、基本的にリクエストは2回。",
    "sendredirect url 2回 再リクエスト 外部"
  ),

  G(
    "フォワードとリダイレクト",
    "FORWARD VS REDIRECT",
    "フォワードはサーバー内部の転送、リダイレクトはブラウザによる移動先への再リクエスト。",
    "フォワードはURL不変・1回・requestを引継ぎ可能。リダイレクトはURL変化・2回・requestを原則引き継がない。",
    "違い 比較 request url"
  ),

  /* =======================================================
     リクエストスコープ
  ======================================================= */

  G(
    "スコープ",
    "SCOPE",
    "インスタンスなどのデータを保存し、共有・利用できる範囲。",
    "今回の試験では、ServletからJSPへデータを渡すリクエストスコープが重要。",
    "データ共有 インスタンス 保存"
  ),

  G(
    "リクエストスコープ",
    "REQUEST SCOPE",
    "1回のリクエストを処理している間だけ、データを保存・共有できる領域。",
    "保存先の正体は<code>HttpServletRequest</code>インスタンス。Servletからフォワード先のJSPへデータを渡せる。",
    "request servlet jsp forward 有効期限"
  ),

  G(
    "setAttribute()",
    "属性の保存",
    "名前を付けて、リクエストスコープへオブジェクトを保存するメソッド。",
    "<code>request.setAttribute(\"user\", user);</code>。第1引数が属性名、第2引数が保存するインスタンス。",
    "request scope object インスタンス"
  ),

  G(
    "getAttribute()",
    "属性の取得",
    "名前を指定して、リクエストスコープから保存済みのオブジェクトを取得するメソッド。",
    "<code>request.getAttribute(\"user\")</code>。戻り値は基本的に<code>Object</code>。",
    "request scope object 取得"
  ),

  G(
    "属性の上書き",
    "ATTRIBUTE OVERWRITE",
    "同じ属性名ですでにデータが保存されている状態で、再びsetAttributeを実行すると、新しい値へ置き換わる。",
    "<code>message</code>という同じ属性名で2回保存した場合、後から保存した値を取得する。",
    "setattribute 同じ 名前 overwrite"
  ),

  G(
    "キャスト",
    "CAST",
    "Object型などで取得した値を、元の型として扱えるように型変換すること。",
    "<code>User user = (User) request.getAttribute(\"user\");</code>",
    "object getattribute user 型変換"
  ),

  G(
    "リクエストスコープとリダイレクト",
    "REQUEST SCOPE AND REDIRECT",
    "リダイレクトではブラウザから新しいリクエストが送られるため、元のリクエストスコープの値は原則として引き継がれない。",
    "リクエストスコープのデータをServletからJSPへ渡す場合は、同じrequestを渡すフォワードを使う。",
    "forward sendredirect 引き継ぎ"
  ),

  /* =======================================================
     JavaBeans
  ======================================================= */

  G(
    "JavaBeans",
    "ジャバ・ビーンズ",
    "名前・年齢・住所など、関連する複数の情報を1つのオブジェクトとしてまとめて保存するJavaクラス。",
    "フィールドは基本的にprivateとし、プロパティはgetter・setterを通して操作する。",
    "bean model データ オブジェクト"
  ),

  G(
    "JavaBeansの主なルール",
    "JAVABEANS RULES",
    "授業で扱うJavaBeansの基本的な作成規則。",
    "①Serializableを実装 ②publicクラス ③パッケージへ所属 ④publicな引数なしコンストラクタ ⑤privateフィールド ⑥getter・setterを用意。",
    "public private constructor getter setter serializable"
  ),

  G(
    "Serializable",
    "シリアライザブル",
    "インスタンスをシリアライズ可能なデータとして扱えることを示すインターフェース。",
    "JavaBeansの例：<code>public class User implements Serializable</code>",
    "java.io marker interface bean"
  ),

  G(
    "マーカーインターフェース",
    "MARKER INTERFACE",
    "実装を必須とするメソッドを持たず、クラスへ特定の性質や許可を示すためのインターフェース。",
    "<code>Serializable</code>は代表的なマーカーインターフェース。",
    "serializable method interface"
  ),

  G(
    "引数なしコンストラクタ",
    "NO-ARG CONSTRUCTOR",
    "引数を受け取らずにインスタンスを作成するコンストラクタ。",
    "JavaBeansではpublicな引数なしコンストラクタを用意する。例：<code>public User() { }</code>",
    "constructor public javabeans インスタンス"
  ),

  G(
    "カプセル化",
    "ENCAPSULATION",
    "フィールドへ外部から直接アクセスさせず、メソッドを通して操作する考え方。",
    "フィールドを<code>private</code>にし、getter・setterを通して値を読み書きする。",
    "private field getter setter"
  ),

  G(
    "フィールド",
    "FIELD",
    "クラス内部でデータを保持する変数そのもの。",
    "JavaBeansでは原則としてprivateにする。例：<code>private int age;</code>",
    "変数 private property プロパティ"
  ),

  G(
    "プロパティ",
    "PROPERTY",
    "getterやsetterを通して、外部から読み書きできるデータの概念。",
    "ageプロパティなら、<code>getAge()</code>と<code>setAge()</code>によって定義される。",
    "field フィールド getter setter"
  ),

  G(
    "フィールドとプロパティ",
    "FIELD VS PROPERTY",
    "フィールドはクラス内部の変数そのもの。プロパティはgetterやsetterを通して外部へ公開されるデータの概念。",
    "フィールド：<code>private int age;</code><br>プロパティ：<code>getAge()</code>・<code>setAge()</code>",
    "違い javabeans カプセル化"
  ),

  G(
    "getter",
    "ゲッター",
    "JavaBeansのプロパティの値を読み取るためのメソッド。",
    "nameプロパティなら<code>public String getName()</code>。",
    "get property 読み取り 取得"
  ),

  G(
    "setter",
    "セッター",
    "JavaBeansのプロパティへ値を設定・変更するためのメソッド。",
    "nameプロパティなら<code>public void setName(String name)</code>。",
    "set property 設定 変更"
  ),

  G(
    "serialVersionUID",
    "シリアル・バージョンUID",
    "シリアライズされるクラスのバージョンを識別するための値。",
    "<code>private static final long serialVersionUID = 1L;</code>",
    "serializable version long static final"
  ),

  G(
    "Integer.parseInt()",
    "文字列からintへの型変換",
    "数字を表すStringをint型へ変換するメソッド。",
    "<code>int age = Integer.parseInt(ageText);</code>。数字以外の文字列では例外が発生する可能性がある。",
    "string int 数値 型変換"
  ),

  G(
    "JavaBeansをスコープへ保存",
    "STORE A BEAN",
    "ServletでJavaBeansのインスタンスを作成し、setterで値を設定してからリクエストスコープへ保存する。",
    "<code>User user = new User();</code><br><code>user.setName(name);</code><br><code>request.setAttribute(\"user\", user);</code>",
    "new instance setattribute setter mvc"
  ),

  G(
    "MVC・JavaBeans・スコープの流れ",
    "COMPLETE MVC FLOW",
    "フォームの入力値をServletで取得し、JavaBeansへ設定してリクエストスコープへ保存し、JSPへフォワードして表示する流れ。",
    "getParameter→必要なら型変換→new→setter→setAttribute→forward→JSPでgetAttribute→getterで表示。",
    "servlet jsp request parseint model view controller"
  )
];

/* =========================================================
   DOM取得
========================================================= */

const glossarySearch =
  document.getElementById("glossarySearch");

const glossaryGrid =
  document.getElementById("glossaryGrid");

const glossaryCount =
  document.getElementById("glossaryCount");

const noResults =
  document.getElementById("noResults");

/* =========================================================
   検索文字列の正規化
========================================================= */

function normalizeSearchText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/\s+/g, "");
}

/* =========================================================
   用語カード生成
========================================================= */

function createGlossaryCard(item) {
  const article =
    document.createElement("article");

  article.className = "glossary-card";

  article.dataset.searchText =
    normalizeSearchText(
      [
        item.term,
        item.reading,
        item.description,
        item.examPoint,
        item.keywords
      ].join(" ")
    );

  article.innerHTML = `
    <h2>${item.term}</h2>

    <p class="reading">
      ${item.reading}
    </p>

    <p>
      ${item.description}
    </p>

    <p class="exam-point">
      試験ポイント：<br>
      ${item.examPoint}
    </p>
  `;

  return article;
}

/* =========================================================
   初期表示
========================================================= */

function renderGlossary() {
  const fragment =
    document.createDocumentFragment();

  glossaryData.forEach(item => {
    fragment.appendChild(
      createGlossaryCard(item)
    );
  });

  glossaryGrid.replaceChildren(fragment);

  updateGlossaryCount(
    glossaryData.length
  );
}

/* =========================================================
   件数表示
========================================================= */

function updateGlossaryCount(count) {
  glossaryCount.textContent =
    `${count}件の用語を表示中`;

  noResults.classList.toggle(
    "hidden",
    count !== 0
  );
}

/* =========================================================
   検索
========================================================= */

function filterGlossary() {
  const searchWord =
    normalizeSearchText(
      glossarySearch.value
    );

  const cards =
    glossaryGrid.querySelectorAll(
      ".glossary-card"
    );

  let visibleCount = 0;

  cards.forEach(card => {
    const isVisible =
      searchWord === "" ||
      card.dataset.searchText.includes(
        searchWord
      );

    card.classList.toggle(
      "hidden",
      !isVisible
    );

    if (isVisible) {
      visibleCount += 1;
    }
  });

  updateGlossaryCount(visibleCount);
}

/* =========================================================
   イベント登録
========================================================= */

glossarySearch.addEventListener(
  "input",
  filterGlossary
);

/*
  Escapeキーで検索文字を削除する。
*/
glossarySearch.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Escape" &&
      glossarySearch.value !== ""
    ) {
      glossarySearch.value = "";
      filterGlossary();
      glossarySearch.blur();
    }
  }
);

/* =========================================================
   初期化
========================================================= */

renderGlossary();
