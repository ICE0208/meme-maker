// Canvas Setup
const width = 800;
const height = 800;
const canvas = document.querySelector("canvas");
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
// 메모리에 실제 크기 설정 (픽셀 밀도를 고려하여 크기 조정)
const dpr = window.devicePixelRatio;
canvas.width = width * dpr;
canvas.height = height * dpr;
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dbff",
  "#7d5fff",
];

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
