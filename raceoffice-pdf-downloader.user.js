// ==UserScript==
// @name         Raceoffice.org PDF Downloader
// @namespace    https://github.com/PascalHelbig/Raceoffice-PDF-Downloader
// @version      0.3
// @description  Dieses Script zwingt Raceoffice.org PDFs direkt im Browser und nicht erst im "Google Docs Viewer" zu öffnen.
// @match        http://www.raceoffice.org/*
// @downloadURL  https://raw.githubusercontent.com/PascalHelbig/Raceoffice-PDF-Downloader/master/raceoffice-pdf-downloader.user.js
// @updateURL    https://raw.githubusercontent.com/PascalHelbig/Raceoffice-PDF-Downloader/master/raceoffice-pdf-downloader.user.js
// @copyright    2014+, Pascal Helbig
// ==/UserScript==

// Kontrolle, ob jQuery läuft:
var $ = unsafeWindow.jQuery;
$(document).ready(function()
{ 
	// Finde alle Links, die auf den Viwer verweisen:
    $("a[href^='/viewer.php?']").each(function() {
        var href = $(this).attr('href');
        href = href.substr(href.indexOf("file=") + 5);
        href = href.substr(0, href.indexOf('&'));        
        href = decodeURIComponent(href);        
        $(this).attr('href', href);
    }); 
});
