const object = document.querySelector('.object1');
const object2 = document.getElementById('object2');

/* MOVE MOUSE CURSOR IN THE SCREEN WHEN PURPLE CIRCLE IS MOVED */

document.addEventListener('mousemove', (e) => {
    object1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

/* CLICK WITH DRAG MOUSE CURSOR IN THE SCREEN WHEN GREEN CIRCLE IS MOVED */

let isDragging = false;

document.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        object2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});