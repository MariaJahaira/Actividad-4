const{
    devolverPrimerElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlComienzoDelArray,
    arrayContiene,
    agregarNumeros,
    multiplicarArgumentos,
    cuentoElementos,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
} = require("./index4.js");

describe('devolverPrimerElemento(array)', function () {
    it("Deberia devolver el primer elemento del array", function(){
        expect(devolverPrimerElemento([10,12,15,16])).toBe(10);
    })
})

describe('obtenerLargoDelArray(array)', function () {
    it("Deberia devolver el largo del array", function(){
        expect(obtenerLargoDelArray([2,3,4,5,6])).toBe(5);
    })
})

describe('incrementarPorUno(array)', function () {
    it("Deberia de agregar en uno a los elementos del array", function(){
        expect(incrementarPorUno([7,1,3,8])).toEqual([8,2,4,9]);
    })
})

describe('agregarItemAlComienzoDelArray(array, elemento)', function () {
    it("Deberia de añadir el elemento al inicio del array", function(){
        expect(agregarItemAlComienzoDelArray([2,3,4,5], 10)).toEqual([10,2,3,4,5]);
    })
})

describe('arrayContiene(array, elemento)', function () {
    it("Deberia devolver true si el elemento esta dentro del array", function(){
        expect(arrayContiene(["hola",4,5,"Hello"], "Hello")).toBe(true);
    })
})

describe('agregarNumeros(numeros)', function() {
    it('Debe sumar todos los números de la matriz y devolver la suma', function() {
      expect(agregarNumeros([10, 30, 20])).toBe(60);
      expect(agregarNumeros([37, 300])).toBe(337);
      expect(agregarNumeros([0])).toBe(0);
    });
});
  
describe('multiplicarArgumentos()', function () {
    it('Debe devolver el producto de todos los argumentos', function () {
      const producto = multiplicarArgumentos(5, 6);
      const producto2 = multiplicarArgumentos();
      const producto3 = multiplicarArgumentos(5, 5, 5, 5);
      const producto4 = multiplicarArgumentos(1);
      const producto5 = multiplicarArgumentos(10, 10, 10);
      expect(producto).toBe(30);
      expect(producto2).toBe(0);
      expect(producto3).toBe(625);
      expect(producto4).toBe(1);
      expect(producto5).toBe(1000);
    });
});
  
describe('cuentoElementos(arreglo)', function() {
    it('Debe devolver un contador con el total de números mayores que 18', function() {
      expect(cuentoElementos([10, 10, 22, 21])).toBe(2);
      expect(cuentoElementos([97, 130, 100, 5, 20, 9])).toBe(4);
      expect(cuentoElementos([97, 20, 90, 50, 30, 709])).toBe(6);
    });
});
  
describe('todosIguales(arreglo)', function() {
    it('Debe devolver verdadero si todos los elementos de la matriz son iguales y falso de lo contrario', function() {
      expect(todosIguales([11, 11, 11, 11 ])).toBe(true);
      expect(todosIguales([92, 120, 180, 8])).toBe(false);
      expect(todosIguales([300,300,300,300 ])).toBe(true);
    });
});
  
describe('mesesDelAño(array)', function() {
    it('Debe devolver una nueva matriz con los meses solicitados', function() {
      var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
      var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
      expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
      expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
    });
});
  
describe('mayorACien(array)', function() {
    it('Debería devolver una matriz con valores mayores que 100', function() {
      var integers = [100, 11, 50, 78, 211, 120, 7, 190, 150, 20];
      expect(mayorACien(integers)).toEqual([211, 120, 190, 150]);
    });
});
  
describe('breakStatement(numero)', function() {
    it('Debe devolver una matriz con los valores resultantes de sumar 2 en cada iteración', function() {
      expect(breakStatement(11)).toEqual([13,15,17,19,21,23,25,27,29,31]);
    });
    it('Debe detener la ejecución si el valor de la suma y el número de iteración coinciden', function() {
      expect(breakStatement(-11)).toEqual('Se interrumpió la ejecución');
    });
});