
function whoIsTheHero(namesAndNumbers) {

    // List of numbers (type: array)
    const nums = Object.values(namesAndNumbers);

    // Product of the numbers contained in the list (type: number int)
    const productNums = nums.reduce((total, value) => total * value);

    // Divisors of the product of numbers (type: array)
    const divisors = [];
    const middle = Math.floor(productNums/2) + 1;
    for (let i = 1; i < middle; i++) if (productNums % i === 0) divisors.push(i);
    divisors.push(productNums);

    // Divisors number (type: number int)
    const position = divisors.length % 10;

    // Name to display (type: string)
    const name = (Object.keys(namesAndNumbers))[position];

    return `Good-Bye, Hero ${name}! We'll take care of your children and your wife.`;
}


module.exports = {
    whoIsTheHero
}


//console.log(whoIsTheHero({John:1,Tom:2,Jerry:6,Mike:1,Abc:3,Def:1,Ghi:1,Jkl:1,Mno:1,Voile:1}))