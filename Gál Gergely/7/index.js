
function lnko(a,b) {
    if(a < b)
    {
        let c = a;
        a = b;
        b = c;
    }
    const maradek = a % b;
    for(let i = 0; i < maradek; i++)
    {
        a = b;
        b = maradek;
        maradek = a % b;
    }
return b;
}