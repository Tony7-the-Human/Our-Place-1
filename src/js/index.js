import "./import/modules";






let colorItems = document.querySelectorAll('.design-color__item-circle');
let active = colorItems[0]; // moo[0], чтобы при первом клике не было ошибки.

for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].addEventListener('click', function() {
        if (active == this) {
            // Если active ссылается на тот же объект, что и this (на кликнутую кнопку)
            this.classList.toggle('active');
        } else {
            active.classList.remove('active');
            this.classList.add('active');

            active = this;
        }
    });
}


let colorItemsMin = document.querySelectorAll('.good-color__item-circle');
let activeMin = colorItemsMin[0]; // moo[0], чтобы при первом клике не было ошибки.

for (let i = 0; i < colorItemsMin.length; i++) {
    colorItemsMin[i].addEventListener('click', function() {
        if (activeMin == this) {
            // Если active ссылается на тот же объект, что и this (на кликнутую кнопку)
            this.classList.toggle('active');
        } else {
            activeMin.classList.remove('active');
            this.classList.add('active');

            activeMin = this;
        }
    });
}


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const burgerBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')


burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active-nav')
})

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('active-nav')) {
            navMenu.classList.remove('active-nav')
        }
    })
})