
const readline=require('readline');
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
            age:37
        }
        let enviar=JSON.stringify(persona);
        
        datos.writeFile("prueba.json",enviar,()=>{
            datos.readFile("prueba.json","utf-8",(err,data)=>{
                console.log(data,"hola");
            });
        //let leer=JSON.parse(readFile called);
        
        });
        
    },1000);

setTimeout(()=>{
    let rl = readline.createInterface(
        process.stdin, process.stdout);
    rl.question("Introduca nombre:",(nombre)=>{
         rl.question("Introduca nombre:",(apellido)=>{
            rl.question("Introduca edad:",(age)=>{
                persona.name=nombre;
                persona.surname=apellido;
                persona.age=age;
                let enviar=JSON.stringify(persona);
                
                datos.writeFile("prueba.json",enviar,()=>{
                    datos.readFile("prueba.json","utf-8",(err,data)=>{
                        //leer=JSON.parse(leer);
                     console.log(data);
                     rl.close();
                    });
                    
            });
        });
                });
    
    });
    
    
    


},2000);
    
