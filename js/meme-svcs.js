'use strict';
var gCurrPage = 1;
var gDesiredStickerCnt = 3;
var gCurrPosY = 50;
var gImgs = [
  {
    id: 1,
    url: './imgs/1.jpg',
    keywords: ['politic'],
  },
  {
    id: 2,
    url: './imgs/2.jpg',
    keywords: ['epicwin', 'cats'],
  },
  {
    id: 3,
    url: './imgs/3.jpg',
    keywords: ['epicwin', 'cats'],
  },
  {
    id: 4,
    url: './imgs/4.jpg',
    keywords: ['epicwin', 'kid'],
  },
  {
    id: 5,
    url: './imgs/5.jpg',
    keywords: ['epicwin', 'baby', 'funny', 'kid'],
  },
  {
    id: 6,
    url: './imgs/6.jpg',
    keywords: ['movie', 'tv', 'brain'],
  },
  {
    id: 7,
    url: './imgs/7.jpg',
    keywords: ['epicwin', 'baby', 'funny', 'kid'],
  },
  {
    id: 8,
    url: './imgs/8.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 9,
    url: './imgs/9.jpg',
    keywords: ['epicwin', 'kid'],
  },
  {
    id: 10,
    url: './imgs/10.jpg',
    keywords: ['politic', 'obama', 'funny'],
  },
  {
    id: 11,
    url: './imgs/11.jpg',
    keywords: ['sport'],
  },
  {
    id: 12,
    url: './imgs/12.jpg',
    keywords: ['honesty', 'justice'],
  },
  {
    id: 13,
    url: './imgs/13.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 14,
    url: './imgs/14.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 15,
    url: './imgs/15.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 16,
    url: './imgs/16.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 17,
    url: './imgs/17.jpg',
    keywords: ['politic', 'putin', 'funny'],
  },
  {
    id: 18,
    url: './imgs/18.jpg',
    keywords: ['movie', 'sad'],
  },
];
var gStickers = [
  {
    id: 1,
    url: './STICKERS/1.png',
  },
  {
    id: 2,
    url: './STICKERS/2.png',
  },
  {
    id: 3,
    url: './STICKERS/3.png',
  },
  {
    id: 4,
    url: './STICKERS/4.png',
  },
  {
    id: 5,
    url: './STICKERS/5.png',
  },
  {
    id: 6,
    url: './STICKERS/6.png',
  },
  {
    id: 7,
    url: './STICKERS/7.png',
  },
  {
    id: 8,
    url: './STICKERS/8.png',
  },
  {
    id: 9,
    url: './STICKERS/9.png',
  },
  {
    id: 10,
    url: './STICKERS/10.png',
  },
  {
    id: 11,
    url: './STICKERS/11.png',
  },
  {
    id: 12,
    url: './STICKERS/12.png',
  },
  {
    id: 13,
    url: './STICKERS/13.png',
  },
  {
    id: 14,
    url: './STICKERS/14.png',
  },
  {
    id: 15,
    url: './STICKERS/15.png',
  },
  {
    id: 16,
    url: './STICKERS/16.png',
  },
  {
    id: 17,
    url: './STICKERS/17.png',
  },
  {
    id: 18,
    url: './STICKERS/18.png',
  },
  {
    id: 19,
    url: './STICKERS/18.png',
  },
  {
    id: 20,
    url: './STICKERS/18.png',
  },
];

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  selectedStickerIdx: 0,
  lines: [
    {
      txt: 'I never eat Falafel',
      font: 'impact',
      size: 40,
      align: 'center',
      borderColor: 'black',
      fillColor: 'white',
      posX: 250,
      posY: 50,
    },
    {
      txt: 'I consume it virtually',
      font: 'impact',
      size: 40,
      align: 'center',
      borderColor: 'black',
      fillColor: 'white',
      posX: 250,
      posY: 430,
    },
  ],
  appliedStickers: [],
};

const getImgs = () => gImgs;
const getKeyWords = () => gImgs.map((img) => img.keywords);
const getMemeImgId = () => gMeme.selectedImgId;
const getMemeObj = () => gMeme;
const getMemeLines = () => gMeme.lines;
const getStickers = () => gStickers;
const getSlicedStickersChunk = () => {
  const initialChunk = (gCurrPage - 1) * gDesiredStickerCnt;
  return gStickers.slice(
    initialChunk,
    initialChunk + gDesiredStickerCnt
  );
};
const getMemeCurrLine = (attr) =>
  gMeme.lines[gMeme.selectedLineIdx][attr];

const setMemeImg = (id) => (gMeme.selectedImgId = id);
const setMemeCurrLine = (val, attr) =>
  (gMeme.lines[gMeme.selectedLineIdx][attr] = val);

const setMemeLineIndexShift = () => {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0;
    return;
  } else {
    gMeme.selectedLineIdx++;
  }
};

const setMemeNewLine = (textInputVal) => {
  gMeme.lines.push({
    txt: textInputVal,
    font: 'impact',
    size: 40,
    align: 'center',
    borderColor: 'black',
    fillColor: 'white',
    posX: 250,
    posY: (gCurrPosY += 50),
  });
};

const setMemeDelLine = () => {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);
};

const changePage = (deviation) => {
  gCurrPage += deviation;
  const lastPage = Math.ceil(gStickers.length / gDesiredStickerCnt);
  if (gCurrPage > lastPage) {
    gCurrPage = 1;
  } else if (gCurrPage < lastPage) {
    gCurrPage = lastPage;
  }
};
