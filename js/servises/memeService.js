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
    gMeme.lines[gMeme.selectedLineIdx].txt = str
}

function setMemeImg(img) {
    gMeme.selectedImgId = img.id
}

function setFillColor(clr) {
    gMeme.lines[gMeme.selectedLineIdx].color = clr || "white"
}

function setLineColor(clr) {
    gMeme.lines[gMeme.selectedLineIdx].lineColor = clr || "black"
}

function changeLineSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size
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

function selectLine() {
    if(!gMeme.lines[1]) return
    gMeme.selectedLineIdx = Math.abs(gMeme.selectedLineIdx-1)
}