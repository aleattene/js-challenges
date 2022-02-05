

function sumMissingNumbers(arr){
    let sum = 0;
    for (let min = Math.min(...arr); min <= Math.max(...arr); min++) {
        if (!arr.includes(min)) {
            sum += min;
        }
    }
    return sum;
}


module.exports = {
    sumMissingNumbers
}