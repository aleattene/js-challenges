

function sumMissingNumbers(arr){
    let arr_sorted = arr.sort((a,b) => { return a - b })
    let sum = 0
    for (let min = arr_sorted[0]; min <= arr_sorted[arr_sorted.length -1]; min++) {
        if (!arr.includes(min)) { sum += min }
    }
    return sum
}

module.exports = {
    sumMissingNumbers
}