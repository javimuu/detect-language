'use strict';


window.onload = function() {
    console.log('injected');
    var link = document.createElement("link");
    link.href = chrome.extension.getURL('styles/hightlight.css');
    link.type = "text/css";
    link.rel = "stylesheet";
    (document.head||document.documentElement).appendChild(link);

    var script = document.createElement('script');
    script.src = chrome.extension.getURL('scripts/detect.js');
    (document.head||document.documentElement).appendChild(script);
    script.onload = function() {
        //script.parentNode.removeChild(script);
    };
};
