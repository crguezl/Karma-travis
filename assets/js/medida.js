(function(exports){
"use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

  var expresion_reducida= XRegExp('(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n'+
                                  '(?<espacio>\\s*) \n'+
                                  '(?<destino>\\s*[fFcCkK]) \n','x');

  var expresion = XRegExp('^(\\s*)                                    \n' +
                '(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?)\n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [fck]) #tipo                           \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<destino> [fck]) #destino                     \n' +
                '(\\s*)$','ix');


function Medida(valor,tipo){
  if(tipo){
    //console.log("NORMAL"+valor+tipo);
    this.value = valor;
    this.type = tipo;
  }else{
    var sin_tipo = XRegExp.exec(valor,expresion_reducida);
    if(sin_tipo){
      //console.log("ENTRO EN SIN TIPO");
      this.value = sin_tipo.numero;
      this.type = sin_tipo.destino;
    }
  }
}

Medida.constructor = Medida;
Medida.measures = Medida.measures || {};

Medida.match= function(valor){
    var valor_match_exp = XRegExp.exec(valor, expresion);
    return valor_match_exp;
}

//Medida.measures={};

Medida.convertir = function(valor) {
  var measures = Medida.measures;
  var match = Medida.match(valor);

  if (match) {
    var numero = match.numero,
        tipo   = match.tipo.toLowerCase(),
        destino = match.destino.toLowerCase();

    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      //var el_tipo = measures[destino].name;
      return source[target]().toFixed(2) + " "+ target; // "0 Celsius"
    }
    catch(err) {
      return "ERROR La conversion no se ha podido realizar";
    }
  }
  else
    return "ERROR introduzca algo como 2e-4 F to C";
};


/*(function(exports){
  "use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas
function Medida(valor,tipo){
  this.value = valor;
  this.type = tipo;
}


//Medida.constructor = Medida;
exports.Medida=Medida;
})(this);*/

exports.Medida=Medida;
})(this);
