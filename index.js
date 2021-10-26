

// Global Array
const cats = ["Milo", "Otis", "Garfield"];

//#1
function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Ralph");

//#2
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

//#3
function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

//#4
function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

//#5
function appendCat(name) {
    const copycats = [...cats, name];
    return copycats;
}
appendCat("Broom");

//#6
function prependCat(name) {
    const copycats = [name, ...cats];
    return copycats;
}
prependCat("Arnold");

//#7
function removeLastCat() {
    const copycats = cats.slice(0,-1);
    return copycats;
}
removeLastCat()

//#8
function removeFirstCat() {
    const copycats = cats.slice(1);
    return copycats;
}
removeFirstCat()
