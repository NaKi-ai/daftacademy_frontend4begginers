/*MENU*/


const menuButton = document.querySelector('#hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');

    const bar1 = document.querySelector('.page-menu-button__item1');
    bar1.classList.toggle('page-menu-button__item1--clicked');
    const bar2 = document.querySelector('.page-menu-button__item2');
    bar2.classList.toggle('page-menu-button__item2--clicked');
    const bar3 = document.querySelector('.page-menu-button__item3');
    bar3.classList.toggle('page-menu-button__item3--clicked');
});

/*GALLERY*/

const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('gallery__image')) {
        e.target.classList.add('gallery__image--filter-animation');
    }

});



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
