// let value aleays changes 

// const value change not change 
// var


// const a=20;
// console.log(a);

// var b=45;
// console.log(b);
// b=400;
// console.log(b);


let check = true;
let test = true;

const drop = document.querySelector(".offdrop");
const dropul = document.querySelector(".offSubUl");
const offcanvas = document.querySelector(".offcanvas");
const menuBtn = document.querySelector(".btn-menu");

drop.addEventListener("click", subdropdown);
menuBtn.addEventListener("click", submenu);

function subdropdown() {
    if (check) {
        dropul.style.display = "block";
        check = false;
    }
    else {
        dropul.style.display = "none";
        check = true;

    }
}

function submenu() {

    offcanvas.style.display = "block";
}
