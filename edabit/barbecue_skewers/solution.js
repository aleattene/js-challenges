

function bbqSkewers(arr) {
    const result = [0, 0]
    arr.forEach(elem => {
        elem.includes("x") ? result[1]++ : result[0]++;
    });
    return result
}


module.exports = {
    bbqSkewers
}