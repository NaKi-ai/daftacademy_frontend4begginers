/*MENU*/

var navIsOn = false;

function f1() {
    let nav = document.querySelector('.page-navigation');
    if (navIsOn === false) {
        nav.classList.remove('displayNone');
        nav.classList.add('displayBlock');
        navIsOn = true;
    } else {
        nav.classList.remove('displayBlock');
        nav.classList.add('displayNone');
        navIsOn = false;
    }
};
let burger = document.querySelector('.page-menu-button');
burger.addEventListener('click', f1);

/*CONCERT'S BUTTONS*/


let buttons = document.querySelectorAll('.ticket');
for (let b of buttons) {
    let p = document.createElement('p');
    p.innerHTML = 'HAVE FUN!';
    b.addEventListener('click', function () {
        b.replaceWith(p);
    })
}

/*SUBMIT*/

let submit = document.querySelector('.button--contact');
submit.addEventListener('click', function (e) {
    let form = document.querySelector('.contact__form');
    let data = new FormData(form);
    let obj = Object.fromEntries(data);
    console.log(obj);
    e.preventDefault();
})
