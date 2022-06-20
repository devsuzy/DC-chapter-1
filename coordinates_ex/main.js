let inner = document.querySelector(".inner");
let log = document.querySelector(".log")

function setCoords(e, type){
    let idX = type + "X"
    let idY = type + "Y"

    document.getElementById(idX).innerText = e[idX];
    document.getElementById(idY).innerText = e[idY];
}

function update(e){
    setCoords (e, "page")
}

inner.addEventListener("mousemove", update, false);