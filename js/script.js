let picture = document.querySelectorAll('.projects__item');
let title = document.querySelectorAll('.projects__title');
let year = document.querySelectorAll('.projects__year');
let description = document.querySelectorAll('.projects__description');

for(let i = 0; i < picture.length; i++) {
    picture[i].addEventListener('mouseover', () => {
        title[i].style.display = 'none';
        year[i].style.display = 'none';
        description[i].style.display = 'none';
    });
    picture[i].addEventListener('mouseout', () => {
        title[i].style.display = 'block';
        year[i].style.display = 'inline-block';
        description[i].style.display = 'block';
    });
}

function ShowBurgerMenu() {
    let menu = document.querySelector(".burger");
    menu.style.display = 'block';
}

function HideBurgerMenu() {
    let burger = document.querySelector(".fa");
    let menu = document.querySelector(".burger");
    if(window.screen.width < 745) { 
        menu.style.display = 'none';
    }
}

