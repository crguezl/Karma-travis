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
    var c = new Celsius(32,'c','f');
    expect(c.toFarenheit()).to.equal(89.60);
    });
  it('Celsius convierte bien a Kelvin', function() {
    var ck = new Celsius(32,'c','k');
    expect(ck.toKelvin()).to.equal(305.15);

  });
});
