// ----------------------scrollbar----------------------
let scroll = document.getElementById("scroll");
let bar = document.getElementById("bar");
let mask = document.getElementById("mask");
let macnum = document.getElementById("clientsnum");
let peonum = document.getElementById("people");
let barleft = 180;
let clock = document.getElementById("clock");
let num = document.getElementById("number");
let btnStart = document.getElementById("btnStart");
let h = 0;
let m = 0;
let strh = "";
let strm = "";
let index = 0;
let checkBtn = true;

// let timeindex=180;
// h = Math.floor(timeindex / 60) + 3;
// m = timeindex % 60 ;
// if (h < 10) strh = "0" + h;
// else if (h >= 24) strh = "0" + (h - 24);
// else strh = "" + h;

// if (m < 10) strm = "0" + m;
// else strm = "" + m;
// clock.innerText = strh + ":" + strm;
// // console.log(scroll.offsetWidth)
// // console.log(bar.offsetWidth)
// mask.style.width = barleft + "px";
// bar.style.left = barleft + "px";
// show();
// clockinit()
// console.log(scroll.offsetWidth)
// console.log(bar.offsetWidth)
bar.onmousedown = function (event) {
  if (window.preid == "") {
    alert("Please select a day", "ok");
    return;
  }
  pause();
  event = event || window.event;
  let leftval = event.clientX - this.offsetLeft;
  let that = this;
  document.onmousemove = function (event) {
    event = event || window.event;
    barleft = event.clientX - leftval;
    if (barleft < 0) barleft = 0;
    else if (barleft > scroll.offsetWidth - bar.offsetWidth)
      barleft = scroll.offsetWidth - bar.offsetWidth;

    // console.log('scroll.offsetWidth',scroll.offsetWidth)
    // console.log('bar.offsetWidth',bar.offsetWidth)
    // console.log('window.event.clientX',window.event.clientX)
    // console.log('event.clientX',event.clientX)
    // console.log('barleft',barleft)
    // mask.style.width = 70*(barleft)/1440 + "vw";
    // bar.style.left = 70*(barleft)/1440 + "vw";
    // 1440*barleft/scroll.offsetWidth
    // scroll.offsetWidth*barleft/1440
    // movedis=Math.floor(barleft*(scroll.offsetWidth - bar.offsetWidth)/1440)
    timeindex=Math.floor(1440*barleft/(scroll.offsetWidth - bar.offsetWidth))
    // console.log('movedis',movedis)
    // console.log('cal',scroll.offsetWidth*barleft/1440)
    mask.style.width = barleft + "px";
    that.style.left = barleft + "px";
    h = Math.floor(timeindex / 60) + 3;
    m = timeindex % 60 ;
    if (h < 10) strh = "0" + h;
    else if (h >= 24) strh = "0" + (h - 24);
    else strh = "" + h;

    if (m < 10) strm = "0" + m;
    else strm = "" + m;
    // clock.innerText = "Time: "+strh + ":" + strm;
    clock.innerText = strh + ":" + strm;
    // clock.innerText =strm;
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    barleft=timeindex;
    show();
  };
};
document.onmouseup = function () {
  // macnum.innerText = "Number of devices:"+eval("mac" + window.preid)[barleft];
  document.onmousemove = null;
};

window.preid = "11";
show();
// macnum.innerText ="Number of devices:"+ eval("mac" + window.preid)[barleft];

//----------------------updateLayer------------------------------------------
// let clock = document.getElementById("clock");
// let num = document.getElementById("number");
// let btnStart = document.getElementById("btnStart");
// let h = 0;
// let m = 0;
// let strh = "";
// let strm = "";
// let index = 0;
// let checkBtn = true;

function startdisplay() {
  if (window.preid == "") {
    alert("Please select a day", "ok");
    return;
  }
  if (checkBtn) {
    checkBtn = false;
    index = barleft+1000;
    // console.log(barleft)
    // console.log(index);
    heatlayer.setData(eval("room" + window.preid + index));
    // macnum.innerText ="Number of devices:"+ eval("mac" + window.preid)[barleft];
    
    index++;
    window.timer = setInterval(() => {
      heatlayer.setData(eval("room" + window.preid + index));
      mask.style.width = 70*(index - 1000)/1440 + "vw";
      bar.style.left = 70*(index - 1000)/1440 + "vw";
      h = Math.floor((index - 820) / 60);
      m = (index - 820) % 60;
      if (h < 10) strh = "0" + h;
      else if (h >= 24) strh = "0" + (h - 24);
      else strh = "" + h;

      if (m < 10) strm = "0" + m;
      else strm = "" + m;
      // clock.innerText = "Time: "+strh + ":" + strm;
      clock.innerText = strh + ":" + strm;
      // clock.innerText =strm;
      // macnum.innerText ="Number of devices:"+ eval("mac" + window.preid)[index - 1000];
      index++;
      if (index > 2440) clearInterval(window.timer);
    }, 41);
  }
}
function pause() {
  clearInterval(window.timer);
  barleft = index - 1000;
  checkBtn = true;
}

//------------------------function show()-------------------
function show() {
  heatlayer.setData(eval("room" + window.preid + (barleft + 1000)));
}

function zoomin(){
  scene.setZoom(scene.getZoom()+0.1);
}

function zoomout(){
  scene.setZoom(scene.getZoom()-0.1);
}
// function clockinit(){
//   let timeindex=180;
//   let h = Math.floor(timeindex / 60) + 3;
//   let m = timeindex % 60 ;
//   if (h < 10) strh = "0" + h;
//   else if (h >= 24) strh = "0" + (h - 24);
//   else strh = "" + h;

//   if (m < 10) strm = "0" + m;
//   else strm = "" + m;
//   clock.innerText = strh + ":" + strm;
//   barleft=(scroll.offsetWidth - bar.offsetWidth)*timeindex/1440
//   mask.style.width = barleft + "px";
//   bar.style.left = barleft + "px";
//   show();
// }