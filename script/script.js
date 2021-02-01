const num = 266219;
let digits = num.toString().split('');
let realDigits = digits.map(Number).reduce(function(product, value) { 
    return product * value; 
});
let degreeDigits = realDigits ** 3;


console.log(realDigits, degreeDigits, String(degreeDigits).slice(0,2));
console.log(degreeDigits);
console.log(String(degreeDigits).slice(0,2));
