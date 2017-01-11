function createCORSRequest(method,url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		xhr.open(method, url, ture);
	} else if (typeof XDomainRequest != "undefined") {
		var xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhe = null;
	}
	return xhr;
}
var request = createCORSRequest("get", "http://##")
if (request) {
	request.onload = function(){
		//对request.responseText进行处理
	}；
	request.sent();
}