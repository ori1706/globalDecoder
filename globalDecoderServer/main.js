const {ceaserCipher} = require("./functions.js");
let englishText = "ifmmp";
let hebrewText = "אבג";
let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
let hebrewAlphabet = "אבגדהוזחטיכלמנסעפצקרשת"
let offset = -1;
let rtl = true;
console.log(ceaserCipher(hebrewText, hebrewAlphabet, offset, rtl));