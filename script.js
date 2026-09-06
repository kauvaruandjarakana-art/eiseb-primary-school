const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>nav.classList.toggle('show'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
document.getElementById('year').textContent=new Date().getFullYear();
function showMessage(event){
  event.preventDefault();
  document.getElementById('form-message').textContent='Thank you! Please connect this form to the school email or a form service before publishing.';
}
