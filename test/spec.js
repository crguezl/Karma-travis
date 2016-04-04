
//ASSERT
var assert = chai.assert;


suite('Pruebas con Conversor', function() {
  setup(function(){
     if (typeof __html__ !== 'undefined') {
         document.body.innerHTML = __html__['test/test.html'];
         convert = document.getElementById('convert');
         converted = document.getElementById('converted');
     }
   });
   suite('Error en la conversion ', function() {
     test('5V to C = error', function() {
       convert.value = "5v to c";
       main();
       assert.match(converted.innerHTML, /ERROR/);
     });
     test('5C to C = error', function() {
       convert.value = "5c to c";
       main();
       assert.match(converted.innerHTML, /ERROR/);
     });
   });
   suite('Farenheit a... ', function() {
      test('32F to C = 0C', function() {
          convert.value = "32f to c";
          main();
          assert.deepEqual(converted.innerHTML, "0.00 toCelsius");
      });
      test('77F to K = 298.00 K', function() {
             convert.value = "77f to k";
             main();
             assert.deepEqual(converted.innerHTML, "298.00 toKelvin");
      });
    });
    suite('Celsius a... ', function() {
      test('32C to F = 89.60C', function() {
        convert.value = "32c to f";
        main();
        assert.deepEqual(converted.innerHTML, "89.60 toFarenheit");
      });
      test('44C to K = 317.15K', function() {
        convert.value = "44c to k";
        main();
        assert.deepEqual(converted.innerHTML, "317.15 toKelvin");
      });
    });
    suite('Kelvin a... ', function() {
      test('10K to F = -441.40F', function() {
        convert.value = "10k to f";
        main();
        assert.deepEqual(converted.innerHTML, "-441.40 toFarenheit");
      });
      test('98K to C = -175.15C', function() {
        convert.value = "98k to c";
        main();
        assert.deepEqual(converted.innerHTML, "-175.15 toCelsius");
      });
    });
});

/*
var expect = chai.expect;
describe("Pruebas expect", function()
{

        describe("Celsius", function() {
            it("Convierte a Farenheit", function() {
                var far = new Celsius(32);
                expect(far.toFarenheit()).to.equal(89.6);
            });
            it("Convierte a Kelvin", function() {
                var kel = new Celsius(32);
                expect(kel.toKelvin()).to.equal(305.15);
            });
        });
        describe("Farenheit", function() {
            it("Convierte a Kelvin", function() {
                var kel = new Farenheit(32);
                expect(kel.toKelvin()).to.equal(273.00);
            });
            it("Convierte a Celsius", function() {
                var cel = new Farenheit(32);
                expect(cel.toCelsius()).to.equal(0.00);
            });
        });
        describe("Kelvin", function() {
            it("Convierte a Farenheit", function() {
                var far = new Kelvin(32);
                expect(far.toFarenheit()).to.equal(-401.8);
            });
            it("Convierte a Celsius", function() {
                var cel = new Kelvin(32);
                expect(cel.toCelsius()).to.equal(-241.14999999999998);
            });
        });


        describe("Matching en medida", function() {
            it("Asiganamos los elementos 77 K to F", function() {
                var match = Medida.match("77 k to f");
                expect(match.numero).to.equal("77");
                expect(match.tipo).to.equal("k");
                expect(match.destino).to.equal("f");
            });
        });

        describe("If y Try catch de medida", function() {
            it("Convierte correctamente", function() {
                expect(Medida.convertir("0c to k")).to.equal('273.15 toKelvin');
            });
            it("ERROR de tipo", function() {
                expect(Medida.convertir("32f to j")).to.equal('ERROR introduzca algo como 2e-4 F to C');
            });
            it("ERROR de tipo1", function() {
                expect(Medida.convertir("32k a k")).to.equal('ERROR introduzca algo como 2e-4 F to C');
            });
        });

});
*/
