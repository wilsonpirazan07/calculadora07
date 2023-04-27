var ca = {
  teclas: document.querySelectorAll("#calcular ul li"),
  operaciones: document.querySelector("#operaciones"),
  resultado: false,
  accion: null,
  digito: null,
  cantisignos: 0,
  cantidecimal: false,
};

var metodos = {
  inicio: function() {
    for(var i = 0; i < ca.teclas.length; i++) {
      ca.teclas[i].addEventListener("click", metodos.oprimirteclas);
    }
  },

  oprimirteclas: function(evento) {
    ca.accion = evento.target.getAttribute("class");
    ca.digito = evento.target.innerHTML;
    metodos.calculadora(ca.accion, ca.digito);
  },

  calculadora: function(accion, digito) {
    switch(accion) {
      case "numero":
        ca.cantisignos = 0;
        if(ca.operaciones.innerHTML === "0") {
          ca.operaciones.innerHTML = digito;
        } else {
          if(ca.resultado) {
            ca.resultado = false;
            ca.operaciones.innerHTML = digito;
          } else {
            ca.operaciones.innerHTML += digito;
          }
        }
        break;

      case "operador":
        ca.cantisignos++;
        if(ca.cantisignos === 1) {
          if(ca.operaciones.innerHTML === "0") {
            ca.operaciones.innerHTML = "0";
          } else {
            ca.operaciones.innerHTML += digito;
            ca.cantidecimal = false;
            ca.resultado = false;
          }
        }
        break;

      case "decimal":
        if(!ca.cantidecimal && ca.cantisignos !== 1) {
          ca.operaciones.innerHTML += digito;
          ca.cantidecimal = true;
          ca.resultado = false;
        }
        break;

      case "igual":
        ca.operaciones.innerHTML = eval(ca.operaciones.innerHTML);
        ca.resultado = true;
        break;
    }
  },

  borrarcalcu: function() {
    ca.resultado = false;
    ca.operaciones.innerHTML = "0";
  }
};

metodos.inicio();
   



