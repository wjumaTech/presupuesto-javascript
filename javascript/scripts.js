// Variables y selectores

let formulario = document.querySelector('.agregar-gasto');
let gastoListado = document.getElementById('gastos');
let btnClose = document.querySelector('.btn-close');



//Evnetos
emisorDeEventoIniciar();

function emisorDeEventoIniciar() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  formulario.addEventListener('submit', agregarGasto);
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

  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  imprimirALerta({ mensaje, tipo }) {

    const div = document.createElement('DIV');
    div.classList.add('alert', 'alert-dismissible');
    div.setAttribute('role', 'alert');

    if (tipo === 'error') {
      div.classList.add('alert-danger');
    }

    div.innerHTML = `
      <strong>Hubo un error!</strong> todos los campos son obligatorios
      <button type="button" class="btn-close" aria-label="Close"></button> 
    `;

    document.querySelector('.agregar-gasto').prepend(div)
  }

  removeAlert(element) {
    element.remove()
  }

}


// Variables Globales
let presupuesto;
const ui = new UI();

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = parseFloat(prompt('Ingresa un presupuesto', '1000'));
  presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ? window.location.reload() : null;
  const presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e) {
  e.preventDefault();
  const nombre = document.querySelector("[name = nombre]").value;
  const cantidad = document.querySelector("#cantidad").value;
  if (nombre === '' || cantidad === '') {
    const error = {
      mensaje: 'Los campos son obligatorios',
      tipo: 'error'
    }
    ui.imprimirALerta(error);
  }
}