
function getVideo(){
    return document.getElementById("video");
}

function play(){
    var video = getVideo();
    video.play();
}

function pause(){
    var video = getVideo();
    video.pause();
}

function stop(){
    var video = getVideo();
    //video.pause();
    //video.currentTime = 0;
    video.load();
}

function volume(){
    var volume = document.getElementById("volume").value;
    if (volume === "100"){
        volume = 1;
    }
    else {
        volume = parseFloat("0." + volume).toFixed(1);
    }

    var video = getVideo();
    video.volume = volume;
}

function muted(){
    var video = getVideo();
    var mut = document.getElementById("muted");
    if (video.muted){
        video.muted = false;
        mut.style.color = "black";
    }
    else {
        video.muted = true;
        mut.style.color = "red";
    }
}

function full(){
    var video = getVideo();
    video.webkitEnterFullScreen();
}

getVideo().onplay = function() {
  console.log("O vídeo foi iniciado com o botão play");
  if(getVideo().currenTime === 0){
    setStorage("video", {desc:["O vídeo foi iniciado com o botão play"], time:[0], volume:[getVideo().volume]});
  }
  else {
    var objVideo = getStorage("video");
    objVideo.desc.push("O vídeo foi iniciado com o botão play");
    objVideo.time.push(getVideo().currenTime);
    objVideo.volume.push(getVideo().volume);
    setStorage("video", objVideo);
  }
}

getVideo().onpause = function() {
  console.log("O vídeo foi pausado com o botão pause");

  var objVideo = getStorage("video");
  objVideo.desc.push("O vídeo foi pausado com o botão pause");
  objVideo.time.push(getVideo().currenTime);
  objVideo.volume.push(getVideo().volume);
  setStorage("video", objVideo);
}

getVideo().onabort = function() {
  console.log("O vídeo foi parado com o botão stop");

  var objVideo = getStorage("video");
  objVideo.desc.push("O vídeo foi parado com o botão stop");
  objVideo.time.push(getVideo().currenTime);
  objVideo.volume.push(getVideo().volume);
  setStorage("video", objVideo);

  var listVideo = getStorage("listVideo");

  if (!listVideo.length) {
    listVideo = [];
  }
  listVideo.push(objVideo);
  setStorage("listVideo", listVideo);
}

getVideo().onvolumechange = function() {
  console.log("O vídeo está mudando de volume com o botão deslizante");

  var objVideo = getStorage("video");
  objVideo.desc.push("O vídeo está mudando de volume com o botão deslizante");
  objVideo.time.push(getVideo().currenTime);
  objVideo.volume.push(getVideo().volume);
  setStorage("video", objVideo);
}

function setStorage(id, list) {
  localStorage.setItem(id, JSON.stringify(list));
}

function getStorage(id) {
  var storage = localStorage.getItem(id);
  if (storage){
    return JSON.parse(storage);
  }
  else {
    return{};
  }
}