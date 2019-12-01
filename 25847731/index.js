const dom_userName = document.getElementById("userName");
const dom_userDescription = document.getElementById("userDescription");
const dom_userData = document.getElementById("userData");
const dom_userContact = document.getElementById("userContact");
// perfil de perfil.js
// config de config.js

const locale = "en";
const doNothing = str => str;
const ArrayToString = arr => arr.join(", ");

const formFields = [
    {fieldName:"color", fieldTransformer: doNothing},
    {fieldName:"libro", fieldTransformer: doNothing},
    {fieldName:"musica", fieldTransformer: doNothing},
    {fieldName:"lenguajes", fieldTransformer: ArrayToString},
    {fieldName:"video_juego", fieldTransformer: ArrayToString},
];

dom_userName.innerHTML = perfil.nombre;
dom_userDescription.innerHTML = perfil.descripcion;




formFields.forEach(field => {
    const fieldValue = field.fieldTransformer(perfil[field.fieldName]);
    const fieldQuestion = config[locale][field.fieldName]
    
    const dom_field = document.createElement("div");
    const span_question = document.createElement("span");
    const span_response = document.createElement("span");
    
    dom_field.classList.add("field");
    span_question.classList.add("fieldName");
    span_response.classList.add("fieldValue");

    span_response.innerText = fieldValue;
    span_question.innerText = fieldQuestion;



    dom_field.appendChild(span_question);
    dom_field.appendChild(span_response);


                    // <div class="field">
                //     <span class="fieldName">
                //         <question>
                //     </span>
                //     <span class="fieldValue">
                //         <response>
                //     </span>
                // </div>

    dom_userData.appendChild(dom_field);
});


let msgContact = config[locale]["contacto"];
const anchorEmail = '<a href="mailto:'+perfil.email+'">'+perfil.email+'</a>';
msgContact= msgContact.replace("[email]", anchorEmail);


dom_userContact.innerHTML = msgContact;

// Si necesitan comunicarse conmigo me pueden escribir a:
// <a href="mailto:adrianjmejias@gmail.com">adrianjmejias@gmail.com</a>
