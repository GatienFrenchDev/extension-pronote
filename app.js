const url_chrome_store = "https://chrome.google.com/webstore/detail/ipoinflndgnlmgminbilaoajdlfbhgbb"
const url_firefox_addon = "https://addons.mozilla.org/fr/firefox/addon/pronote/"


document.querySelectorAll('.obtenir_btn').forEach(btn =>{
    btn.addEventListener("click", () =>{
        window.open(btn.id == "chrome" ? url_chrome_store:url_firefox_addon, '_blank').focus();
    });
});