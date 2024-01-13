function changeShare() {
  $("#share").toggle();
  $(".wxInfo").hide();
  $(".qqPage").hide();
}

var d1 = document.getElementById("d1");
var all = document.getElementById("all");

all.onmousemove = function (e) {
  d1.style.top = e.clientY + "px";
  d1.style.left = e.clientX + "px";
  // d1.style.transform="translate(-50%,-50%)";
  if (e.target.dataset.mouse == "big") {
    d1.style.background = `#b55829 url(${e.target.dataset.img}) no-repeat center`;
    d1.style.backgroundSize = `${e.target.width}px ${e.target.height}px`;
    d1.className = "div div1";
    d1.style["animation-name"] = "ball2";
    d1.style["animation-duration"] = "0.3s";
    d1.style.backgroundPositionX = e.offsetX * -1 + "px";
    d1.style.backgroundPositionY = e.offsetY * -1 + "px";
  }
  if (e.target.dataset.mouse == "small") {
    //console.log(636666666)
    d1.style.background = "";
    d1.className = "div div4";
    d1.style["animation-name"] = "ball4";
    d1.style["animation-duration"] = "0.3s";
  }
  if (e.target.dataset.mouse == "mid") {
    //console.log(99999999)
    d1.style.background = "";
    d1.className = "div div3";
    // d1.style['animation-name']='ball3';
    // d1.style['animation-duration'] = '0.3s';
  }
  if (e.target.dataset.mouse == "none") {
    d1.className = "div";
  }
};
all.onclick = function (e) {
  //console.log(e)

  if (e.target.dataset.type != "share") {
    $("#share").hide();
    $(".wxInfo").hide();
    $(".qqPage").hide();
  }
  d1.style["animation-name"] = "changeOp";
  d1.style["animation-duration"] = "0.2s";
  setTimeout(changeB, 200);
};
function changeB() {
  d1.style["animation-name"] = "";
  d1.style["animation-duration"] = "";
}
function changeImg(e) {
  //console.log(e,77777777777)
  //console.log(e.target.src,888888888);
}
var allPath = "";
if (window.location.pathname != "/") {
  allPath = `${window.location.origin}${window.location.pathname}`;
} else {
  allPath = `${window.location.origin}/`;
}
function copyLink(str) {
  var input = document.createElement("input");
  if (str) {
    input.setAttribute("value", str);
  } else {
    input.setAttribute("value", window.location.href);
  }
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  $(".messageInfo").show();
  setTimeout(() => {
    $(".messageInfo").hide();
  }, 1000);
}
var html = document.querySelector("html");
var platform;
window.onresize = function () {
  if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    platform = "mobile";
  } else {
    platform = "pc";
    var zoomR = window.innerWidth / 1920;
    html.style.fontSize = zoomR * 16 + "px";
  }
};
$(document).ready(() => {
  if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    platform = "mobile";
    //setInterval(changeImgKv,90);
    $("#kvMobile").prop("src", "./kv/m.mp4");
  } else {
    platform = "pc";
    var zoomR = window.innerWidth / 1920;
    html.style.fontSize = zoomR * 16 + "px";
    $("#kvPc").prop("src", "./kv/p.mp4");
    try {
      showCharacter();
    } catch (e) {
      //console.log(e)
    }
    //角色页面缓存
  }
});
document.addEventListener(
  "WeixinJSBridgeReady",
  function () {
    var video = document.getElementById("kvMobile");
    //video.play();
  },
  false
);
document.addEventListener(
  "touchstart",
  function () {
    var video = document.getElementById("kvMobile");
    //video.play();
  },
  false
);
var ikv = 0;
var strkv;
var kvTimer = true;
function changeImgKv() {
  if (!kvTimer) {
    return;
  }
  if (ikv < 324) {
    ikv++;
    if (ikv < 10) {
      strkv = `00${ikv}`;
    } else if (ikv < 100) {
      strkv = `0${ikv}`;
    } else {
      strkv = ikv;
    }
  } else {
    ikv = 0;
    strkv = `000`;
  }
  $("#kvMobile").prop("src", `./m/m_00${strkv}.jpg`);
  //requestAnimationFrame(changeImg)
}
function showKv(youtubeVideoId) {
  muteMusic(1); //关闭背景音乐
  $(".pvVideo").show(); //显示视频
  $(".pvVideo").html(
    `
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/${youtubeVideoId}" title="【Reverse: 1999】Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
  );
}
function showKvM(youtubeVideoId) {
  muteMusic(1); //关闭背景音乐
  $(".pvVideo").show(); //显示视频
  $(".pvVideo").html(
    `
        <iframe width="375px" height="210px" src="https://www.youtube.com/embed/${youtubeVideoId}" title="【Reverse: 1999】Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
  );
}
function hideKv() {
  if (event.target.nodeName != "IFRAME") {
    $(".pvVideo").hide();
    $(".pvVideo").empty();
  }
  // bgmAutoPlay && playBgm();
}
function loadIcon() {
  console.log(55555);
  let apple = [
    "./img/icon/twc.png",
    "./img/icon/fbc.png",
    "./img/icon/yuc.png",
    "./img/icon/gac.png",
    "./img/icon/gbc.png",
    "./img/icon/ttc.png",
  ];
  apple.map((v) => {
    let img = new Image();
    img.src = v;
    console.log(img);
  });
}
loadIcon();
