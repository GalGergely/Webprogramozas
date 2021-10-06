const value = document.querySelector('#value')
const range1 = document.querySelector('#range')
const range2 = document.querySelector('#range2')
const range3 = document.querySelector('#range3')
range1.addEventListener('input', valueDisplay);
range2.addEventListener('input', valueDisplay);
range3.addEventListener('input', valueDisplay);
function valueDisplay(e) {
  if(e.target.className=="display-value")
  {
    value.value=this.value
  }
} 