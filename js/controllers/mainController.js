"use strict"

function onInit() {
    showGallery()
}

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
    elEditor.style.display = "flex"
}

function showRandom() {
    const gallery = getGallery()
    const id = getRandomIntInclusive(0, gallery.length-1)
    setMemeImg(gallery[id])
    renderMeme()
    openEditor()
}

function clearDom() {
    document.querySelector(`.gallery-container`).style.display = "none"
    document.querySelector(`.saved-container`).style.display = "none"
    document.querySelector(`.editor-container`).style.display = "none"
}
