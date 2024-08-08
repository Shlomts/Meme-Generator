"use strict"

let gElCanvas
let gCtx

function initEditor() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    clearLines()
    creatLine(`i love laffa`, gElCanvas.width / 2, 50)
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        debugger
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
        for (let i = 0; i < meme.lines.length; i++) {
            drawText(meme.lines[i])
        }
    }
}

function drawText(line) {
    if (!line) return
    const sizeRatio = line.size * 0.65
    const txtSize = line.txt.length * sizeRatio
    const meme = getMeme()
    gCtx.beginPath()
    gCtx.lineWidth = line.lineWidth
    gCtx.strokeStyle = line.lineColor
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
    if (meme.lines[meme.selectedLineIdx] === line)
        drawRect(line.x - txtSize / 2, txtSize, line.y - 35)
}

function drawRect(xStart, xEnd, y) {
    gCtx.beginPath()
    gCtx.strokeStyle = "purple"
    gCtx.lineWidth = 3
    gCtx.strokeRect(xStart, y, xEnd, 60)
}

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
    creatLine(`add text`, gElCanvas.width / 2, gElCanvas.height - 50)
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

function onDownload(elLink) {
    const meme = gElCanvas.toDataURL("image/jpeg")
    elLink.href = meme
}

function changeFontSize(size) {
    changeLineSize(size)
    renderMeme()
}
