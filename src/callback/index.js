//pwd se utiliza para identificar el lugar en donde estas ubicado con el terminal.


const sum = (a, b) => {
    return a + b;
}

const calc = (a, b, operacion) => {
    return operacion(a, b);
}

console.log(calc(1, 2, sum));

setTimeout( () =>{
    console.log("hola mundo");
}, 5000);

const saludo = (mensaje) => {
    console.log(`mensaje: ${mensaje}`);
}

setTimeout(saludo, 5000, "hola mundo");
