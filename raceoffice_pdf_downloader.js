// ==UserScript==
// @name         Raceoffice.org PDF Downloader
// @namespace    https://github.com/PascalHelbig/Raceoffice-PDF-Downloader
// @version      0.1
// @description  Dieses Script zwingt Raceoffice.org PDFs direkt im Browser und nicht erst im "Google Docs Viewer" zu öffnen.
// @match        http://www.raceoffice.org/event.php*
// @downloadURL  https://raw.githubusercontent.com/PascalHelbig/Raceoffice-PDF-Downloader/master/raceoffice_pdf_downloader.js
// @updateURL    https://raw.githubusercontent.com/PascalHelbig/Raceoffice-PDF-Downloader/master/raceoffice_pdf_downloader.js
// @copyright    2014+, Pascal Helbig
// ==/UserScript==

// Kontrolle, ob jQuery läuft:
var $ = unsafeWindow.jQuery;
$(document).ready(function()
{ 
    $("a[href^='/viewer.php?']").each(function() {
        var href = $(this).attr('href');
        href = href.substr(href.indexOf("file=") + 5);
        href = href.substr(0, href.indexOf('&'));        
        href = decodeURIComponent(href);        
        $(this).attr('href', href);
    }); 
});