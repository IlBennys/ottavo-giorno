const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
]

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
console.log("excercise 1")
const characters = [""]

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla propriet?? "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
console.log("excercise 2")
for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name)
}

console.log(characters)
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
console.log("excercise 3")

const femaleCharacters = []
for (let i = 0; i < starWarsCharacters.length; i++) {
  let personaggiosingolo = starWarsCharacters[i]

  if (personaggiosingolo.gender === "female") {
    delete personaggiosingolo.height
    delete personaggiosingolo.eye_color
    delete personaggiosingolo.name
    delete personaggiosingolo.birth_year
    delete personaggiosingolo.hair_color
    delete personaggiosingolo.height
    delete personaggiosingolo.mass

    femaleCharacters.push(personaggiosingolo)
  }
}

console.log(femaleCharacters)

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come propriet??: blue, yellow, brown, red, blue-gray.
  ognuna di queste propriet?? contiene un array vuoto*/

console.log("excercise 4")
const eyeColor = {
  blue: [""],
  yellow: [""],
  brown: [""],
  red: [""],
  "blue-gray": [""],
}

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale propriet?? inserire il personaggio
*/

console.log("excercise 5")

for (let i = 0; i < starWarsCharacters.length; i++) {
  let coloreocchi = starWarsCharacters[i].eye_color
  switch (coloreocchi) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i])
      break
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i])
      break
    case "blu-grey":
      eyeColor["blue-gray"].push(starWarsCharacters[i])
      break
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i])
      break
    case "red":
      eyeColor.red.push(starWarsCharacters[i])
    default:
      console.log("nessun colore")
  }
}

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
const massatot = []

for (let i = 0; i < starWarsCharacters.length; i++) {
  let masseAdded = starWarsCharacters[i].mass
  masseAdded.push(starWarsCharacters.mass)
}
let i = 0
let chtmass = 0
while (i < masseAdded.length) {
  chtmass = chtmass + masseAdded[i]
  console.log(masseAdded)
}
/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa ?? inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa ?? uguale a 500 stampa in console: "Ship is half loaded",
Se la massa ?? superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa ?? superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa ?? superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log("excercise 7")
const massaastronave = 400

switch (true) {
  case massaastronave < 500:
    console.log("Ship is under loaded")
  case massaastronave === 500:
    console.log("Ship is half loaded")
    break
  case massaastronave > 700:
    console.log("Warning: Load is over 700")
    break
  case massaastronave > 900:
    console.log("Critical Load: Over 900")
    break
  case massaastronave > 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!")
    break
  default:
    console.log("impossibile calcolare massa")
}

/* ESERCIZIO 8

Usa un for loop per cambiare il valore della propriet?? "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
console.log("excercise 8")

for (let i = 0; i < starWarsCharacters.length; i++) {
  let oggettoInterno = starWarsCharacters[i]

  switch (oggettoInterno.gender) {
    case "n/a":
      oggettoInterno.gender = "robot"
      console.log("?? un robot")
      console.log(starWarsCharacters[i].name, starWarsCharacters[i].gender)
      break
    default:
      console.log("non ?? un robot")
  }
}
console.log(starWarsCharacters)
/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno pi?? for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la propriet?? length di "characters" prima e dopo l'operazione
*/

/* EXTRA ESERCIZIO 10

Crea una funzionalit?? che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le propriet?? in modo discorsivo
*/
