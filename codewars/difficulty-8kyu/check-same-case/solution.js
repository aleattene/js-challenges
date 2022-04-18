
function sameCase(charOne, charTwo){

    // DATA INPUT
    const caseOne = charOne.charCodeAt(0)
    const caseTwo = charTwo.charCodeAt(0)

    // UPPERCASE
    if (caseOne >= 65 && caseOne <= 90) {
        if (caseTwo >= 65 && caseTwo <= 90) return 1
        if (caseTwo >= 97 && caseTwo <= 122) return 0
        else return -1
    }
    // LOWERCASE
    else if (caseOne >= 97 && caseOne <= 122) {
        if (caseTwo >= 97 && caseTwo <= 122) return 1
        else if (caseTwo >= 65 && caseTwo <= 90) return 0
        else return -1
    }
    // BOTH NO LETTER
    else return -1
}


module.exports = {
    sameCase
}