const Book=require("../models/book.js")

let libro=Book;

function getlibro(Book,response){
response.json(libro);
}
function postlibro(request,response){
    let libro=new libro(request.body.titulo,request.body.tipo,request.body.autor,request.body.price,request.body.photo);
    if(libro){
        response.send(true);
    }else{
        response.send(false)
    };
   
}
function putlibro(request,response){
    let comprobar=request.body.id_book;
    
        if(libro.id_book==comprobar){
            let libro=new libro(request.body.titulo,request.body.tipo,request.body.autor,request.body.price,request.body.photo);
            libros[a]=nuevo;
            response.send(true);
        
    }
}
function dellibro(request,response){
    let comprobar=request.body.id_book;
   
        if(libro.id_book==comprobar){
            libro=null;
            response.send(true);
        }
    }


module.exports={getlibro,postlibro,putlibro,dellibro};