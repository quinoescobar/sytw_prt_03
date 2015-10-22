" use strict";

function Medida(valor,tipo)
{
  this.valor=valor;
  this.tipo=tipo;
}

Medida.prototype.getTipo = function ()
{
  return this.tipo;
};
Medida.prototype.getValor = function ()
{
  return this.valor;
};
Medida.prototype.setTipo = function (arg)
{
   this.tipo=arg;
};
Medida.prototype.setValor = function (arg)
{
  //que medida aceptara un argumento
  //Medida(32,"F") y Medida(32F)
  //constructor mas versatil, que construya el objeto, no en calcular
   this.valor=arg;
};

function Temperatura(valor,tipo)
{
  Medida.call(this,valor,tipo);
}

Temperatura.prototype= new Medida();

Temperatura.prototype.Celsius = function ()
{

  var calculado = (this.getValor() * 9/5)+32;
  calculado = calculado.toFixed(1)+" Farenheit";

  return calculado;
};

Temperatura.prototype.Farenheit = function ()
{

  var calculado2= (this.getValor() - 32)*5/9;
  calculado2 = calculado2.toFixed(1)+" Celsius";

  return calculado2;
};

function calcularW()
{
  ingresadoW = new Temperatura();
  if (window.Worker)
  { //check if Browser supports the Worker api.
  	// Requires script name as input
  	ingresadoW.calcularW()

    myWorker.postMessage([first.value,second.value]);
    console.log('Mensaje enviado al worker');


  	myWorker.onmessage = function(e)
    {
  		result.textContent = e.data;
  		console.log('Mensaje recibido del worker');
	  };

  }
}


function descomponerInput()
{
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
  var x = temp.match(mejorRegex);
  if (x)
  {
    this.valor = ingresado.setValor(parseFloat(x[1]));
    this.tipo = ingresado.setTipo(x[2]);
  }
  else {
    console.error("missing target");
    converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}




function calcular()
{
  var result;
  var original = document.getElementById("original");
  var temp = original.value;

  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;

  var x = temp.match(mejorRegex);

  if (x)
  {
    var ingresado = new Temperatura();
    ingresado.setValor(parseFloat(x[1]));
    ingresado.setTipo(x[2]);

    if (ingresado.getTipo() == 'c' || ingresado.getTipo() == 'C') {

      result = ingresado.Celsius();
    }
    else {
      result = ingresado.Farenheit();

    }

      converted.innerHTML = result;
      console.log(result);
  }
  else {
      console.error("missing target");
      converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
