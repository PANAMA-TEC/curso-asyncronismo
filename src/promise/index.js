const promesa = new Promise( (resolve, reject )=>{
    resolve('Todo resuelto');

} )

const vacas = 9;

const countCowns = new Promise ( ( resolve, rejected )=>{

    if( vacas > 10 ){
        resolve(`We have ${vacas} cows on the farm`);

    }else{
        rejected(`not enought cows in the farm`)
    }

});

countCowns.then(
    (result) => {
        console.log(result)
    }
).catch((error) => {
    console.log(error)
}).finally( () => {
    console.log('Peticion terminada');
});