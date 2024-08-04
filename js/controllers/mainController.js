"use strict"

function getGallery() {
    clearDom()
    const elGallery = document.querySelector(`.gallery-container`)
    elGallery.style.display = "block"
}

function getSaved() {
    clearDom()
    const elSaved = document.querySelector(`.saved-container`)
    elSaved.style.display = "block"
}

function getRandom() {
    clearDom()
    const elEditor = document.querySelector(`.editor-container`)
    elEditor.style.display = "block"
    renderMeme()
}

function clearDom() {
    document.querySelector(`.gallery-container`).style.display = "none"
    document.querySelector(`.saved-container`).style.display = "none"
    document.querySelector(`.editor-container`).style.display = "none"
}
