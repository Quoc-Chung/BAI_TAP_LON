const images = ["image1.img", "image2.img", "image3.img"]; // Danh sách các hình ảnh
let currentIndex = 0; // Chỉ mục hiện tại

function changeSlide(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}
