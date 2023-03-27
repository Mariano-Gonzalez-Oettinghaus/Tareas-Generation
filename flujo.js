//Parte1
let dia = document.getElementById("txtDía");
let hora= document.getElementById("txtHora");
let btnCalcular = document.getElementById("btnCalcular");
//Parte2
let diaAño = document.getElementById("diaAño");
let diaEnero = document.getElementById("diaEnero");
//Parte3
let btncalcular3 =document.getElementById("btnCalcular3");



//Parte1
let resultado =  document.getElementById ("resultado")

btnCalcular.addEventListener("click", function(event) {
    event.preventDefault();
   let day = parseInt(dia.value)
   let hour = parseInt(hora.value)
   let msg;

// if (day== 0) {
//     msg = "Es fin de semana,";
// } else if (day == 6) {
//     msg ="Es fin de semana,"
// } else {
//     msg ="Es día hábil,"
// }


// if (hour <  9) {
//     msg += " No es horario hábil";
// } else if (hour > 18) {
//     msg +=" No es horario hábil";
// } else {
//     msg +=" Es horario hábil";
// }

if(businessHours(day, hour)){
     msg= "Es dia habil u horario habil"
  }  else{
     msg="No es dia hábil u horario hábil"
    }

resultado.innerHTML = msg;
});// termina parte 1

//Parte2
btnCalcular2.addEventListener("click", function () {
  console.log(diaAño.value, diaEnero.value);

  let msg = "";

  let num = calcularDia(parseInt(diaAño.value), parseInt(diaEnero.value));
  // console.log(calcularDia(parseInt(diaAño.value),parseInt(diaEnero.value)));

  if (num==0){
      msg="Es Domingo ";
    } else if (num==1) {
      msg="Es Lunes ";
    } else if (num==2) {
      msg="Es Martes ";
    } else if (num==3) {
      msg="Es Miércoles ";
    } else if (num==4) {
      msg="Es Jueves ";
    } else if (num==5) {
      msg="Es Viernes ";
    } else if (num==6) {
      msg="Es Sábado ";
    } else {
       msg="No sé"
    }

//   switch (num) {
//     case 0:
//       msg = " (Domingo)";
//       break;
//     case 1:
//       msg = " (Lunes)";
//       break;
//     case 2:
//       msg = " (Martes)";
//       break;
//     case 3:
//       msg = " (Miercoles";
//       break;
//     case 4:
//       msg = " (Jueves)";
//       break;
//     case 5:
//       msg = " (Viernes)";
//       break;
//     case 6:
//       msg = " (Sabado)";
//       break;
//     case 7:
//       msg = " (No se)";
//       break;
//   }

  resultado.innerHTML = msg + num;
});// termina parte 2

//Parte 3
btnCalcular3.addEventListener("click", function(event) {
    event.preventDefault();
    let first = parseInt(diaEnero.value)
    let day = parseInt(diaAño.value)
    let num = calcularDia(first,day)
   let message="";
    if (businessHours(num, parseInt(hora.value))){
        message= "Es dia habil u horario habil"
     }  else{
        message="No es dia hábil u horario hábil"
       }

 resultado.innerHTML = message
})
//Termina parte 3


//Funcion parte 2

function calcularDia(dia, diaSemana) {
  console.log(dia + diaSemana - 1);
  console.log(39 % 7);
  return (dia + diaSemana - 1) % 7;
}

 

//Funcion parte 1
function businessHours(dayNumber, hourNumber){
    let resultado;
    if ((dayNumber== 0) || (dayNumber == 6) ||(hourNumber <  9) || (hourNumber > 18) ) {
        resultado = false;
    } else {
        resultado = true;
    }    
    return resultado;
}

