let botao = document.getElementById('botao');
let texto = document.getElementById('texto');
let contador = 0;

botao.addEventListener("click", function() {
  contador++;
  texto.textContent = contador;
});
