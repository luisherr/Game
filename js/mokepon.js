let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3 
let vidasEnemigo = 3


function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('select-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function SeleccionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById('select-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('select-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert("Selecciona una mascota")
    }

    SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    }   else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }   else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() { 
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE')
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('PERDISTE')
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    // Revisar las vidas
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES! GANASTE ')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, Perdiste :(')
    } 
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataqueJugador = document.getElementById('ataque-jugador')
    let ataqueEnemigo = document.getElementById('ataque-enemigo')

    let notificacion = document.createElement('p')    
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador.outerHTML
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo.outerHTML

    sectionMensajes.appendChild(notificacion)
    ataqueJugador.appendChild(nuevoAtaqueJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)