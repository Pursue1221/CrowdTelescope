//-------------------------ul-------------------------------
window.preid = "";
let itemlists = document.getElementById("choice").getElementsByTagName("li");
for (let i = 0; i < itemlists.length; i++) {
  itemlists[i].onclick = function () {
    let pre = document.getElementById(window.preid);
    if (window.preid != "") pre.className = "labelclass1";
    // if(window.childid!=""){
    //     document.getElementById(window.childid).className="labelclass1";
    // }
    window.preid = itemlists[i].id;
    let li = document.getElementById(window.preid);
    li.className = "liactive";
    show();
    // draw1(eval('mac' + window.preid));
    // draw2(eval('peo' + window.preid));
    macnum.innerText = eval("mac" + window.preid)[barleft];
    // peonum.innerText="People(yellow):"+eval("peo"+window.preid)[barleft];
  };
}

// ----------------------scrollbar----------------------
let scroll = document.getElementById("scroll");
let bar = document.getElementById("bar");
let mask = document.getElementById("mask");
let macnum = document.getElementById("clientsnum");
let peonum = document.getElementById("people");
let barleft = 0;
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
    mask.style.width = barleft + "px";
    that.style.left = barleft + "px";
    h = Math.floor(barleft / 60) + 3;
    m = barleft % 60;
    if (h < 10) strh = "0" + h;
    else if (h >= 24) strh = "0" + (h - 24);
    else strh = "" + h;

    if (m < 10) strm = "0" + m;
    else strm = "" + m;
    clock.innerText = strh + ":" + strm;
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    show();
    // drawcur(barleft);
    // macnum.innerText="Clients:"+eval("mac"+window.preid)[]
  };
};
document.onmouseup = function () {
  // drawcur(barleft);
  macnum.innerText = eval("mac" + window.preid)[barleft];
  // peonum.innerText="People(yellow):"+eval("peo"+window.preid)[barleft];
  document.onmousemove = null;
};
// function add() {
//     pause();
//     if (barleft < 1449) {
//         barleft++;
//         mask.style.width = barleft + 'px';
//         bar.style.left = barleft + 'px';
//     }
//     else {
//         mask.style.width = 1449 + 'px';
//         bar.style.left = 1449 + 'px';
//     }
//     h = Math.floor(barleft / 60) + 3;
//     m = barleft % 60;
//     if (h < 10)
//         strh = "0" + h;
//     else if (h >= 24)
//         strh = "0" + (h - 24);
//     else
//         strh = "" + h;

//     if (m < 10)
//         strm = "0" + m;
//     else
//         strm = "" + m;
//     clock.innerText = strh + ":" + strm;
//     show();
// }

// function sub() {
//     pause();
//     if (barleft > 0) {
//         barleft--;
//         mask.style.width = barleft + 'px';
//         bar.style.left = barleft + 'px';
//     }
//     else {
//         mask.style.width = 0 + 'px';
//         bar.style.left = 0 + 'px';
//     }
//     h = Math.floor(barleft / 60) + 3;
//     m = barleft % 60;
//     if (h < 10)
//         strh = "0" + h;
//     else if (h >= 24)
//         strh = "0" + (h - 24);
//     else
//         strh = "" + h;

//     if (m < 10)
//         strm = "0" + m;
//     else
//         strm = "" + m;
//     clock.innerText = strh + ":" + strm;
//     show();
// }

//----------------------updateLayer------------------------------------------
let clock = document.getElementById("clock");
let num = document.getElementById("number");
let btnStart = document.getElementById("btnStart");
let h = 0;
let m = 0;
let strh = "";
let strm = "";
let index = 0;
let checkBtn = true;

function startdisplay() {
  if (window.preid == "") {
    alert("Please select a day", "ok");
    return;
  }
  if (checkBtn) {
    checkBtn = false;
    index = barleft + 1000;
    // pointLayer.setData(eval("room" +window.preid + index));
    // heatlayer1.setData(eval("room" + window.preid +index));
    heatlayer.setData(eval("room" + window.preid + index));
    macnum.innerText = eval("mac" + window.preid)[barleft];
    // peonum.innerText="People(yellow):"+eval("peo"+window.preid)[barleft];
    // drawcur(barleft);
    index++;
    window.timer = setInterval(() => {
      // pointLayer.setData(eval("room" + window.preid +index));
      // heatlayer1.setData(eval("room" + window.preid +index));
      heatlayer.setData(eval("room" + window.preid + index));
      mask.style.width = index - 1000 + "px";
      bar.style.left = index - 1000 + "px";
      h = Math.floor((index - 820) / 60);
      m = (index - 820) % 60;
      if (h < 10) strh = "0" + h;
      else if (h >= 24) strh = "0" + (h - 24);
      else strh = "" + h;

      if (m < 10) strm = "0" + m;
      else strm = "" + m;
      clock.innerText = strh + ":" + strm;
      macnum.innerText = eval("mac" + window.preid)[index - 1000];
      // peonum.innerText="People(yellow):"+eval("peo"+window.preid)[index-1000];
      // drawcur(index - 1000);
      index++;
      if (index >= 2440) clearInterval(window.timer);
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
  // pointLayer.setData(eval("time" +window.preid + (barleft+1000)));
  // heatlayer1.setData(eval("room" + window.preid +(barleft+1000)));
  heatlayer.setData(eval("room" + window.preid + (barleft + 1000)));
}

//----------------------function draw()--draw line graph-----
// function draw1(numlist) {
//     let canvas = document.getElementById('line2');
//     let ctx = canvas.getContext('2d');
//     const WIDTH = canvas.width;
//     const HEIGHT = canvas.height;
//     canvas.height=HEIGHT;
//     let padding = 20;
//     let paddingLeft = 60;
//     let paddingBottom = 60;

//     ctx.strokeStyle = 'green';
//     ctx.lineWidth = 3;
//     let axisYStart = {
//         x: paddingLeft,
//         y: padding
//     }

//     let origin = {
//         x: paddingLeft,
//         y: HEIGHT - paddingBottom
//     }

//     let axisXStart = {
//         x: WIDTH - padding,
//         y: HEIGHT - paddingBottom
//     }
//     for (let i = 0; i < 1440; i++) {
//         let pointX = origin.x + i * 0.5;
//         let pointY = origin.y - numlist[i] / 40;
//         if (i == 0) {
//             ctx.moveTo(pointX, pointY);
//         }
//         else {
//             ctx.lineTo(pointX, pointY);
//         }
//     }
//     ctx.stroke();
// }
// function draw2(numlist) {
//     let canvas = document.getElementById('line1');
//     let ctx = canvas.getContext('2d');
//     const WIDTH = canvas.width;
//     const HEIGHT = canvas.height;
//     canvas.height=HEIGHT;
//     let padding = 20;
//     let paddingLeft = 60;
//     let paddingBottom = 60;

//     ctx.strokeStyle = 'yellow';
//     ctx.lineWidth = 3;
//     let axisYStart = {
//         x: paddingLeft,
//         y: padding
//     }

//     let origin = {
//         x: paddingLeft,
//         y: HEIGHT - paddingBottom
//     }

//     let axisXStart = {
//         x: WIDTH - padding,
//         y: HEIGHT - paddingBottom
//     }
//     for (let i = 0; i < 1440; i++) {
//         let pointX = origin.x + i * 0.5;
//         let pointY = origin.y - numlist[i] / 40;
//         if (i == 0) {
//             ctx.moveTo(pointX, pointY);
//         }
//         else {
//             ctx.lineTo(pointX, pointY);
//         }
//     }
//     ctx.stroke();
// }

// function drawcord() {
//     let canvas = document.getElementById('cord');
//     let ctx = canvas.getContext('2d');
//     const WIDTH = canvas.width;
//     const HEIGHT = canvas.height;
//     let padding = 20;
//     let paddingLeft = 60;
//     let paddingBottom = 30;

//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 3;
//     let axisYStart = {
//         x: paddingLeft,
//         y: padding
//     }

//     let origin = {
//         x: paddingLeft,
//         y: HEIGHT - paddingBottom
//     }

//     let axisXStart = {
//         x: WIDTH - padding,
//         y: HEIGHT - paddingBottom
//     }

//     ctx.beginPath();
//     ctx.moveTo(axisYStart.x, axisYStart.y);
//     ctx.lineTo(origin.x, origin.y);
//     ctx.lineTo(axisXStart.x, axisXStart.y);
//     ctx.stroke();//coordinate

//     ctx.beginPath();
//     ctx.moveTo(axisYStart.x - 5, axisYStart.y + 10);
//     ctx.lineTo(axisYStart.x, axisYStart.y);
//     ctx.lineTo(axisYStart.x + 5, axisYStart.y + 10);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(axisXStart.x - 10, axisXStart.y - 5);
//     ctx.lineTo(axisXStart.x, axisXStart.y);
//     ctx.lineTo(axisXStart.x - 10, axisXStart.y + 5);
//     ctx.stroke();

//     // console.log(axisYStart);
//     // console.log(axisXStart);
//     // console.log(origin);
//     // let clock={
//     //     x:paddingLeft,
//     //     y:HEIGHT-paddingBottom
//     // }
// }
// function drawcur(n) {
//     let canvas = document.getElementById('cur');
//     let ctx = canvas.getContext('2d');
//     const WIDTH = canvas.width;
//     const HEIGHT = canvas.height;
//     canvas.height = HEIGHT;
//     let padding = 20;
//     let paddingLeft = 60;
//     let paddingBottom = 40;
//     // ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 2;
//     let axisYStart = {
//         x: paddingLeft,
//         y: padding
//     }

//     let origin = {
//         x: paddingLeft,
//         y: HEIGHT - paddingBottom
//     }

//     let axisXStart = {
//         x: WIDTH - padding,
//         y: HEIGHT - paddingBottom
//     }
//     let pointX = origin.x + n * 0.5;
//     ctx.moveTo(pointX, 20);
//     ctx.lineTo(pointX, origin.y);
//     ctx.stroke();
// }

// drawcord();
