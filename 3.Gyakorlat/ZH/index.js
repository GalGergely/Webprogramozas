const contacts = document.querySelector('#contacts')
contacts.addEventListener('click', kattintas4);
function kattintas(e) {
if(e.target.matches('button'))
{
  console.log(e.target.innerHTML);
  console.log(e.target.dataset.toggle);
}
}
function kattintas2(e) {
  if(e.target.matches('button'))
  {
    console.log(e.target.parentElement.parentElement.querySelector('p.name').innerHTML)
  }
}
function kattintas3(e) {
  if(e.target.matches('button'))
  {
    e.target.parentElement.parentElement.querySelector('p.email').hidden = !e.target.parentElement.parentElement.querySelector('p.email').hidden
  }
}
function kattintas4(e) {
  if(e.target.matches('button'))
  {
    const str="p."+e.target.dataset.toggle;
    e.target.parentElement.parentElement.querySelector(str).hidden = !e.target.parentElement.parentElement.querySelector(str).hidden
  }
}