let _rotate = document.getElementById("rotate")
let _scroll = document.getElementById("scroll")

document.addEventListener("orientationchange", function () {
    if (window.matchMedia("(orientation: landscape)").matches) {
        _rotate.style.display = "flex"
    } else {
        _rotate.style.display = "none"
    }
})

function onLoad() {

}

function redirect() {
    window.location.href += `main/width=${window.innerWidth}/height=${window.innerHeight}`
}
