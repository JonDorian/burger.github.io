const consist = document.querySelectorAll('.consist');

for (const item of consist) {
  item.addEventListener('click', e=>{
    if(item.classList.contains('active')){
      item.classList.remove('active');
    } else{
      item.classList.add('active');
    }
  })
}
