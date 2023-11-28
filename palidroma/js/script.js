
let word_user = prompt('Inserisci una parola');
let reverse = word_user.split('').reverse().join('');

if(word_user == reverse){
    console.log(word_user + ' è palindromo');
}
else{
    console.log(word_user + ' Non è palindromo');
}


