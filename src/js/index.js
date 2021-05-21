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