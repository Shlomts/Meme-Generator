'use strict'

let gMeme = {
    selectedImgId: 10,
    selectedLineIdx: 0,
    lines: [],
}

function getMeme() {
    return gMeme    
}

function setMemeLines(str) {
    gMeme.lines[gMeme.selectedLineIdx].txt = str
}

function clearLines() {
    gMeme.lines = []
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

function creatLine(txt, x, y) {
    gMeme.lines.push({
        x,
        y,
        txt: txt.toUpperCase(),
        lineWidth: 1,
        size: 40,
        color: "#ffffff",
        lineColor: "#000000",
    },)
}

function selectLine() {
    if(!gMeme.lines[1]) return
    gMeme.selectedLineIdx = Math.abs(gMeme.selectedLineIdx-1)
}