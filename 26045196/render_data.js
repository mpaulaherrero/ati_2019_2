var course = document.createTextNode(config.curso); 
var semester = document.createTextNode(config.semestre);
var institution = document.createElement("span");
institution.innerText = "[" + config.institution + "]";
document.getElementById("logo").appendChild(course);
document.getElementById("logo").appendChild(institution);
document.getElementById("logo").appendChild(semester);