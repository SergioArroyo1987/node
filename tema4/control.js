async function getpokemon(numero){
    
    let url="https://pokeapi.co/api/v2/pokemon/"+numero;
    let param={
        headers:{
            "content-type":"aplication/json;charset-UTF-8"
        },
        method:"GET"
    }
    try{
        document.getElementById("datos").innerHTML="";
        document.getElementById("imagenes").innerHTML="";
        document.getElementById("informacion").innerHTML="";
        let data=await fetch(url,param);
        let resultado=await data.json();
        
        let habilidades=resultado.abilities;
        
        let imagen=resultado.sprites;
        
        console.log(habilidades.length);
        document.getElementById("datos").innerHTML+="<h1><u>"+resultado.name+"</u></h1>";
        document.getElementById("imagenes").innerHTML+="<img id='poke' src="+imagen['back_default']+">";
        let crear="<h2><u>HABILIDADES</u></2><ol>";
        
        for(a=0;a<habilidades.length;a++){
        crear+=("informacion").innerHTML+="<li>"+habilidades[a]['ability']['name']+"</li>";
        
        }
        crear+="</ol>";
        console.log(crear);
        document.getElementById("informacion").innerHTML+=crear;

    }catch(error){
        console.log(error);

    }
    
}




