var expect = chai.expect;

describe('prueba', function() {
  it('Primera prueba. Las cadenas son iguales', function() {
    expect('hello world').to.equal('hello world');
  });
});

describe('La medida tiene un tipo', function() {
  it('El tipo se asigna correctamente', function() {
    var m = new Medida(32,'f');
    expect(m.type).to.equal('f');
  });
});
