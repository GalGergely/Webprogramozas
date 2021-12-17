
const input = document.querySelector('#in')
const outChars = document.querySelector('#outChars')
const outNums = document.querySelector('#outNums')


input.addEventListener('input', onKlick)
function onKlick(e) {
    let array=[];
    let counter=[];
    let vanbenne = false;
    const int = 0
    string=input.value;
    for(let i=0; i<string.length; i++){
        for(let j=0; j<array.length; j++) {
            if(string.charAt(i)==array[j]){
                vanbenne=true;
            }
        }
        if(vanbenne==false) {
            array.push(string.charAt(i));
        }
        vanbenne=false
    }
    console.log(array);
    for(let j=0; j<array.length; j++) {
        counter.push(int);
    }
    
    
    for(let i=0; i<array.length; i++){ //3
        for(let j=0; j<string.length; j++) { //6
            if(string.charAt(j)==array[i]){
                counter[i]++;
            }
        }
    }
    outChars.value=array;
    outNums.value=counter;
}
