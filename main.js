/*identificando botões com possíveis bombas*/

var campo = document.querySelectorAll('.campo button');

campo.forEach(function (atual) {
    atual.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        atual.blur();

        if (atual.classList.contains('borda')) {
            atual.classList.remove('borda');

        } else {
            atual.classList.add('borda');
        }

    });
});

/*distribuindo as bombas*/

function distribuirBombas() {
    for (var i = 1; i <= 10; i++) {
        var sorteado = parseInt(Math.random() * 116);
        campo[sorteado].innerText = 'B';

    }
}

/*revelar minas*/

campo.forEach(function (atual) {
    atual.addEventListener('click', function () { 
        atual.blur();

        if (atual.innerText == 'B') {
            atual.style.borderColor = 'red';
            atual.style.color = 'red';
        }
       
        
    });
});

distribuirBombas();
