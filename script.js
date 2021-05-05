const User = "leo.arbelo22@gmail.com";
const Pass = 210891;

function login(){ /* (event) */
     //event.preventDefault();
    console.info('funciono');
const email = document.getElementById(email);
const pass = document.getElementById(password);

if(email === User && pass === Pass){
    alert("Bienvenido!")                        //no funciona los alerts
}else{
    alert('Usuario o Password incorrectos')
}
}