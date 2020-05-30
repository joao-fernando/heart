const text = document.getElementById('texto-inicial');

function muda_texto_inicial() {
    text.innerText = "Eu te amo!!";
}

function muda_texto_final() {
    text.innerText = "Feliz dia dos namorados!!"
}

setTimeout(muda_texto_inicial, 4000);

setTimeout(muda_texto_final, 12000);
