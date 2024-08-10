"use strict"

let gElCanvas
let gCtx

function initEditor() {
    gElCanvas = document.querySelector("canvas")
    gCtx = gElCanvas.getContext("2d")
    clearLines()
    creatLine(`i love laffa`, gElCanvas.width / 2, 50)
    addListeners()
    renderMeme()
    loadSelectedData()
}

function renderMeme(onDownload = false) {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    if(!onDownload) {
        elImg.onload = () => {
            gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
            for (let i = 0; i < meme.lines.length; i++) {
                drawText(meme.lines[i])
            }
        }
    } else {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
        for (let i = 0; i < meme.lines.length; i++) {
            drawText(meme.lines[i], true)
        }
    }
}

function drawText(line, noRect = false) {
    if (!line) return
    const meme = getMeme()
    gCtx.beginPath()
    gCtx.lineWidth = line.lineWidth
    gCtx.strokeStyle = line.lineColor
    gCtx.fillStyle = line.color
    gCtx.font = `bold ${line.size}px Poppins`
    gCtx.textAlign = "center"
    gCtx.textBaseline = "middle"
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
    if (meme.lines[meme.selectedLineIdx] === line && !noRect)
        drawRect(line.startPos.x, line.txtLength, line.startPos.y)
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
    document.querySelector(".fill-color").style.color = ev.target.value
    setFillColor(ev.target.value)
    renderMeme()
}

function onSetLineColor(ev) {
    document.querySelector(".line-color").style.color = ev.target.value
    setLineColor(ev.target.value)
    renderMeme()
}

function onDeleteLine() {
    const meme = getMeme()
    deleteLine(meme.lines[meme.selectedLineIdx])
    renderMeme()
}

function addLine() {
    creatLine(`add text`, gElCanvas.width / 2, gElCanvas.height - 50)
    renderMeme()
}

function switchLine() {
    toggleLine()
    renderMeme()
    loadSelectedData()
}

function loadSelectedData() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]
    document.querySelector(`#txt`).value = line.txt
    document.querySelector(`#color`).value = line.color
    document.querySelector(`#lineColor`).value = line.lineColor
    document.querySelector(".line-color").style.color = line.lineColor
    document.querySelector(".fill-color").style.color = line.color
}

function onDownload(elLink) {
    renderMeme(true)
    const meme = gElCanvas.toDataURL("image/jpeg")
    elLink.href = meme
}

function onShare(elLink) {
    shareImg(gElCanvas)
}

function changeFontSize(size) {
    changeLineSize(size)
    renderMeme()
}

function onDown(ev) {
    const pos = getEvPos(ev)
    const lineClicked = getClickedLine(pos)
    console.log(lineClicked)
    if(!lineClicked) return
    selectLine(lineClicked)
    renderMeme()

}

function onFillColorPicker() {
    document.querySelector('#color').click()
}


function onLineColorPicker() {
    document.querySelector('#lineColor').click()
}


function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (['touchstart', 'touchmove', 'touchend'].includes(ev.type)) {
        //* Prevent triggering the mouse screen dragging event
        ev.preventDefault()
        //* Gets the first touch point
        ev = ev.changedTouches[0]
        //* Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
}
