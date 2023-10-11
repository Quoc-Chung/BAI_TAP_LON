// Lưu  trữ biến bật tức kích vào cái này thì sẽ bật 
const adresss = document.querySelector('#Off-setting')
const Dong=document.querySelector('#adress-close')
console.log(Dong)
// Thêm sự kiện click 
adresss.addEventListener("click",function(){
    // Hiển thị form
    document.querySelector('.adress-form').style .display="flex"
})

Dong.addEventListener("click",function(){
    //Đóng form
    document.querySelector('.adress-form').style .display="none"
})
// Làm slide của sự kiện 
const rightbtn = document.querySelector('.fa-chevron-right-one')
const leftbtn = document.querySelector('.fa-chevron-left-one')
const imgNumber_one = document.querySelectorAll('.slider-product-one-content-items')

let index = 0
rightbtn.addEventListener("click",function(){
    index =index + 1
    if(index > imgNumber_one.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

leftbtn.addEventListener("click",function(){
    index =index - 1
    if(index <=0){
        index=imgNumber_one.length -1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})




