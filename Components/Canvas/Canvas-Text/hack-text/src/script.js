// let $canvas, ctx, width, height, frame;
// const init = function () {
//   document.querySelector('body').appendChild(document.createElement('canvas'));
//   $canvas = document.querySelector('canvas');
//   ctx = $canvas.getContext('2d');
//   width = $canvas.width = window.innerWidth;
//   height = $canvas.height = window.innerHeight;
//   $canvas.style.background = 'black';
// }
// const render = function (t) {
//   t /= 2500;
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//   ctx.fillRect(0, 0, width, height);
//   ctx.font = '15px sans-serif';
//   for (let i = 0; i < height; i += 15) {
//     for (let j = 0; j < width; i += 15) {
//       let k = i * width + j;
//       j % Math.floor(Math.sin(t) * 51) === 1 ? (ctx.fillStyle = 'white') : (ctx.fillStyle = 'green');
//       ctx.fillText(String(t * k).charAt(0), j, Math.tan(i * j - Math.sin(k) + t) * i);
//     }
//   }
//   frame = requestAnimationFrame(render);
// }
// window.addEventListener('load', function () {
//   init();
//   render();
//   this.window.addEventListener('resize', function () {
//     this.cancelAnimationFrame(frame);
//     width = $canvas.width = window.innerWidth;
//     height = $canvas.height = window.innerHeight;
//     render();
//   });
// });
var w, m, c, C, W, H, r, i, j, k;
var a = function () {
  document
    .getElementsByTagName("body")[0]
    .appendChild(document.createElement("canvas"));
  w = window;
  m = Math;
  c = document.getElementsByTagName("canvas")[0];
  C = c.getContext("2d");
  W = c.width = w.innerWidth;
  H = c.height = w.innerHeight;
  c.style.background = "black";
};
var f = function (t) {
  t = t / 2500;
  C.fillStyle = "rgba(0, 0, 0, 0.1)";
  C.fillRect(0, 0, W, H);
  C.font = "15px sans-serif";
  for (i = 0; i < H; i += 15) {
    for (j = 0; j < W; j += 15) {
      k = i * W + j;
      j % m.floor(m.sin(t) * 51) === 1
        ? (C.fillStyle = "white")
        : (C.fillStyle = "green");
      C.fillText(String(t * k).charAt(0), j, m.tan(i * j - m.sin(k) + t) * i);
    }
  }
  r = requestAnimationFrame(f);
};
window.onload = function () {
  a();
  f();
  w.onresize = function () {
    cancelAnimationFrame(r);
    W = c.width = w.innerWidth;
    H = c.height = w.innerHeight;
    f();
  };
};
