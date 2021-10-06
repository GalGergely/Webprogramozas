const faq = document.querySelector('#faq')
console.log(faq);
faq.addEventListener('click', onHover);
function onHover(e) {
  if (e.target.matches('h2')) {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
}