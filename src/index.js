//cargado de cuerpos
var cuerpo_Inicio = document.getElementById('inicio');
var cuerpo_Programas = document.getElementById('programas');
var cuerpo_contactame = document.getElementById('contactame');

//carga de botones a agregación de funcionalidad
var boton_programas = document.getElementById('boton_programas');
boton_programas.addEventListener("click", GoToProgramas);

var boton_inicio = document.getElementById('boton_inicio');
boton_inicio.addEventListener("click", GoToInicio);

var boton_inicio2 = document.getElementById('boton_inicio2');
boton_inicio2.addEventListener("click", GoToInicio);

var boton_contactame = document.getElementById('boton_contactame');
boton_contactame.addEventListener("click", GoToContactame);

//funcionalidad de los botones
function GoToProgramas(){
  cuerpo_Programas.style.display = "block";
  cuerpo_Inicio.style.display = "none";
  cuerpo_contactame.style.display = "none";
  boton_programas.setAttribute("class", "nav-item nav-link active");
  boton_inicio.setAttribute("class", "nav-item nav-link");
  boton_contactame.setAttribute("class", "nav-item nav-link");
}

function GoToInicio(){
  cuerpo_Inicio.style.display = "block";
  cuerpo_Programas.style.display = "none";
  cuerpo_contactame.style.display = "none";
  boton_inicio.setAttribute("class", "nav-item nav-link active");
  boton_programas.setAttribute("class", "nav-item nav-link");
  boton_contactame.setAttribute("class", "nav-item nav-link");
}

function GoToContactame(){
  cuerpo_contactame.style.display = "block";
  cuerpo_Programas.style.display = "none";
  cuerpo_Inicio.style.display = "none";
  boton_contactame.setAttribute("class", "nav-item nav-link active");
  boton_programas.setAttribute("class", "nav-item nav-link");
  boton_inicio.setAttribute("class", "nav-item nav-link");
}
