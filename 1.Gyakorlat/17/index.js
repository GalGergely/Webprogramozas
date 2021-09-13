const matrix = [[2,4,2],[2,4,0],[3,2,0]];
function matrixcheck(matrix)
{
    for(let i=0; i < matrix.length; i++ )
    {
        for(let f=0; f < matrix[0].length; f++ )
        {
            if(matrix[i][f]==0)
            {
                console.log((i+1)+"edik sor "+(f+1)+"edik oszlop");;
            }
        }
    }
    return true;
}

console.log(matrixcheck(matrix));