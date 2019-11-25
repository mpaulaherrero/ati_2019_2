// NO FUNCIONA
fetch("./perfil.json")
.then(function(Response){
    return Response.json;
})
.then(function(data){
    getPerfil(data);
})
.catch(function(err){
    console.log(err);
})

fetch("./config.json")
.then(function(Response){
    return Response.json;
})
.then(function(data){
    getConfig(data);
})
.catch(function(err){
    console.log(err);
})

function getPerfil(data) {
    var perfil = JSON.parse(data);    
    document.getElementById(favColorA).innerHTML = perfil.color;
    
}

function getConfig(data) {
    var config = JSON.parse(data);
    document.getElementById(favColorQ).innerHTML = config.es.color;
}

