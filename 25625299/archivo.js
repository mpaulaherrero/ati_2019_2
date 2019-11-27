document.getElementById("ci").innerHTML = perfil.ci;
document.getElementById("nombre").innerHTML = perfil.nombre;
document.getElementById("descripcion").innerHTML = perfil.descripcion;
document.getElementById("genero").innerHTML = perfil.genero;
document.getElementById("nacimiento").innerHTML = perfil.fecha_nacimiento;
document.getElementById("color").innerHTML = perfil.color;
document.getElementById("libro").innerHTML = perfil.libro;
document.getElementById("musica").innerHTML = perfil.musica[0] + ", " + perfil.musica[1] + ", " + perfil.musica[2];
document.getElementById("video_juego").innerHTML = perfil.video_juego[0] + ", " + perfil.video_juego[1] + ", " + perfil.video_juego[2] + ", " + perfil.video_juego[3] + ", " + perfil.video_juego[4];
document.getElementById("lenguajes").innerHTML = perfil.lenguajes[0] + ", " + perfil.lenguajes[1] + ", " + perfil.lenguajes[2];
document.getElementById("mail").innerHTML = perfil.mail;


document.getElementById("nro_ci").innerHTML = config.ci;
document.getElementById("desc").innerHTML = config.descripcion;
document.getElementById("f_nac").innerHTML = config.fecha_nacimiento;
document.getElementById("mi_genero").innerHTML = config.gen;
document.getElementById("color_fav").innerHTML = config.colore;
document.getElementById("libro_fav").innerHTML = config.libros;
document.getElementById("musica_fav").innerHTML = config.musica;
document.getElementById("video_juego_fav").innerHTML = config.video_juego;
document.getElementById("lenguajes_fav").innerHTML = config.lenguajes;
document.getElementById("informacion_a").innerHTML = config.informacion_a;