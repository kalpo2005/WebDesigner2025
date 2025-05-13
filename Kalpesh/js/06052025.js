let kal = document.createElement("div");

let name = prompt("Enter your name :","kalpesh bavaliya");

kal.innerHTML = `<h1>Your name is ${name}</h1>`;  // Use ${name} to interpolate the variable

let bav = document.querySelector(".demo");

bav.appendChild(kal);
