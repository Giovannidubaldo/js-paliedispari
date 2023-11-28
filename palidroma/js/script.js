// Punto 2
function wordReverse(a,b){
    if(a == b){
        return 'è palindromo'
    }
    else{
        return 'non è palindromo'
    }
}

// Punto 1
let word_user = prompt('Inserisci una parola');
console.log(word_user)

// Punto 2
let reverse = word_user.split('').reverse().join('');
console.log(reverse)

// RICHIAMO LA FUNZIONE wordReverse
let result = wordReverse(word_user,reverse);
console.log(result);



