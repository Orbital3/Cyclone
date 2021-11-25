import '/style.scss';

let dotYellow = document.querySelector('.dot.yellow');
let dots = document.querySelectorAll('.dot');


for(let i = 0; i < dots.length; i++) {
    setTimeout(function timer() {
        dots[i].classList.add('yellow');
        setTimeout(() => {
            dots[i].classList.remove('yellow');
        }, 500)
    }, i * 500)
}


