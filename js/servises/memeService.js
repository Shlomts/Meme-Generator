'use strict'

let gMeme = {
    selectedImgId: 10,
    selectedLineIdx: 0,
    lines: [
        {
            txt: "I sometimes eat Falafel",
            lineWidth: 1,
            size: 40,
            color: "white",
            lineColor: "black",
        },
    ],
}

function getMeme() {
    return gMeme    
}

function setMemeLines(str) {
    gMeme.lines[0].txt = str
}

function setMemeImg(img) {
    gMeme.selectedImgId = img.id
}

function setFillColor(clr) {
    gMeme.lines[0].color = clr || "white"
}

function setLineColor(clr) {
    gMeme.lines[0].lineColor = clr || "black"
}

function changeLineSize(size) {
    gMeme.lines[0].size += size
}

function creatLine() {
    gMeme.lines.push({
        txt: "I sometimes eat Humus",
        lineWidth: 1,
        size: 40,
        color: "white",
        lineColor: "black",
    },)
}

// function selectLine() {
    
// }