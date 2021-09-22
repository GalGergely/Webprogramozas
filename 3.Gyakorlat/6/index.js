const inp = document.querySelector('#inp')
const out = document.querySelector('#out')
const details = document.querySelector('#details')
const movies=[
    {
        title: 'Avengers',
        year: '2012',
        director: 'Joss Whedon',
        id: 1,
    },
    {
        title: 'Avengers age of ultron',
        year: '2016',
        director: 'Joss Whedon',
        id: 2,
    },
    {
        title: 'Star Wars, New Hope',
        year: '1977',
        director: 'George Lucas',
        id: 3,
    },
];
inp.addEventListener('input', onSearch)
function onSearch(e) {
  //console.log(e);
  const text=inp.value 
  //console.log(text);
  const res=movies.filter(movie => movie.title.includes(text))
  out.innerHTML= res.map(movie => `<li data-id="${movie.id}">${movie.title}</li>`).join('')
}

out.addEventListener('mouseover', onHover);
function onHover(e) {
  if (e.target.matches('li')) {
    const li = e.target;
    // beolvasás
    const id = parseInt(li.dataset.id);
    // feldolgozás
    const movie = movies.find(movie => movie.id === id);
    // kiírás
   details.innerHTML = `
     <p>Title: ${movie.title}</p>
     <p>Director: ${movie.director}</p>
     <p>Year: ${movie.year}</p>
   `
  }
}

