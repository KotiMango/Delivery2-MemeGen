'use strict';
var gSavedImgs = [];
const saveToStorage = (key, value) => {
  var item = JSON.stringify(value);
  localStorage.setItem(key, item);
};

const loadFromStorage = (key) => {
  var item = localStorage.getItem(key);
  var value = JSON.parse(item);
  if (value) return value;
  else return [];
};

const saveImg = (data) => {
  gSavedImgs = loadFromStorage('memeImg');
  gSavedImgs.push(data);
  saveToStorage('memeImg', gSavedImgs);
};

const getSavedMemes = () => loadFromStorage('memeImg');

const setCurrLang = (lang) => saveToStorage('currLang', lang);
const getCurrLang = () => loadFromStorage('currLang');

const stgeGetClikedImg = (idx) => getSavedMemes()[idx];
