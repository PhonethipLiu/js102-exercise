console.log("Hello, main.js");

let skyIsBlue = true;
if (skyIsBlue) {
    console.log("yeah the sky is blue");
} else {
    console.log("hmmm, what color is the sky?");
}

let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];
let jediText = "";
// empty string is undefined

// jedi.push("Phonethip");
// jedi.unshift("Brenda");
// jedi.shift();
// jedi.pop();

console.log("how many jedi", jedi.length);

for (let x = 0; x < jedi.length; x++) {
    console.log("what x", x);
    console.log(jedi[x]);
    // jediText = "<li> What is this: " + jedi[x] + "</li>";
    jediText += `<li> ${jedi[x]}</li>`;
    // backtic ` is a temperate literal string`
    console.log("jediText", jediText);
}

document.getElementById("demo").innerHTML = jediText;


let colors = ["red", "yellow", "blue", "green", "orange", "purple"];
let reverseColors = colors.reverse();

console.log("reverse colors", reverseColors);
let sortedArray = colors.sort();
// this sortedArray alphabetised the colors
console.log("sorted color", sortedArray);

let numbers = [2, 4, 100, 33, 54, 1, 6];
// console.log("numbers sorted", numbers.sort());
console.log("numbers", numbers);

let sortedNumbers = numbers.sort(function(first, second) {
    // console.log("first:", first, "second:", second);
    // console.log("first minus second", first-second);
    // console.log("change", numbers);
    return first - second;
});

let joinedColors = colors.join(" ");
console.log(joinedColors);

let fruits = ["Peaches", "Oranges", "Lemons", "Banana", "Mango"];
let citrus = fruits.slice(1,3);
console.log ("citrus", citrus);
console.log("fruits", fruits);

let evenOdds = ["middle"];
for (let i = 100; i >= 0; i--){
    console.log("i modulus", i , i % 3);
    // modulus finds the remainder
    if (i %2 === 0){
        evenOdds.unshift(i);
    }else{
        evenOdds.push(i);
    }
    }

console.log("evenOdds", evenOdds);













