class Film {
    constructor(cim, hossz, kategoria, ev, rendezo,) {
      this.cim = cim;
      this.hossz = hossz;
      this.kategoria = kategoria;
      this.ev = ev;
      this.rendezo = rendezo;
    }
  }
console.log("a feladat");
const filmek = [];
const starwars = new Film("Star Wars", "sok", "jo", "regen", "en");
filmek.push(starwars);
const avatar = new Film("Avatar", "sok", "jo", "regen", "en, te");
filmek.push(avatar);
for (f in filmek)
{
    console.log(filmek[f]);
}
//b
console.log("b feladat");
for (f in filmek)
{
    if(filmek[f].rendezo.includes(","))
    {
        console.log(filmek[f]);
    }
}