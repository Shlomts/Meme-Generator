"use strict"

function showGallery() {
    clearDom()
    const elGallery = document.querySelector(`.gallery-container`)
    renderGallery()
    elGallery.style.display = "block"
}

function showSaved() {
    clearDom()
    const elSaved = document.querySelector(`.saved-container`)
    elSaved.style.display = "block"
}

function openEditor() {
    clearDom()
    const elEditor = document.querySelector(`.editor-container`)
    elEditor.style.display = "block"
}

function showRandom() {
    openEditor()
    renderMeme()
}

function clearDom() {
    document.querySelector(`.gallery-container`).style.display = "none"
    document.querySelector(`.saved-container`).style.display = "none"
    document.querySelector(`.editor-container`).style.display = "none"
}
