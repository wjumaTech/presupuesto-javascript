// Variables y selectores

let formulario = document.querySelector('.agregar-gasto');
let gastoListado = document.getElementById('gastos');



//Evnetos
emisorDeEventoIniciar();

function emisorDeEventoIniciar() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}



// Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
    this.gastos = [];
  }
}

class UI {

}



// Variables Globales
let presupuesto;
const ui = new UI();

// Funciones
function preguntarPresupuesto() {

  const presupuestoUsuario = parseFloat(prompt('Ingresa un presupuesto', '1000'));

  presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ? window.location.reload() : null;

  const presupuesto = new Presupuesto(presupuestoUsuario);

  console.log(presupuesto)

}