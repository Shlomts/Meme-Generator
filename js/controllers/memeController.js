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


function renderMeme() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
        drawText(meme.lines[0].txt, gElCanvas.width / 2, 50)
        if(!meme.lines[1]) return
        drawText(meme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height-50)
    }
}

function drawText(text, x, y) {
    const meme = getMeme()
    gCtx.beginPath()
    gCtx.lineWidth = meme.lines[0].lineWidth
    gCtx.strokeStyle = meme.lines[0].lineColor
    gCtx.fillStyle = meme.lines[0].color
    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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
