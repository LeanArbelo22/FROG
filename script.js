const User = "leo.arbelo22@gmail.com";
const Pass = "210891";

function login(event){ /* (event) */
     event.preventDefault();
    console.info('funciono');
const email = document.getElementById("email").value;
debugger
const pas = document.getElementById("password").value;

if(email === User && pas === Pass){
    alert("Bienvenido!")                        //no funciona los alerts
}else{
    alert('Usuario o Password incorrectos')
}
}