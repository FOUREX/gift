let currentImage = 0

function fitObject() {
    let object = document.querySelector('.main');
    let aspectRatio = object.width / object.height;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let viewportAspectRatio = viewportWidth / viewportHeight;

    if (aspectRatio > viewportAspectRatio) {
        object.style.width = viewportWidth + 'px';
        object.style.height = (viewportWidth / aspectRatio) + 'px';
    } else {
        object.style.height = viewportHeight + 'px';
        object.style.width = (viewportHeight * aspectRatio) + 'px';
    }
}

function onLoad() {
    changeImage()

    let element = document.getElementsByClassName("main")[0]
    element.style.width = `${mainWidth}px`
    element.style.height = `${mainHeight}px`
}

function changeInfo() {
    let infoName = document.getElementById("info-name")
    infoName.innerText = images[currentImage].slice(0, -5)

    let infoCounter = document.getElementById("info-counter")
    infoCounter.innerText = `${currentImage + 1}/${images.length}`
}

function changeDescription() {
    let yep = descriptions[images[currentImage].slice(0, -5)]

    let description = document.getElementById("description-0")
    description.innerText = yep[0]

    description = document.getElementById("description-1")
    description.innerText = yep[1]
}

function changeImage() {
    let image = document.getElementById("image")
    image.setAttribute("src", `/static/images/webp/${images[currentImage]}`)

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
