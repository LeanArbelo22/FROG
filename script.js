const User = "leo.arbelo22@gmail.com"
const Passw = "210891"

function login(){ /* (event) */
    /* event.preventDefault(); */
    console.info('funciono')
const email = document.getElementById(email)
const pass = document.getElementById(pass)

if(email === User && pass === Passw){
    alert("Bienvenido!")                        //no funciona los alerts
}else{
    alert('Usuario o Password incorrectos')
}
}