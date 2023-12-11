var _rotate
var _scroll
var _scroll_2
var _done
var _pizda

function onLoad() {
    _rotate = document.getElementById("rotate")
    _scroll = document.getElementById("scroll")
    _scroll_2 = document.getElementById("scroll-2")
    _done = document.getElementById("done")
    _pizda = document.getElementById("pizda")

    setInterval(check, 250)
}

function check() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        _rotate.style.display = "none"
        _scroll.style.display = "flex"
        _scroll_2.style.display = "flex"
        _done.style.display = "flex"
    } else {
        _rotate.style.display = "flex"
        _scroll.style.display = "none"
        _scroll_2.style.display = "none"
        _done.style.display = "none"
    }
}

function redirect() {
    window.location.href += `main/width=${window.innerWidth}/height=${window.innerHeight}`
}
