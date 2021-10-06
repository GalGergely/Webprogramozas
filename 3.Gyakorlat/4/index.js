const inp = document.querySelector('#inp')
inp.addEventListener('keydown', keyDown)
function keyDown(e) {
  const allow=['1','2','3','4','5','6','7','8','9','0'];
  if(e.target.className=="szam")
  {
    if(!allow.includes(e.key))
    {
      e.preventDefault();
    }
  }
}