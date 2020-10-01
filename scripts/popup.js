'use strict';

// $(document).ready(function(){
//     document.getElementById("findId").addEventListener("click", findWord);
// });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', highlightWord);
});

function findWord() {
    var e = document.getElementById("selectId");
    var language = e.options[e.selectedIndex].value;

    console.log(language)

    chrome.tabs.executeScript( null, {code:" window.find('さ')"},
    function(results){ console.log(777); } );
}

function highlightWord() {

    chrome.tabs.executeScript( null, {code: 'var str = document.querySelector("body").innerHTML.replace(/[\u3041-\u3096\u30A0-\u30FF\u3400-\u4DB5\u4E00-\u9FCB\uF900-\uFA6A\u2E80-\u2FD5\uFF5F-\uFF9F\u3000-\u303F]/g, `<span class="hightlight__detected">$&</span>`); document.querySelector("body").innerHTML = str;'},
    function(results){ console.log(777); } );
};
