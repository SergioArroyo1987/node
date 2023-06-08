const Book=require("../models/book.js")

let libro=Book;
let libros=[];
libros[0]=new libro("Segio","terror","Sergio Arroyo",2,"sdfsdfds",1,1);
function getbook(Book,response){
response.json(libros);
}
function postbook(request,response){
    let nuevo=new libro(request.body.titulo,request.body.tipo,request.body.autor,request.body.price,request.body.photo);
    if(libros.push(nuevo)){
        response.send(true);
    }else{
        response.send(false)
    };
   
}
function putbook(request,response){
    let comprobar=request.body.id_book;
    for(a=0;a<libros.length;a++){
        if(libros[a].id_book==comprobar){
            let nuevo=new libro(request.body.titulo,request.body.tipo,request.body.autor,request.body.price,request.body.photo);
            libros[a]=nuevo;
            response.send(true);
        }
    }
}
function delbook(request,response){
    let comprobar=request.body.id_book;
    for(a=0;a<libros.length;a++){
        if(libros[a].id_book==comprobar){
            libros.splice(a);
            response.send(true);
        }
    }

}
module.exports={getbook,postbook,putbook,delbook};