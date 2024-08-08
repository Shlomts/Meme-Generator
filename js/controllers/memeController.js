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
}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
        for (let i = 0; i < meme.lines.length; i++) {
            drawText(meme.lines[i])
        }
    }
}

function drawText(line) {
    if (!line) return
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
}

function onDownload(elLink) {
    const meme = gElCanvas.toDataURL("image/jpeg")
    elLink.href = meme
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
    // setCircleDrag(true)

    //* Save the pos we start from
    // gStartPos = pos
    // document.body.style.cursor = 'grabbing'
}


// function onMove(ev) {
//     const { isDrag } = getCircle()
//     if (!isDrag) return

//     const pos = getEvPos(ev)
//     //* Calc the delta, the diff we moved
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveCircle(dx, dy)
//     //* Save the last pos so we will remember where we`ve been and move accordingly
//     gStartPos = pos
//     //* The canvas (along with the circle) is rendered again after every move
//     renderCanvas()
// }


// function onUp() {
//     setCircleDrag(false)
//     document.body.style.cursor = 'grab'
// }


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
    //* Listen for resize ev
    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
}
