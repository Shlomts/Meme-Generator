'use strict'

function getGallery() {
    document.querySelector(`div`).style.display="none"
    const elGallery = document.querySelector(`.gallery-container`)
    elGallery.style.display="block"
}

function getSaved() {
    document.querySelector(`div`).style.display="none"
    const elSaved = document.querySelector(`.saved-container`)
    elSaved.style.display="block"
}
