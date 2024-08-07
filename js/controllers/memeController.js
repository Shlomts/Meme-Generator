"use strict"

let gElCanvas
let gCtx



function onUserSet(ev) {
    ev.preventDefault()

	const { target: elForm } = ev
	const formData = new FormData(elForm)
	const userOps = Object.fromEntries(formData)
    setMemeLines(userOps)
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
    const meme = getMeme()

    drawText(meme.lines[0].txt, offsetX, offsetY)
}

function onDownload(elLink) {
    const meme = gElCanvas.toDataURL('image/jpeg')
    elLink.href = meme
}