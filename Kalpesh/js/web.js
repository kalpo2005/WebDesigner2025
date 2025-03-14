// this is a slider javaScript

const btn = document.querySelector(".btn-menu");
const canvas = document.querySelector(".offcanvas");
const cancel = document.querySelector(".cancel");

btn.addEventListener("click", showmenu);


function showmenu() {
    canvas.classList.remove("d-none");
    canvas.classList.add("canvas-add");
}

console.log(canvas.classname);