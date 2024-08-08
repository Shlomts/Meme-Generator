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
    gMeme.selectedLineIdx = 0
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
    const line =  gMeme.lines[gMeme.selectedLineIdx]
    line.size += size

    const sizeRatio = line.size * 0.65
    const txtSize = line.txt.length * sizeRatio
    line.startPos = {x: line.x-txtSize/2, y: line.y-35}
    line.endPos = {x: line.x+txtSize/2, y: line.y+35}
    line.txtLength = txtSize
}

function creatLine(txt, x, y) {
    const sizeRatio = 40 * 0.65
    const txtSize = txt.length * sizeRatio
    gMeme.lines.push({
        x,
        y,
        startPos: {x: x-txtSize/2,y: y-35},
        endPos: {x: x+txtSize/2,y: y+35},
        txt: txt.toUpperCase(),
        txtLength: txtSize,
        lineWidth: 1,
        size: 40,
        color: "#ffffff",
        lineColor: "#000000",
    },)
}


function getClickedLine({x,y}) {
    return gMeme.lines.find(line => x >= line.startPos.x && x <= line.endPos.x
            && y >= line.startPos.y && y <= line.endPos.y
    )
}

function toggleLine() {
    if(!gMeme.lines[1]) return
    gMeme.selectedLineIdx = Math.abs(gMeme.selectedLineIdx-1)
}

function selectLine(line) {
    const idx = gMeme.lines.findIndex(currLine => currLine === line)
    gMeme.selectedLineIdx = idx
}