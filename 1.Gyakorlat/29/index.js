const temperatures = [12.3, 23.4, 11.2, -4.5, -3];
function fagyottnapok(temperatures) {
 const out = []
 for(let i = 0; i < temperatures.length; i++)
    if(temperatures[i] < 0)
    {
        out.push(temperatures[i]);
    }
return out;
}
console.log("Szia Bence");
console.log(fagyottnapok(temperatures) );
console.log(temperatures.filter(t => t < 0) );
console.log(temperatures.map(t => `${t} C`) );
console.log(temperatures.reduce((s, t) => s+t, 0) );