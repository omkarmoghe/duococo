document.getElementById("snoop_on").addEventListener("click", function() {
    chrome.storage.sync.set({"snoop": 1});
    reload();
});
document.getElementById("snoop_off").addEventListener("click", function () {
    chrome.storage.sync.set({"snoop": 0});
    reload();
});

function reload () {
    window.reload();
}