let campoTexto = document.getElementById("texto");

campoTexto.addEventListener("keydown", function(event) {
  let tecla = event.key;
  
  document.getElementById("mensagem").innerText = "Tecla pressionada: " + tecla;
});