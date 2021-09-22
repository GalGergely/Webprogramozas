const temperatures = [2.3, 23.4, 11.2, -1];
function fagyottnapok(temperatures) {
 const out = []
 for(let i = 0; i < temperatures.length; i++)
    if(temperatures[i] < 0)
    {
        out.push(temperatures[i]);
    }
return out;
}
//na ezt nem csinaljuk elvileg
console.log("Szia Bence");
console.log(fagyottnapok(temperatures) );
console.log(temperatures.filter(t => t < 0) );
console.log(temperatures.map(t => `${t} C`) );
console.log(temperatures.reduce((s, t) => s + t, 0) / temperatures.length);
console.log(temperatures.reduce((max, t) => t > max ? t : max, -Infinity) );
console.log(Math.max(...temperatures) );
console.log(temperatures.filter(t => t < 20).length);
console.log(temperatures.reduce((count, t) => t < 20 ? count+1 : count+0, 0));
console.log(temperatures.some(t => t > 40) );

//egyeni gyakorlas
//F
console.log(temperatures.every(t => t > 0))
//G
console.log(temperatures.find(t => t > 10));