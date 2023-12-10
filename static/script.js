let currentImage = 0

function changeInfo() {
    let infoName = document.getElementById("info-name")
    infoName.innerText = images[currentImage].slice(0, -4)

    let infoCounter = document.getElementById("info-counter")
    infoCounter.innerText = `${currentImage + 1}/${images.length}`
}

function changeDescription() {
    let yep = descriptions[images[currentImage].slice(0, -4)]

    let description = document.getElementById("description-0")
    description.innerText = yep[0]

    description = document.getElementById("description-1")
    description.innerText = yep[1]
}

function changeImage() {
    let image = document.getElementById("image")
    image.setAttribute("src", `/static/images/${images[currentImage]}`)

    changeInfo()
    changeDescription()
}

function nextImage() {
    if (currentImage >= images.length - 1) {
        return null
    }

    currentImage++;
    changeImage();
}

function previousImage() {
    if (currentImage <= 0) {
        return null
    }

    currentImage--;
    changeImage();
}
