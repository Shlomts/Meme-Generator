'use strict'

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

function getMeme() {
    return gMeme    
}

function setMemeLines(obj) {
    if(!obj.txt) return
    gMeme.lines[0].txt = obj.txt
    // gMeme.lines[0] = {...obj}
}

function setMemeImg(img) {
    gMeme.selectedImgId = img.id
}

function selectLine() {
    
}