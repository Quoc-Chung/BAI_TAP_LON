// Di chuyen anh bang cach di chuyen khoang cach dung bang mot anh 
let list =document.querySelector('.slider .list');
// Quan lí cac the anh 
let items = list.querySelectorAll('.slider .list .item');
// quan li cac nut tròn
let dots = document.querySelectorAll('.slider .dots li');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length -1;

next.onclick =function(){
   if(active+1 >lengthItems) {
    active = 0;
   }
   else{
    active = active + 1;
   }
    reloatSlider();
}
function reloatSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left= -checkLeft + 'px';
}