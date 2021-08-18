function solveForOffset(text, alphabet, offset) {
    let ret = "";

    for (let letter of text) {
        ret += !alphabet.includes(letter) ? letter : alphabet[(alphabet.indexOf(letter) + offset) % alphabet.length];
    }

    return ret;
}

function ceaserCipher(text, alphabet, offset = "All") {
    let ret = "";
    text = text.toLowerCase().split("");
    alphabet = alphabet.split("");
    if (offset !== "All") {
        ret = solveForOffset(text, alphabet, offset)
    } else {
        for (let index = 0; index<alphabet.length; index++) { 
            ret += solveForOffset(text, alphabet, index).toString() + "\n";
        }
    }

    return ret;
}

console.log(ceaserCipher("ifmmp", "abcdefghijklmnopqrstuvwxyz", -1));