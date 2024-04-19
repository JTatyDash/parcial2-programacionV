//Dado el siguiente array: let frutas = ['manzana', 'plátano', 'pera','naranja'], 
//utiliza el método asociado a los arrays para eliminar el primer elemento, el último elemento e 
//inserta al inicio del array el valor de nueva-fruta

let frutas = ['manzana', 'plátano', 'pera','naranja']

//eliminar el primer elemento
frutas.pop()
console.log(frutas); // [ 'manzana', 'plátano', 'pera' ]

//eliminar el último elemento
frutas.shift()
console.log(frutas); // [ 'plátano', 'pera', 'naranja' ]

//Inserta al inicio del array el valor de nueva-fruta
frutas.unshift("maracuya")
console.log(frutas);