"use strict";
var gSavedImgs;

const init = () => {
  renderGallery();
  gCurrLang = getCurrLang();
  doTrans();
  //renderKeywords();
};

const renderGallery = () => {
  document.querySelector(".gallery-container").innerHTML = getImgs()
    .map(
      (img) =>
        `<img src="${img.url}" id="img-${img.id}" onclick="onRenderCanvas(${img.id})">`
    )
    .join("");
  document.querySelector(".nav-gallery").classList.add("clicked");
};

// const renderKeywords = () => {
//     document.querySelector('');
// };

const dispStyl = (query, attr) => {
  document.querySelector(query).style.display = attr;
};

const onFetchMemes = () => {
  renderMemes();
  document.querySelector(".canvas-container").style.display = "none";
  document.querySelector(".gallery-container").style.display = "none";
  document.querySelector(".about-container").style.display = "none";
  document.querySelector(".meme-container").style.display = "grid";
  document.querySelector(".searchbox-container").style.display = "none";

  document.querySelector(".nav-memes").classList.add("clicked");
  document.querySelector(".nav-about").classList.remove("clicked");
  document.querySelector(".nav-gallery").classList.remove("clicked");
};
const renderMemes = () => {
  document.querySelector(".meme-container").innerHTML = getSavedMemes().map(
    (savedImg, idx) => `<img src="${savedImg}" id="meme-${idx + 1}" )">`
  );
};

const onFetchAbout = () => {
  document.querySelector(".canvas-container").style.display = "none";
  document.querySelector(".gallery-container").style.display = "none";
  document.querySelector(".about-container").style.display = "flex";
  document.querySelector(".meme-container").style.display = "none";
  document.querySelector(".searchbox-container").style.display = "none";

  document.querySelector(".nav-memes").classList.remove("clicked");
  document.querySelector(".nav-about").classList.add("clicked");
  document.querySelector(".nav-gallery").classList.remove("clicked");
};

const onSetLang = (lang) => {
  setLang(lang);
  if (lang === "he") document.body.classList.add("rtl");
  else document.body.classList.remove("rtl");
};
