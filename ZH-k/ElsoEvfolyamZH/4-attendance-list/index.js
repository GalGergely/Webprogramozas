const table = document.querySelector('table');
const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const cells = document.querySelectorAll('td');

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.sectionRowIndex,
  }
}

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function (event) {
    console.log('asd');
    if (event.target.firstChild != null) {
      event.target.firstChild.focus();
    }
  })
}

for (let i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].addEventListener('input', function (event) {
    if (event.target.parentElement.classList.value === '') {
      event.target.parentElement.classList.add("present");
      event.target.focus()
    } else {
      event.target.parentElement.classList.remove("present");
      event.target.focus()
    }
  });
  if (checkBoxes[i].checked) {
    checkBoxes[i].parentElement.classList.add("present");
  }
}
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    console.log(xyCoord(document.activeElement.parentElement));
    
  }
  else if (e.keyCode == '40') {
    console.log(xyCoord(document.activeElement.parentElement));
  }
  else if (e.keyCode == '37') {
    console.log(xyCoord(document.activeElement.parentElement));
    document.activeElement.parentElement.previousElementSibling.firstChild.focus()

  }
  else if (e.keyCode == '39') {
    console.log(xyCoord(document.activeElement.parentElement));
    document.activeElement.parentElement.nextElementSibling.firstChild.focus()
  }
}
  function refresh() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }