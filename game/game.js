"use strict";
(() => {
	if (location.protocol.startsWith("file")) {
		alert("您使用的浏览器或客户端正在使用不受支持的file协议运行无名杀\n请检查浏览器或客户端是否需要更新");
		return;
	}

	for (const link of document.head.querySelectorAll("link")) {
		if (link.href.includes("app/color.css")) {
			link.remove();
			break;
		}
	}
	
	if (typeof window.cordovaLoadTimeout != "undefined") {
		clearTimeout(window.cordovaLoadTimeout);
		delete window.cordovaLoadTimeout;
	}

	const im = document.createElement("script");
	im.type = "importmap";
	im.textContent = `{
  "imports": {
    "noname": "/noname.js",
    "vue": "/node_modules/.pnpm/vue@3.5.26_typescript@5.9.3/node_modules/vue/dist/vue.esm-browser.js",
    "pinyin-pro": "/node_modules/.pnpm/pinyin-pro@3.27.0/node_modules/pinyin-pro/dist/index.js",
    "dedent": "/node_modules/.pnpm/dedent@1.7.1/node_modules/dedent/dist/dedent.js"
  }
}`;
	document.currentScript.after(im);

	const script = document.createElement("script");
	script.type = "module";
	script.src = "/noname/entry.js";
	document.head.appendChild(script);
})();