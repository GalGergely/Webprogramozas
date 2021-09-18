var ele = document.getElementsByName('nem');
const bujjel = document.querySelector('#bujjel');
ferfi=ele[0];
no=ele[1];
ferfi.addEventListener('click',noIdea);
no.addEventListener('click',noIdea)
function noIdea(){
  if(no.checked)
  {
    bujjel.hidden=false;
  }
  else
  {
    bujjel.hidden=true;
  }
}
