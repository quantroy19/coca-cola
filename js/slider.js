var i = 0;
var images = [];
var time = 3000;


//Image list

images[0] = 'img-product/banner1.png';
images[1] = 'img-product/banner2.png';
images[2] = 'img-product/banner3.png';
images[3] = 'img-product/banner4.png';

// change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }


    setTimeout("changeImg()", time);
}

window.onload = changeImg;