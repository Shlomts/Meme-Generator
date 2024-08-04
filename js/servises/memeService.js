"use strict"

// let gImgs = [{ id: 1, url: "img/1.jpg", keywords: ["funny", "cat"] }]

let gMeme = {
    selectedImgId: 10,
    selectedLineIdx: 0,
    lines: [
        {
            txt: "I sometimes eat Falafel",
            size: 20,
            color: "red",
        },
    ],
}

// let gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
    return gMeme    
}

function setMeme(obj) {
    if(!obj.txt) return
    gMeme.lines[0].txt = obj.txt
    // gMeme.lines[0] = {...obj}

}