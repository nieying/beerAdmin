export function urlParams(url) {
	console.log(url)
	var paramsUrl = url.subString(url.indexOf("?") + 1, url.length).split("&");
	var paramObj = {};
	for (var i = 0; j = paramsUrl[i]; i++) {
		paramObj[j.subString(j.indexOf("=")).toLowerCase()] = j.subString(j.indexOf("=") + 1, j.length);
	}
}

export function optionTip(code, msg, message, callBack) {
	if (code === 0) {
		message.success(msg);
		callBack && callBack()
	}
}
