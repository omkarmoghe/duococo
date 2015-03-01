var last = 0;
document.getElementById("coco_button").addEventListener("click", function() {
    chrome.storage.sync.get("coco", function(data) {
        last = data.coco;
    });
    if (last == 1) {
        chrome.storage.sync.set({"coco": 0});
        alert("Coco has been disabled.")
    } else {
        chrome.storage.sync.set({"coco": 1});
        alert("Coco enabled.")
    }
});

function reload () {
    window.reload();
}