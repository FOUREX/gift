let _rotate = document.getElementById("rotate")
let _scroll = document.getElementById("scroll")
let _done = document.getElementById("done")

function check() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        _done.style.display = "flex"
    } else {
        _done.style.display = "none"
    }
}

function redirect() {
    window.location.href += `main/width=${window.innerWidth}/height=${window.innerHeight}`
}
