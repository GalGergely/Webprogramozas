const widthInput = document.querySelector('#width')
const heightInput = document.querySelector('#height')
const generateButton = document.querySelector('#generate-button')
const editorDiv = document.querySelector('#editor')

generateButton.addEventListener('click', onGenerte)
function onGenerate(e) {
    const w = widthInput.valueAsNumber;
    const h = heightInput.valueAsNumber;

    editorDiv.innerHTML = genTable(w, h);
}   

//html generator
function genTable(w, h) {
    return `
    <table class="edit">
    ${new Array(h).fill(0).map(e => `
    <tr>
    ${(new Array(w).fill(0).map(e => {``}))}
    </tr>
    `).join('')}
    </table>
    `;
}