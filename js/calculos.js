const bResumen = document.getElementById("bResumen");
const bBorrar = document.getElementById("bBorrar");
const ptotal = document.getElementById("totalpagar");


function resumen(e) {
    e.preventDefault();
    let categorias;
    let cantidad;    
    const precio = 200;
    const cantidad_minima = 0;
cantidad = parseInt(document.getElementById("inputCantidad").value);
categorias = parseInt(document.getElementById("selectCategoria").value);

  if (cantidad <= cantidad_minima){
    alert(`${cantidad} no es una cantidad válida`);
  } else if (categorias >= cantidad_minima){
    const precioTotal = precio * cantidad
    const resultado = (precioTotal - (precio * categorias * cantidad / 100));
    ptotal.innerHTML = `Total a Pagar: $ ${resultado}`;
    
  } else {
    const precioTotal = precio * cantidad
    const resultado = precioTotal - (precio * categorias * cantidad / 100) 
    ptotal.innerHTML = `Total a Pagar: $ ${resultado}`;
  }
}
function borra(e) {
  e.preventDefault();
  ptotal.innerHTML = `Total a Pagar: $`
}

bResumen.onclick = resumen;
bBorrar.onclick = borra;
