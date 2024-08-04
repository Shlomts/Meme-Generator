"use strict"

let gElCanvas
let gCtx

function onInit() {

}

function renderMeme() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    const MEME = getMeme()
    const elImg = new Image()
    elImg.src = `img/${MEME.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
    }
}

function drawText(text, x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = "brown"
    gCtx.fillStyle = "black"
    gCtx.font = "40px Arial"
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onDraw(ev) {
    const { offsetX, offsetY } = ev
    drawText("Hello", offsetX, offsetY)
}
