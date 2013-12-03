/**
 * TODO: pop.htmlから呼出すようにする。
 */ 
chrome.extension.onRequest.addListener(
  function(ignores, sender, sendResponse) {

  }
);


var hostName = "http://sandbox.evernote.com";
var options,oauth;
 options = {
    consumerKey: "bm-sirato",
    consumerSecret: "e22f13dd14bc02e4",
    callbackUrl : <your callback url>,
    signatureMethod : "HMAC-SHA1",
};
oauth = OAuth(options);
oauth.request({'method': 'GET', 'url': hostName + '/oauth', 'success': success, 'failure': failure});