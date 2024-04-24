let botoes = documnet.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", )
});

function guardarNota() {
   let nota = evento.target.innerText

   localStorage.setItem("nota", nota)
}
