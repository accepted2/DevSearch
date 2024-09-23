// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
});
let alertWrapper = document.querySelector('.alert')
let alertClose = document.querySelector('.alert__close')

if(alertWrapper) {
  console.log('Yea');
  alertClose.addEventListener('click',() =>{
    alertWrapper.style.display= 'none'
    console.log(No);
 //alertWrapper.style.display = 'none'
  }
 )
}