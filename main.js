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

/*function distribuirBombas() {
    for (var i = 1; i <= 10; i++) {
        var sorteado = parseInt(Math.random() * 116);
        if (campo[sorteado].innerText == 'B' ) {
           sorteado = parseInt(Math.random() * 116);
        }

        campo[sorteado].innerText = 'B';
    }
}*/

function distribuirBombas() {
    for (var i = 1; i <= 10; i++) {
        var sorteado = parseInt(Math.random() * 116);
        if (campo[sorteado].innerText == 'B') {
            i--;
        }

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
        } else {
            atual.style.borderColor = 'blue';
            atual.style.color = 'black';
        }

    });
});

//função ver se tem bomba
function fiscalBomba(posCasaOndeVouColocarUmNumero) {
    if (campo[posCasaOndeVouColocarUmNumero].innerText != 'B' && (campo[posCasaOndeVouColocarUmNumero].innerText) != ('')) {
        campo[posCasaOndeVouColocarUmNumero].innerText = parseInt(campo[posCasaOndeVouColocarUmNumero].innerText) + 1;
    } else if (campo[posCasaOndeVouColocarUmNumero].innerText == ('')) {
        campo[posCasaOndeVouColocarUmNumero].innerText = parseInt(1);
    }

}

/*distribuindo os números*/
function distribuirNumeros(b) {

    /*casa à esquerda*/
    if (b % 13 != 0) {
        fiscalBomba(b - 1);

    }

    //casa à direita
    if ((b - 12) % 13 != 0) {
        fiscalBomba(b + 1);
    }

    //casa acima à direita
    if (b > 12 && (b - 12) % 13 != 0) {
        fiscalBomba(b - 12);

    }

    //casas abaixo à esquerda
    if (b % 13 != 0 && b < 105) {
        fiscalBomba(b + 12);

    }

    //casa acima à esquerda
    if (b % 13 != 0 && b > 12) {
        fiscalBomba(b - 14);
    }

    //casa imediatamente acima
    if (b > 12) {
        fiscalBomba(b - 13);
    }

    //casas imediatamente abaixo
    if (b < 104) {
        fiscalBomba(b + 13);
    }

    //casa abaixo à direita 
    if ((b - 12) % 13 != 0 && b < 105) {
        fiscalBomba(b + 14);
    }

}

function numeroDica() {
    for (var b = 0; b < 117; b++) {
        if (campo[b].innerText == 'B') {
            distribuirNumeros(b);
        }
    }
}

distribuirBombas();
numeroDica();
