// var snoop;
// chrome.storage.sync.get("snoop", function(data) {
// });

var coco_video = chrome.extension.getURL('res/coco.mp4');;

duococo();
function duococo () {
    var video = document.createElement('video');
    video.src = coco_video;
    video.autoPlay = true;
    // video.style = "width:640px !important; height:360px !important"

    var videos = document.getElementsByTagName('video');
    if (videos.length > 0) {
        video.className = videos[0].className;
        videos[0].parentElement.replaceChild(video, videos[0]);
        video.play();
        // window.location.reload();
    }
}