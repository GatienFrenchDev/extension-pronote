const url_chrome_store = "https://chrome.google.com/webstore/detail/pronote-%20%20/plkafnalbppdppjehbebdocafmodbbdk"
const url_firefox_addon = "https://addons.mozilla.org/fr/firefox/addon/pronote/"
const url_repo_github = "https://github.com/GatienFrenchDev/Pronote-Extension"

document.getElementById("firefox").addEventListener("click", () =>{
    window.open(url_firefox_addon, "_blank").focus();
});

document.getElementById("chrome").addEventListener("click", () =>{
    window.open(url_chrome_store, "_blank").focus();
});

document.getElementById("github").addEventListener("click", () =>{
    window.open(url_repo_github, "_blank").focus();
});