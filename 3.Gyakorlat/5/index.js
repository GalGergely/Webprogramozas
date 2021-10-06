const elte = document.querySelector('#elte')
const webp = document.querySelector('#webp')
const jsref = document.querySelector('#jsref')
const jshom = document.querySelector('#jshom')
lookForElte(elte)
lookForElte(webp)
lookForElte(jsref)
lookForElte(jshom)

function lookForElte(e) {
    //e.preventDefault()
    let str=e.href;
    if(str.includes("elte"))
    {
      e.style="pointer-events: none"
    }
}