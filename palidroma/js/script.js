// Punto 3
function wordReverse(word){

    // Punto 2
    let reverse = word.split('').reverse().join('');

    if(reverse == word){
        return true
    }
    else{
        return false
    }
}

// Punto 1
let word_user = prompt('Inserisci una parola');

// RICHIAMO LA FUNZIONE wordReverse
let result = wordReverse(word_user);

if(result){
    console.log('è palindromo');
}
else{
    console.log('non è palindromo');
}



