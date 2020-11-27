let show = document.getElementById("show")
let hide = document.getElementById("hide")
show.addEventListener("click", () => {
    if (hide.style.display != "none") {
        hide.style.display = "none"
        show.innerText = "Show More"
    }
    else {
        hide.style.display = "block"
        show.innerText = "Show less"

    }
})