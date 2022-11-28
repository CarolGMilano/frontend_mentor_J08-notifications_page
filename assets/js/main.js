let not = document.querySelectorAll('.corpo__feed');
let circle = document.querySelectorAll('.red__circle');
let contagem = document.querySelector('.info__num');
let btn = document.querySelector('.cabecalho__btn');
let cont = 3;

btn.addEventListener('click', function () {
    not.forEach((num, pos) => {
        num.classList.remove('naoLido');
        circle[pos].classList.remove('inline-block');
        circle[pos].classList.add('none');
        cont=0;
        contagem.innerHTML = `${cont}`;
    })
})


not.forEach((num, pos) => {
    num.addEventListener('click', function () {
        if (num.classList.contains('naoLido')) {
            num.classList.remove('naoLido');
            circle[pos].classList.remove('inline-block');
            circle[pos].classList.add('none');
            cont--;
            contagem.innerHTML = `${cont}`;
        } else {
            num.classList.add('naoLido');
            circle[pos].classList.add('inline-block');
            circle[pos].classList.remove('none');
            cont++;
            contagem.innerHTML = `${cont}`;
        }
    })  
});
