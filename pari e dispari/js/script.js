// Punto 3
function randomNumber(){
    let number = Math.floor(Math.random() * 5 + 1);
    return number;
}

// Punto 5
function oddOrEven(num1, num2){
    if((num1 + num2) %2 == 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}

// Punto 1
let user = prompt('Scegli pari o dispari');
console.log('hai scelto: ' + user);

// RICHIAMO LA FUNZIONE RANDOMNUMBER
let computer = randomNumber();
console.log('il computer ha scelto: ' + computer);

// Punto 2
let user_number = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('il tuo numero è: ' + user_number);

// Punto 4
let somma = user_number + computer;
console.log('La somma dei due numeri è: ' + somma);

// Punto 6
let result = oddOrEven(user_number,computer);

if(result == user){
    console.log('Hai vinto');
}
else{
    console.log('Hai perso');
}






   