//a
const homerseklet = [15,12,15,23,26,27,22,9]
const homerseklet2 = [15,30,55]
console.log(homerseklet.reduce((s, t) => s + t, 0) / homerseklet.length);
//b
function nagyobbminthuszonhet(tomb) {
  let cnt = 0;
  for(let i=0; i<tomb.length; i++)
  {
    if(tomb[i]>=26)
    {
        cnt++;
    }
  }
  return cnt;
}
console.log(nagyobbminthuszonhet(homerseklet));  
//c
console.log(homerseklet.reduce((max, t) => t > max ? t : max, -Infinity) );
//d
console.log(homerseklet.indexOf(homerseklet.reduce((min, t) => t < min ? t : min, Infinity)));
//e
console.log(homerseklet.indexOf(homerseklet.find(t => t==23)));
//f
function hoingas(tomb) {
    let cnt = 0;
    let prev = Infinity;
    let res = false;
    for(let i=0; i<tomb.length; i++)
    {
      if(tomb[i]-prev>=3 || tomb[i]-prev<=-3 )
      {
          res = true;
      }
      prev = tomb[i];
      cnt = i;
    }
    return res;
  }
console.log(hoingas(homerseklet)); 
//g
