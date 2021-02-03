const getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

var urlStr = window.location.href;
var params = getParams(urlStr);
var urlElement = document.getElementById("url");
var url2Element = document.getElementById("url2");
urlElement.href = params.url;
url2Element.href = params.url;
window.onload = function () {
    setInterval(function () {
        window.location.href = params.url || "https://www.cangokceaslan.com";
    }, 1500)
}