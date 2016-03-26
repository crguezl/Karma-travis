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
