function menu() {
    let menu = document.querySelector('nav');

    if (menu.classList.contains('abrir')) {
        menu.classList.remove('abrir');
        menu.classList.add('fechar');
    } else {
        menu.classList.add('abrir');
        menu.classList.remove('fechar');
    }
};

function scrollUP() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sumirBotao() {

    let scrollLateral = document.querySelector('.scrollButton');

    if (window.scrollY == 0){
        scrollLateral.style.display = 'none';
    } else {
        scrollLateral.style.display = 'flex';
    }
}

window.addEventListener('scroll', sumirBotao);