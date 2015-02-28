// var snoop;
// chrome.storage.sync.get("snoop", function(data) {
// });

var coco_video = "file://res/coco.mp4";

duococo();
function duococo () {
    var video = document.createElement('video');
    video.src = coco_video;
    video.autoPlay = true;
    document.body.appendChild(video);
}