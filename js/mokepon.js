let ataqueJugador
let ataqueEnemigo 

let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectinoSeleccinoarAtaque = document.getElementById("seleccionar-ataque")
    sectinoSeleccinoarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display ="none"

    let buttonMascota = document.getElementById("button-mokepon")
    buttonMascota.addEventListener("click", seleccinoarMokepon)

    let botonFuego = document.getElementById("button-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("button-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonPlanta = document.getElementById("button-planta")
    botonPlanta.addEventListener("click", ataquePlanta)

    let botonReiniciar = document.getElementById("button-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccinoarMokepon(){
    let sectinoSeleccinoarAtaque = document.getElementById("seleccionar-ataque")
    sectinoSeleccinoarAtaque.style.display = "flex"

    let sectinoSeleccinoarMokepon = document.getElementById("seleccionar-mokepon")
    sectinoSeleccinoarMokepon.style.display = "none"

    let inputAguasor = document.getElementById("aguasor")
    let inputFuegosor = document.getElementById("fuegosor")
    let inputPlantasor = document.getElementById("plantasor")
    let spanMokeponJugador = document.getElementById("mokepon-jugador")

    if(inputAguasor.checked){
        spanMokeponJugador.innerHTML = "Aguasor "

    } else if(inputFuegosor.checked){
        spanMokeponJugador.innerHTML = "Fuegosor "

    } else if(inputPlantasor.checked){
        spanMokeponJugador.innerHTML = "Plantasor "
    } else{
        alert("Selecciona un Mokepon!")
    }
    seleccionMokeponEnemigo()
}

function seleccionMokeponEnemigo(){
    let mokeponAleatorio = aleatorio(1,3)
    let spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

    if (mokeponAleatorio == 1){
        //Aguasor
        spanMokeponEnemigo.innerHTML = "Aguasor "
    } else if (mokeponAleatorio == 2){
        //Fuegosor
        spanMokeponEnemigo.innerHTML = "Fuegosor "
    }else {
        //Plantasor
        spanMokeponEnemigo.innerHTML = "Plantasor "
    }
}
function ataqueAgua(){
    ataqueJugador = "Agua 🌊"
    ataqueAleatorioEnemigo()
}

function ataqueFuego(){
    ataqueJugador = "Fuego 🔥"
    ataqueAleatorioEnemigo()
}

function ataquePlanta(){
    ataqueJugador = "Planta 🌱"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Agua 🌊"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "Fuego 🔥"
    } else {
        ataqueEnemigo = "Planta 🌱"
    }
    combate()
}

function combate(){
    
    let spanVidasJugaor = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE!🙄")
    } else if (ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Planta 🌱"){
        crearMensaje("GANASTE! 😎")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if (ataqueJugador == "Agua 🌊" && ataqueEnemigo == "Fuego 🔥"){
        crearMensaje("GANASTE! 😎")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if (ataqueJugador == "Planta 🌱" && ataqueEnemigo == "Agua 🌊"){
        crearMensaje("GANASTE! 😎")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else {
        crearMensaje("PERDISTE 😵")
        vidasJugador--
        spanVidasJugaor.innerHTML= vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Tu Mokepon es el vencedor!! 😎")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Tu Mokepon fue derrotado... 🤪🤪😵🤕")
    }
}

function crearMensaje(resultado){
let sectionMensajes = document.getElementById("resultado")
let ataquesDelJugador = document.getElementById("ataques-del-jugador")
let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let nuevoAtaqueDelJugador = document.createElement("p")
let nuevoAtaqueDelEnemigo = document.createElement("p")

sectionMensajes.innerHTML = resultado
nuevoAtaqueDelJugador.innerHTML = ataqueJugador
nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("button-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("button-agua")
    botonAgua.disabled = true
    let botonPlanta = document.getElementById("button-planta")
    botonPlanta.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display ="block"

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}



window.addEventListener("load", iniciarJuego)