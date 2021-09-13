const matrix = [[2,4,-2],[2,-4,0],[-3,2,0]];
function matrixcheck(matrix)
{
    const list = []
    for(let i=0; i < matrix.length; i++ )
    {
        for(let f=0; f < matrix[0].length; f++ )
        {
            if(matrix[i][f]<0)
            {
                list.push(matrix[i][f]);
            }
        }
    }
    return list;
}

console.log(matrixcheck(matrix));