

function points(games) {

    // Score Counter
    let resultScore = 0

    // Check values for each match
    games.map(result => {
        if (parseInt(result[0]) > parseInt(result[2])) {
            resultScore += 3
        }
        else if (parseInt(result[0]) === parseInt(result[2])) {
            resultScore += 1
        }
    });

    // Return score Counter
    return resultScore
}

module.exports = {
    points
}