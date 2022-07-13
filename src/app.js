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
