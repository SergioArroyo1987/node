
const readlineSync=require('readline-sync');
const { log } = require('console');
const datos=require('fs');
console.log("mensaje1");
let persona={
    name:"Sergio",
    surname:"Arroyo",
    age:35
}
setTimeout(()=>{
        console.log("mensaje2");
        console.log("mensaje3");
        let persona={
            name:"Sergio",
            surname:"Arroyo",
            age:35
        }
        let enviar=JSON.stringify(persona);
        datos.writeFileSync("prueba.json",enviar);
        let leer=datos.readFileSync("prueba.json","utf-8");
        leer=JSON.parse(leer);
        console.log(leer);
    },1000);

setTimeout(()=>{
    let nombre=readlineSync.question("Introduca nombre:");
    let apellido=readlineSync.question("Introduca nombre:");
    let age=readlineSync.question("Introduca edad:");
    persona.name=nombre;
    persona.surname=apellido;
    persona.age=age;
    let enviar=JSON.stringify(persona);
    datos.writeFileSync("prueba.json",enviar);
    let leer=datos.readFileSync("prueba.json","utf-8");
        leer=JSON.parse(leer);
        console.log(leer);


},2000);
    
