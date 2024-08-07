'use strict'

let gElCanvas
let gCtx



function onUserSet(ev) {
    ev.preventDefault()

	const { target: elForm } = ev
	const formData = new FormData(elForm)
	const userOps = Object.fromEntries(formData)
    console.log(userOps)
    setMemeLines(userOps)
    setFontColors(userOps)
    // renderMeme()

    // setColors(user.bckClr, user.txtClr)

}

function renderMeme() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
    }
}

function drawText(text, x, y) {
    const meme = getMeme()
    gCtx.beginPath()
    gCtx.lineWidth = meme.lines[0].size
    gCtx.strokeStyle = meme.lines[0].lineColor
    gCtx.fillStyle = meme.lines[0].color
    gCtx.font = "40px Arial"
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onDraw(ev) {
    const { offsetX, offsetY } = ev
    const meme = getMeme()
    drawText(meme.lines[0].txt, offsetX, offsetY)
}

function onDownload(elLink) {
    const meme = gElCanvas.toDataURL('image/jpeg')
    elLink.href = meme
}