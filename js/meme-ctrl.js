"use strict";
var gTxtHiglight = true;
var gCanvas;
var gCtx;

//This function gets called from onRenderCanvas when an image is clicked
const renderCanvas = () => {
  gCanvas = document.querySelector("#meme-canvas");
  gCtx = gCanvas.getContext("2d");
  memePlopImg();
  memeRenderTxt();
  if (gTxtHiglight) drawLineHighlighter();
  if (!gTxtHiglight) gTxtHiglight = true;
};

const memePlopImg = () => {
  const memeImgId = getMemeImgId();
  const elImg = document.querySelector(`#img-${memeImgId}`);
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
};

//FYI meme lines is an array of objects ergo, each index is an object
const memeRenderTxt = () => {
  const memeLines = getMemeLines();
  if (!memeLines || !memeLines.length) return;
  memeLines.forEach((memeLine) => memePlopTxt(memeLine));
  document.querySelector(".ctrl-txt-input").value =
    memeLines[getMemeObj().selectedLineIdx].txt;
};

const memePlopTxt = (memeLine) => {
  gCtx.setLineDash([]);
  gCtx.lineWidth = "2";
  gCtx.textAlign = memeLine.align;
  gCtx.strokeStyle = memeLine.borderColor;
  gCtx.font = `${memeLine.size}px ${memeLine.font} `;
  gCtx.fillStyle = memeLine.fillColor;
  gCtx.strokeText(memeLine.txt, memeLine.posX, memeLine.posY);
  gCtx.fillText(memeLine.txt, memeLine.posX, memeLine.posY);
};

const drawStickers = () => {
  const appliedStickers = getMemeObj().appliedStickers;
  if (!appliedStickers) return;
  appliedStickers.forEach((sticker) => {
    gCtx.drawImage(
      document.querySelector(`#sticker-${sticker.id}`),
      sticker.posX,
      sticker.posY,
      sticker.width,
      sticker.height
    );
  });
};

const drawLineHighlighter = () => {
  const meme = getMemeObj();
  if (gTxtHiglight) {
    if (!meme.lines.length) return;
    gCtx.beginPath();
    gCtx.rect(getCurrLinePos("x") - 160, getCurrLinePos("y") - 40, 320, 50);
    gCtx.setLineDash([4, 4]);
    gCtx.strokeStyle = "black";
    gCtx.stroke();
  }
};
const memeRenderStickers = () => {
  document.querySelector(".stickers").innerHTML = getStickers()
    .map(
      (sticker) =>
        `<img src="${sticker.url}" class="sticker" id="sticker-${sticker.id}" onclick="onStampSticker(${sticker.id})">`
    )
    .join("");
  setMemeStickersPage();
};

const setMemeStickersPage = () => {
  getSlicedStickersChunk().forEach(
    (sticker) =>
      (document.querySelector(`#sticker-${sticker.id}`).style.display =
        "inline-block")
  );
};

const onChangePage = (deviation) => {
  changePage(deviation);
  memeRenderStickers();
};

const onRenderCanvas = (identifier) => {
  setMemeImg(identifier);
  renderCanvas();
  memeRenderStickers();
  dispStyl(".canvas-container", "flex");
  dispStyl(".gallery-container", "none");
  dispStyl(".searchbox-container", "none");
};

const onChangeTxt = (txtVal) => {
  setMemeCurrLine(txtVal, "txt");
  renderCanvas();
};

const onSwitchLines = () => {
  setMemeLineIndexShift();
};

const onAddLine = () => {
  setMemeNewLine(document.querySelector(".ctrl-txt-input").value);
  renderCanvas();
};

const onDelLine = () => {
  setMemeDelLine();
  renderCanvas();
};

const onChangeSize = (deviation) => {
  setMemeCurrLine(getMemeCurrLine("size") + deviation, "size");
  renderCanvas();
};

const onChangeAlign = (aligment) => {
  setMemeCurrLine(aligment, "align");
  renderCanvas();
};

const onChangeFont = (font) => {
  setMemeCurrLine(font, "font");
  renderCanvas();
};

const onChangeOutlineColor = (colorVal) => {
  setMemeCurrLine(colorVal, "borderColor");
  renderCanvas();
};

const onChangeFillColor = (colorVal) => {
  setMemeCurrLine(colorVal, "fillColor");
  renderCanvas();
};

const onSaveToStorage = () => {
  gTxtHiglight = false;
  renderCanvas();
  saveImg(gCanvas.toDataURL());
  window.location.reload();
};

const onStampSticker = (stickerId) => {
  setStickerById(stickerId);
  drawStickers();
  renderCanvas();
};

const onDownloadCanvas = (elem) => {
  gTxtHiglight = false;
  renderCanvas();
  const data = gCanvas.toDataURL();
  elem.href = data;
  elem.download = "Img";
};

const uploadImg = (elem, ev) => {
  ev.preventDefault();
};
