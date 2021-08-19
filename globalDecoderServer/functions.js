Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
}

function solveForOffset(text, alphabet, offset) {
    let ret = "";

    for (let letter of text) {
        ret += !alphabet.includes(letter) ? letter : alphabet[(alphabet.indexOf(letter) + offset).mod(alphabet.length)];
    }

    return ret;
}

function ceaserCipher(text, alphabet, offset = "All", rtl = false) {
    let ret = "";
    text = text.toLowerCase().split("");
    alphabet = alphabet.split("");    
    if (offset.toString().toLowerCase() !== "all") {
        ret = solveForOffset(text, alphabet, offset)
    } else {
        for (let index = 0; index<alphabet.length; index++) { 
            ret += solveForOffset(text, alphabet, index).toString() + "\n";
        }
    }

    return rtl ? ret.split("").reverse().join("") : ret;
}

//console.log(ceaserCipher("ifmmp", "abcdefghijklmnopqrstuvwxyz", -1));
module.exports = {ceaserCipher};