// =================REQUERIMIENTOS====================
// 1. Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al rango, mostrar un mensaje al usuario: "número fuera del rango"
// 2. Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.
// 3. Generar y mostrar por consola el resultado de las operaciones.
// 4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.
const solicitarNumero = () => {
  // solicito un numero con prompt
  const numero = +prompt("Digite um número");
  // valido que este en el rango de 1 a 20
  if (numero < 1 || numero > 20) {
    // si no esta en el rango retorno null y arrojo mensaje
    console.log(`número fuera de rango(${numero}).`);
    return null;
  }
  // si esta en el rango retorno el numero
  return numero;
};

// funcion que genera el factorial de un numero
// un factorial es el resultado de multiplicar dicho número por todos los anteriores.
// ejemplo: factorial de 5 es: 5 x 4 x 3 x 2 x 1 = 120
const factorial = (numero) => {
  let total = 1;
  for (i = 1; i <= numero; i++) {
    total = total * i;
  }
  return total;
};

// funcion que genera el el resultado por consola
const resultado = () => {
  // solicito el numero llamando a la funcion solicitarNumero()
  const numero = solicitarNumero();
  // valido si no es null. Ya que si es null arroja mensaje de validación de solicitarNumero()
  if (numero) {
    // itero desde el index 1 hasta el numero ingresado
    for (let index = 0; index < numero; index++) {
      // guardo en una variable n la suma del index y n
      // esto lo hago para que parta desde 1 y no de 0
      const n = index + 1;
      // imprimo el resultado de la operación multiplicando
      // uso la interpolación para mostrar de la misma forma que el pdf
      console.log(`${n} x ${numero} = ${n * numero}`);
    }
    for (let index = 0; index < numero; index++) {
      const n = index + 1;
      // hago lo mismo que en multiplicación pero llamando
      // a la función que calcula el factorial
      console.log(`Factorial de ${n} es: ${factorial(n)}`);
    }
  }
};

// cuando se ejecute desafio.js se ejecutara la funcion resultado()
resultado();
