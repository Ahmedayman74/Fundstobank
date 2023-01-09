let menuBars = document.querySelector(".menu")
let nav = document.querySelector(".header .nav-bar ul")
let xBtn = document.querySelector(".fa-solid.fa-xmark")

menuBars.onclick = function() {
    nav.classList.add("show")
}

xBtn.onclick = function() {
    nav.classList.remove("show")
}

