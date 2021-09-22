const matrix = [[2,4],[2,4]];
function matrixcheck(matrix)
{
    for(let i=0; i < matrix.length; i++ )
    {
        for(let f=0; f < matrix[0].length; f++ )
        {
            if(matrix[i][f]%2!=0)
            {
                return false;
            }
        }
    }
    return true;
}

console.log(matrixcheck(matrix));