let homeCounter = document.getElementById("home-counter")
let guessCounter = document.getElementById("guess-counter")

console.log("homeCounter", homeCounter)
console.log("guessCounter", guessCounter)

// Declarando variables que almacenan los puntos actuales de los equipos
let homePoints = 0
let guessPoints = 0


// Asignando los puntos iniciales con DOM en HTML
homeCounter.innerText = homePoints
guessCounter.innerText = guessPoints


function validateTeamInAdvantage(home, guess) {
    if (home > guess) {
        console.log("El equipo local va ganando")
        homeCounter.style.color = "green"
        guessCounter.style.color = "red"

    } else if (home < guess) {
        console.log("El equipo visitante va ganando")
        homeCounter.style.color = "red"
        guessCounter.style.color = "green"
    }
}
// Implementando funcionalidades a botones al equipo local

/**
 * Función agrega 1 punto al contador del equipo local
 * @returns null
 */
function addOneHome() {
    console.log("agregando +1 al equipo local")
    homePoints += 1

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    homeCounter.textContent = homePoints

    return
}

/**
 * Función que agrega 2 puntos al contador del equipo local
 * @returns null
 */
function addTwoHome() {
    console.log("Agregando +2 al equipo local")
    homePoints += 2

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    homeCounter.textContent = homePoints

    return
}

/**
 * Función que agrega 3 puntos al contador del equipo local
 * @returns null
 */
function addThreeHome() {
    console.log("agregando +3 al equipo local")
    homePoints += 3

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    homeCounter.textContent = homePoints

    return
}


// Implementando funcionalidades a botones al equipo visitante

/**
 * Función agrega 1 punto al contador del equipo visitante
 * @returns null
 */
function addOneGuess() {
    console.log("agregando +1 al equipo visitante")
    guessPoints += 1

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    guessCounter.textContent = guessPoints

    return
}

/**
 * Función que agrega 2 puntos al contador del equipo visitante
 * @returns null
 */
function addTwoGuess() {
    console.log("agregando +2 al equipo visitante")
    guessPoints += 2

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    guessCounter.textContent = guessPoints

    return
}

/**
 * Función que agrega 3 puntos al contador del equipo visitante
 * @returns null
 */
function addThreeGuess() {
    console.log("agregando +3 al equipo visitante")
    guessPoints += 3

    // Actualizando el DOM
    validateTeamInAdvantage(homePoints, guessPoints)
    guessCounter.textContent = guessPoints

    return
}