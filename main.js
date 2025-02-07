function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    // elemento.localname ele vai comparar se o atributo do elemento enviado a funçao é um audio pelos atributos
    elemento.play();
  } else {
    alert("Tipo de elemento invalido ou seletor invalido");
  }
}
//Selecioanndo todos os elementos que tem a classe TECLA, seleciona a lista de teclas e atribui na constante
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < 9; i++) {
  //Aqui ele pega cada indice da lista de teclas ex: tecla tecla_push
  const tecla = listaDeTeclas[i];

  // O classList separa um array de informaçoes, no caso ele separa o indice 1 de tecla que o id é tecla tecla_push
  // em [tecla, tecla_push] ai pegamos o indice 1
  const instrumento = tecla.classList[1]; //então o instrumento vai ficar [tecla_push]

  //template string aqui ele esta adicionando o `#som_`tecla_push, que resulta no id dos audios
  const idAudio = `#som_${instrumento}`;

  //Declarar uma function anonima, que só existe quando clicar o botão, por isso ela não tem nome
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  // aqui o onkeydown "observa" o pressionamento do botão , o .code vai selecionar o codigo do evento,
  // no caso o codigo da barra de esapaço ou enter e atribuir a classe "ativa"
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
