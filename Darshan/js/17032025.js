const list = document.querySelectorAll(".nav-links");

const name = ["Dhruv", "Kalpesh", "Anil", "Darshan"];

let k = 0;
let d = 0;

// for (let i = 0; i < list.length; i++) {
//     list[i].innerHTML = name[k];
//     k++;
// }


setTimeout(() => {
    list[d].style.color = 'red';
    list[d].innerHTML = name[k++];
    d++;
}, 4000);

setTimeout(() => {
    list[d].style.color = 'yellow';
    list[d].innerHTML = name[k++];
    d++;
}, 6000);

setTimeout(() => {
    list[d].style.color = 'black';
    list[d].innerHTML = name[k++];
    d++;
}, 8000);

setTimeout(() => {
    list[d].style.color ="white";
    list[d].innerHTML = name[k++];
    d++;
}, 10000);


// setTimeout(() => {
//     list[0].style.color = 'red';
// }, 2000);

// setTimeout(() => {
//     list[1].style.color = 'yellow';
// }, 4000);

// list[0].innerHTML="dhulo";
// list[1].innerHTML="suvichhar";
// list[2].innerHTML="darnawali";
// list[3].innerHTML="gaurav";

// let a = (k) => {
//     list[k].style.color = 'red';
// }

// setTimeout(Worker,time);

// work = function dirrect
// time milisecond 