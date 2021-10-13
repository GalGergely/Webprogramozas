const widthInput = document.querySelector('#width')
const heightInput = document.querySelector('#height')
const generateButton = document.querySelector('#generate-button')
const editorDiv = document.querySelector('#editor')
const editTable = document.querySelector('#edit')
const actual = document.querySelector('#actual')
const colorSelector = document.querySelector('#colorselector')
let SELECTEDCOLOR;
let MATRIX = [];

generateButton.addEventListener('click', onGenerate)
function onGenerate(e) {
    const w = widthInput.valueAsNumber;
    const h = heightInput.valueAsNumber;

    editorDiv.innerHTML = genTable(w, h);
}   

editorDiv.addEventListener('click', onKlick)
function onKlick(e) {
    e.target.style.backgroundColor = SELECTEDCOLOR;
    console.log(e);
}

editTable.addEventListener('click', choseColor)
function choseColor(e) {
    SELECTEDCOLOR=e.target.style.backgroundColor;
    actual.style.backgroundColor=SELECTEDCOLOR;
}

colorSelector.addEventListener('change', colorSelection)
function colorSelection(e) {
    SELECTEDCOLOR=e.target.value;
    actual.style.backgroundColor=SELECTEDCOLOR;
}

//html generator
function genTable(w, h) {
    let str=``
    let row = [];
    str+=`<table class="edit">`;
    for(let i=0; i<h; i++)
    {
        
        str+="<tr>";
        for(let j=0; j<w; j++)
        {
            str+=`<td></td>`;
            row.push("#ffffff");
        }
        str+=`</tr>`;
    }
    MATRIX.push(row)
    str+=`</table>`;
    return str;

}