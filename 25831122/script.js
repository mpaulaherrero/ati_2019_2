const domName = document.getElementById("nombre");
const domDesc = document.getElementById("descripcion");
const domColor = document.getElementById("color");
const domLibro = document.getElementById("libro");
const domMusica = document.getElementById("musica");
const domJuego = document.getElementById("videojuego");
const domLenguaje = document.getElementById("lenguaje");
const domCom = document.getElementById("comunicacion");
var locale = "es";




domName.innerHTML = perfil.nombre;
domDesc.innerHTML = perfil.descripcion;
domColor.innerHTML = config[locale]["color"] + ' ' +perfil.color;
domLibro.innerHTML = config[locale]["libro"] + ' ' +perfil.libro.join(", ");
domMusica.innerHTML = config[locale]["musica"] + ' ' +perfil.musica;
domJuego.innerHTML = config[locale]["video_juego"] + ' ' +perfil.video_juego;
domLenguaje.innerHTML = '<strong>'+config[locale]["lenguajes"] + ' ' +perfil.lenguajes.join(", ")+'</strong>';

eti = '<a href="mailto:kharleann@gmail.com" target="_blank">'+perfil.email+'<a>'
domCom.innerHTML = config[locale]["comunicacion"].replace("[email]",eti);

