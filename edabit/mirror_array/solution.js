

function mirror(arr) {
    return [...arr].concat([...arr].reverse().slice(1))
}


module.exports = {
    mirror
}