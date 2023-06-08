let usuario=null;
function getStart(request,response){
    response.send("Peticion recibida")
}
function getUser(request,response){
    console.log(request.headers);
    console.log(request.url);
    console.log(request.method);
    response.status(200).json({message:"ok: true, message: ‘Recibido!’"});
}
function getBye(request,response){
    response.status(200).json({message:"ok: true, message: ‘Adios’"});
}
module.exports={getUser,getBye};