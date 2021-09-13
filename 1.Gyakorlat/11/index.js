const numbers = [12.3, 23.4, 11.2, -11];
function szamok()
{
    for(const n of numbers)
    {
        if (n < 0)
        {
            return n;
        }
    }
    return false;
}
console.log(szamok());