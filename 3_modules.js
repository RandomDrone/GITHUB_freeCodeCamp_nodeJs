//MODULES


const names = require("./4_names.js"); //przypisanie zmiennych z modulu -> sposob #1
const {susan, asia, dong} = require('./4_1_otherNames.js'); //przypisanie zmiennych z modulu -> sposob #2
const sayhi = require("./5_utils.js");
const data = require('./6_names_alternativeFlavor');
require('./7_mindGranade'); // sam import mudulu moze wywolac funckje znajdujaca sie w nim

// sayhi('Susana FixedLocally');
// sayhi(names.johnyB);
// sayhi(susan)
// sayhi(asia)  
// sayhi(dong)
