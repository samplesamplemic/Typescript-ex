"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// Add types to this function declaration.
function doubleThePopulation(value) {
    if (typeof value === 'number') {
        return value * 2;
    }
}
// Correct or remove the function calls which cause type errors.
doubleThePopulation(5);
doubleThePopulation("6.12");
doubleThePopulation(8526);
doubleThePopulation(false);
// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.
function languagesSpoken(country, language1, language2) {
    if (language2 === undefined) {
        language2 = '';
    }
    console.log("The languages spoken in ".concat(country, " are:"));
    console.log(language1);
    console.log(language2);
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
