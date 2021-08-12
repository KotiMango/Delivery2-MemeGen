'use strict';

const init = () => {
  renderGallery();
  //renderKeywords();
};

const renderGallery = () => {
  document.querySelector('.gallery-container').innerHTML = getImgs()
    .map(
      (img) =>
        `<img src="${img.url}" id="img-${img.id}" onclick="onRenderCanvas(${img.id})">`
    )
    .join('');
  document.querySelector('.nav-gallery').classList.add('clicked');
};

// const renderKeywords = () => {
//     document.querySelector('');
// };

const dispStyl = (query, attr) => {
  document.querySelector(query).style.display = attr;
};
