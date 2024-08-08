"use strict"

function renderGallery() {
    const gallery = getGallery()
    const elGallery = document.querySelector(".memes-gallery-grid")
    let strHtml = ""

    strHtml += gallery.map((img) => `<img src="${img.url}" 
    onclick="onImgSelect(${img.id})">`).join("")

    elGallery.innerHTML = strHtml
}

function onImgSelect(id) {
    const img = getImgById(id)
    setMemeImg(img)
    initEditor()
    openEditor()
}