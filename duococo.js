// var snoop;
// chrome.storage.sync.get("snoop", function(data) {
// });

var coco_video = chrome.extension.getURL('res/coco.mp4');;

setInterval(function() {
    if (!document.getElementById("coco-or-bust")) {
        duococo();
    }
}, 2000);

function duococo () {
    var video = document.createElement('video');
    video.src = coco_video;
    video.autoPlay = true;
    video.id = "coco-or-bust";

    var videos = document.getElementsByTagName('video');
    if (videos.length > 0) {
        video.className = videos[0].className;
        videos[0].parentElement.replaceChild(video, videos[0]);
        video.play();
    }
}