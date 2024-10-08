"use strict"

function onInit() {
    clearDom()
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
    document.querySelector(`#color`).value = `#ffffff`
}

function showRandom() {
    const gallery = getGallery()
    const id = getRandomIntInclusive(0, gallery.length-1)
    setMemeImg(gallery[id])
    initEditor()
    openEditor()
}

function clearDom() {
    document.querySelector(`.gallery-container`).style.display = "none"
    document.querySelector(`.saved-container`).style.display = "none"
    document.querySelector(`.editor-container`).style.display = "none"
}
