
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#81D4FA"; // Muda a cor ao curtir
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#B3E5FC"; // Volta a cor original
        }
    }
});
