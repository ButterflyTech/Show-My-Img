// ==UserScript==
// @name         Show My Img
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  show images from markdown content!
// @author       loopsun
// @match        http://bbs.inovance.com/*
// @match        https://bbs.inovance.com/*
// @match        *bbs.inovance.com/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @updateURL    https://raw.githubusercontent.com/ButterflyTech/Show-My-Img/main/ShowMyImg.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let markdownContetnts = document.querySelectorAll('.parsedown-markdown');
	for (var i = 0; i < markdownContetnts.length; i++) {
		var markdownContetnt = markdownContetnts[i];
		let allImgs = markdownContetnt.querySelectorAll('img');
		for (var j = 0; j < allImgs.length; j++) {
        var img = allImgs[j];
        img.zoomfile = img.src;
        img.classList.add('zoom');
        img.onclick = function(){zoom(this, this.src, 0, 0, 0);}
		}
		};
})();