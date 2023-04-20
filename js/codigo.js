
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra" 
    }else if(jugada == 2){
        resultado = "papel"
    }else if(jugada == 3){
        resultado = "tijera"
    }else{
        resultado = "No valido, has perdido"
    }return resultado
}
let min = 1
let max = 3
let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0

while(victorias < 3 && derrotas < 3){
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    pc = aleatorio(1,3)
    

    alert("Pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE
    if(jugador == pc){
        alert("Empate")
    }else if((jugador == 1 && pc == 3) || (jugador == 3 && pc == 2) || (jugador == 2 && pc == 1)){
        alert("Ganaste")
        victorias += 1
    }else if((jugador == 1 && pc == 2) || (jugador == 2 && pc == 3) || (jugador == 3 && pc == 1)){
        alert("Perdiste")
        derrotas += 1
    }
}

alert("Ganaste :" + victorias + " Perdiste :" + derrotas)

//alert("elegiste: " + jugador)
// ELECCION DEL JUGADOR
    // if(jugador == 1){
    //     alert("Elegiste: piedra") 
    // }else if(jugador == 2){
    //     alert("Elegiste papel")
    // }else if(jugador == 3){
    //     alert("Elegiste tijera")
    // }else{
    //     alert("No valido, has perdido")
    // }
// ELECCION DE LA COMPUTADORA
    // if(pc == 1){
    //     alert("Pc elige: piedra") 
    // }else if(pc == 2){
    //     alert("Pc elige: papel")
    // }else if(pc == 3){
    //     alert("Pc elige: tijera")
    // }
