

function lovesMe(petals) {
    const arr = [];
    for (let i = 1; i <= petals; i++) {
        i % 2 === 1 ? arr.push("Loves me, ") : arr.push("Loves me not, ");
    }
    const last_petal = (arr[arr.length - 1]).substr(0,(arr[arr.length - 1]).length - 2).toUpperCase();
    return  arr.slice(0, arr.length - 1).join("") + last_petal;
}


module.exports = {
    lovesMe
}