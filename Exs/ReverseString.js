// Create function that reverse a String:
// Hi mu name is jaafar
// rafaaj si eman um iH

function reverse(phrase){
    let new_phrase = '';
    for (let i = phrase.length -1 ; i >= 0; i --) {
        new_phrase += phrase[i];
    }
    return new_phrase;
}

result = reverse(1);
console.log(result);