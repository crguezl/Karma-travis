//EXPECT
var expect = chai.expect;

describe('La medida tiene un tipo y un valor', function() {
  it('El tipo y el valor se asignan correctamente', function() {
    var m = new Medida(32,'f');
    expect(m.value).to.equal(32);
    expect(m.type).to.equal('f');
  });
});

describe('Conversiones Celsius', function() {
  it('Celsius convierte bien a Fahrenheit', function() {
    var cf = new Celsius(32,'c','f');
    expect(cf.toFarenheit()).to.equal(89.60);
    });
  it('Celsius convierte bien a Kelvin', function() {
    var ck = new Celsius(32,'c','k');
    expect(ck.toKelvin()).to.equal(305.15);
  });
});

describe('Conversiones Kelvin', function() {
  it('Kelvin convierte bien a Fahrenheit', function() {
    var kf = new Kelvin(32,'k','f');
    expect(kf.toFarenheit()).to.equal(-401.8);
    });
  it('Kelvin convierte bien a Celsius', function() {
    var kc = new Kelvin(32,'k','c');
    expect(kc.toCelsius()).to.equal(-241.14999999999998);
  });
});

describe('Conversiones Farenheit', function() {
  it('Farenheit convierte bien a Kelvin', function() {
    var fk = new Farenheit(32,'f','k');
    expect(fk.toKelvin()).to.equal(273);
    });
  it('Farenheit convierte bien a Celsius', function() {
    var fc = new Farenheit(32,'f','c');
    expect(fc.toCelsius()).to.equal(0);
  });
});


//ASSYNCRONOUS

//describe('La medida tiene un tipo y un valor', function() {
//    it('El tipo y el valor se asignan correctamente', function(done) {
//      var m = new Medida(54,'k');
//      m.convertir(done);
//      });
//});

//ASSERT
var assert = chai.assert;


suite('temperature', function() {
  setup(function(){
     if (typeof __html__ !== 'undefined') {
         document.body.innerHTML = __html__['tests/index.html'];
         original = document.getElementById('original');
         converted = document.getElementById('converted');
     }
   });
   test('32F to C = 0C', function() {
          original.value = "32F to C";
          main();
          assert.deepEqual(converted.innerHTML, "0.00 Celsius");
      });
    test('32F = 0C', function() {
        original.value = "32F";
        main();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        main();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });

describe("#main", function() {
    it("No hay logs ni errores", function() {
      (new main());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
});
