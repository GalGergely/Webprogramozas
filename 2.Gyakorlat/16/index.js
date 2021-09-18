const catalog = [
    {
        author: 'JK Rowling',
        title: 'Harry Potter',
        year: '1998',
    },
    {
        author: 'JK Rowling',
        title: 'Harry Potter2',
        year: '1998',
    },
    {
        author: 'JK Rowling',
        title: 'Harry Potter3',
        year: '1960',
    }
];
function booksFromYear(catalog, year) {
    return catalog.filter(book => book.year == year);
}

const button = document.querySelector('#search');
const yearinp = document.querySelector('#year')
const lista = document.querySelector('#list')
button.addEventListener('click', onSearch);
function onSearch() {
    const year = yearinp.value;
    const res = booksFromYear(catalog, year);
    lista.innerHTML = listGenerator(res)

}

function listGenerator(res) {
    return res.map(book => `<li>${book.author} : ${book.title}</li>`).join('');
}
