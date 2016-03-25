var expect = chai.expect;

describe('prueba', function() {
  it('Primera prueba. Las cadenas son iguales', function() {
    expect('hello world').to.equal('hello world');
  });
});

describe('La medida tiene un tipo y un valor', function() {
  it('El tipo y el valor se asignan correctamente', function() {
    var m = new Medida(32,'f');
    expect(m.value).to.equal(32);
    expect(m.type).to.equal('f');
  });
});
