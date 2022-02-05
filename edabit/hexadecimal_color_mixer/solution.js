

function hexColorMixer(colors) {

    const reds = [];
    const greens = [];
    const blues = [];

    colors.forEach(color => {
        reds.push(parseInt(color.slice(1,3),16));
        greens.push(parseInt(color.slice(3,5),16));
        blues.push(parseInt(color.slice(5,7),16));
    });

    const sum_reds = reds.reduce((a, b) => a + b)
    const sum_greens = greens.reduce((a, b) => a + b)
    const sum_blues = blues.reduce((a, b) => a + b)

    const redAvg = (Math.round(sum_reds / reds.length)).toString(16).toUpperCase().padStart(2,"0")
    const greenAvg = (Math.round(sum_greens / greens.length)).toString(16).toUpperCase().padStart(2,"0")
    const blueAvg = (Math.round(sum_blues / blues.length)).toString(16).toUpperCase().padStart(2,"0")

    return '#' + redAvg + greenAvg + blueAvg
}


module.exports = {
    hexColorMixer
}

