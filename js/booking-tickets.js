let overlay = document.querySelector('.booking-tickets-overlay');
let open = document.querySelector('.buy-tickets__buy-now');
let close = document.querySelector('.booking-tickets__close');
let form = document.querySelector('.booking-tickets');

close.addEventListener('click', () => {
    overlay.style.display = 'none';
});

open.addEventListener('click', () => {
    overlay.style.display = 'flex';
    move();
});

function move() {
    form.style.left = 0;
    // form.style.opacity = 0;
    let moveStep = 0;
    let opacity = 0;
    let timer = setInterval(() => {
        form.style.left = moveStep + 'px';
        form.style.opacity = opacity;
        moveStep += 20;
        opacity += 0.5;
        console.log(form.style.left);
        if(moveStep >= 240) {
            clearInterval(timer);
            return;
        }
    }, 50);
}