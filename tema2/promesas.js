const { error, log } = require('console');
const { promises } = require('dns');
const datos=require('fs/promises');
const { resolve } = require('path');
const readline=require('readline');
let persona={
    name:"Sergio",
    surname:"Arroyo",
    age:35
}

 


async function teclado(pregunta){
    const question=new Promise((resolve,reject)=>{
        const rl=readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        rl.question(pregunta,(repuesta)=>{
            resolve(repuesta);
            rl.close();
        })
    })
    return question;
}



teclado("¿Tu nombre").then(resultado=>{
    persona.nombre=resultado;
    return teclado("Tu apellido")
    
}).then(resultado=>{
    persona.apellido=resultado;
    return teclado("años")
}).then(resultado=>{
    persona.age=resultado;
    return datos.writeFile("prueba.json",JSON.stringify(persona))
}).then(()=>{
    return datos.readFile("prueba.json","utf-8")
})
.then(data=>{
    console.log(JSON.parse(data));
})
.catch(err=>{
    console.log(err);
});
async function rellenar(){
    persona.name=await teclado("nombre");
    persona.apellido=await teclado("apellido");
    persona.age=await teclado("año");
}
rellenar();

