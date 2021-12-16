

function switchGravityOn(matrix){
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[i].length; j >= 0; j-- ) {
            if (matrix[i][j] === '#') {
                matrix[i][j] = "-";
                let k = matrix.length - 1;
                while (k >= 0) {
                    if (matrix[k][j] !== "#") {
                        matrix[k][j] = "#";
                        break;
                    }
                    k--;
                }
            }
        }
    }
    return matrix
}