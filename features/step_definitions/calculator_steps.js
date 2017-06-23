var {defineSupportCode} = require('cucumber');
var Calculator = require("../../src/Calculator")

defineSupportCode(function({Before, Given, When, Then}) {
    Before(function () {

        // Inicializa variáveis a serem utilizadas ao longo do teste
        context = {
          numbers: [],
          calcResult: 0
        }

    });

    Given('que eu adicione {int}', function (number, callback) {
      console.log("Recebido o número: " + number)
      context.numbers.push(number)
      callback(null);
    });

    When('eu solicitar a soma dos números', function (callback) {
      context.calcResult = Calculator.sum(context.numbers[0], context.numbers[1])
      console.log("Soma feita, resultado: " + context.calcResult)
      callback(null);
    });

    Then('receberei o valor {int}', function (sumResult, callback) {
      
      if(sumResult != context.calcResult) {
        callback(new Error("Sua calculadora deve estar com problemas, era esperado o valor " + sumResult + ", mas foi recebido o valor " + context.calcResult))
      }
      
      callback(null);
    });

});