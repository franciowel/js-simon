// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// // START

// mostro all'user/player una stringa di 5 numeri
let rememberThis = generateNumbers(5, 1, 100)
alert(rememberThis);

// dopo 30 secondi dalla chiusura della finestra chiedo all'user i numeri
const clock = setTimeout(yourNumbers, 30000);

// chiedo all'user il numero 5 volte
function yourNumbers(){
    // creo un array vuoto da popolare con yourNumb e in futuro da paragonare a rememberThis
    const userMemory = [];
    for (let i=0; i < 5; i++) {
        // richiedo i numeri al player
        let userNumb = parseInt(prompt('quale numero ricordi?'));
        // confrontiamo i SVGAnimatedNumberList, se coincidono push in userMemory
        if(rememberThis.includes(userNumb) && !userMemory.includes(userNumb)) {
            userMemory.push(userNumb);
        }
        console.log(userMemory)
    }

    // mando un messaggio finale all' user mostrando i numeri azzeccati e il suo punteggio
    const finalMex = `hai indovinato ${userMemory.length} numeri. ${userMemory}`;
    alert(finalMex);
}

// FUNZIONA CHE CREA LA STRINGA DA MEMORIZZARE
function generateNumbers(numOfElem, rangeMin, rangeMax) { 
    let randomNumArray = [];
    while(randomNumArray.length < numOfElem) {
        const randomNum = getRndInteger(rangeMin, rangeMax);
        if(!randomNumArray.includes(randomNum)) {
            randomNumArray.push(randomNum);
        }
    }
    return randomNumArray;
}

// FUNZIONE CHE GENERA NUM CASUALI
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}