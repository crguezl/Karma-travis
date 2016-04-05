(function(exports){
  "use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

/*********** TEMPERATURA ************/
function Temperatura(valor,tipo){
  //this.nuevoTipo = nuevoTipo;//varaible propia que va a tener temperatura para saber a que convertir
  Medida.call(this, valor, tipo);
  /* tipo es opcional. Debería admitir new Medida("45.2 F") */
}

Temperatura.prototype = new Medida();//heredamos
Temperatura.prototype.constructor = Temperatura;


/********** CELSIUS **********/

function Celsius(valor,tipo,nuevoTipo)
{
  //console.log("dentro de constrcutor celsius"+ "valor:"+valor+"tipo" + tipo+"nuevo tipo"+nuevoTipo);
  Temperatura.call(this,valor,"c");
}
Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function(){
  return (parseFloat(this.value)+273.15);
};

/*************************/

/*********** Farenheit *********/

function Farenheit(valor,tipo,nuevoTipo){

  Temperatura.call(this,valor,"f");

}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;
Medida.measures.f=Farenheit;

Farenheit.prototype.toCelsius = function(){
  return ((this.value - 32)* 5/9);
};

Farenheit.prototype.toKelvin = function(){
  return (((this.value - 32)*5/9) + 273);
};

/**********************************/

/************* Kelvin ***************/

function Kelvin(valor,tipo){
  Temperatura.call(this,valor,"k");

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Medida.measures.k=Kelvin;

Kelvin.prototype.toCelsius = function(){
  return (this.value - 273.15);
};

Kelvin.prototype.toFarenheit = function(){
  return (((this.value - 273)*9/5)+32);
};

/*************************************/



//Temperatura.prototype.constructor = Temperatura;
exports.Temperatura=Temperatura;
exports.Celsius=Celsius;
exports.Farenheit=Farenheit;
exports.Kelvin=Kelvin;
})(this);
