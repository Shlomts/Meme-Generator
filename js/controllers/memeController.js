"use strict"

let gElCanvas
let gCtx

function onTextChange(ev) {
    setMemeLines(ev.target.value)
    renderMeme()
}

function onSetFillColor(ev) {
    setFillColor(ev.target.value)
    renderMeme()
}

function onSetLineColor(ev) {
    setLineColor(ev.target.value)
    renderMeme()
}

function addLine() {
    creatLine()
    renderMeme()
}

function switchLine() {
    selectLine()
    renderMeme()
    loadSelectedData()
}

function loadSelectedData() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]
    document.querySelector(`#txt`).value = line.txt
    document.querySelector(`#color`).value = line.color
    document.querySelector(`#lineColor`).value = line.lineColor
}


function renderMeme() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
        drawText(meme.lines[0], gElCanvas.width / 2, 50)
        if(!meme.lines[1]) return
        drawText(meme.lines[1], gElCanvas.width / 2, gElCanvas.height-50)
    }
}

function drawText(line, x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = line.lineWidth
    gCtx.strokeStyle = line.lineColor
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onDownload(elLink) {
    const meme = gElCanvas.toDataURL("image/jpeg")
    elLink.href = meme
}

function increaseFont() {
    changeLineSize(5)
    renderMeme()
}

function decreaseFont() {
    changeLineSize(-5)
    renderMeme()
}
