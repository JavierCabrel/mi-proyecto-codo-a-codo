////////////Detener el boton enviar//////
const bEnviar = document.getElementById("btnEnviar")

function falso(e){
  e.preventDefault();
}

bEnviar.onclick = falso;