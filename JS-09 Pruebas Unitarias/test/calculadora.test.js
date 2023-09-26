const calculadora = require('../assets/scripts/calculadora');

//console.log(calculadora.suma);

//Prueba unitaria
test('Debe restar numero a - b', () => {
    expect(calculadora.resta(100, 50)).toBe(50);
})

test('Debe sumar numero a + b', () => {
    expect(calculadora.suma(10, 10)).toBe(20);
})
test('Debe dividir numero a / b', () => {
    expect(calculadora.division(100, 10)).toBe(10);
})
test('Debe multiplicar numero a * b', () => {
    expect(calculadora.multiplicacion(100, 10)).toBe(1000);
})

// test('Debe multiplicar numero a * b', () => {
//     expect(calculadora.multiplicacion(100, 10)).toBe(1000);
//     expect(calculadora.division(100, 10)).toBe(10);
//     expect(calculadora.suma(10, 10)).toBe(20);
//     expect(calculadora.resta(100, 50)).toBe(50);
   
// })
