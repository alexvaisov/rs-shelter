document.addEventListener('DOMContentLoaded', function () {
    let sliderNext = document.getElementById('slider-next');
    let sliderBack = document.getElementById('slider-back');
    let container = document.querySelector('.slider');
    let items = document.querySelectorAll('.card');
    let currentIndex = 0;
    const totalItems = items.length;
    const itemWidth = 285;

    if (sliderNext) {
        sliderNext.addEventListener('click', function() {
            if (currentIndex >= items.length - 3) {
                currentIndex = 0;
                container.style.transition = 'none';
                container.style.transform = `translateX(0px)`;
                setTimeout(function(){
                    container.style.transition = 'transform 0.9s ease';
                }, 50);
            } else {
                currentIndex++;
                container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        });
    };

    sliderBack.addEventListener('click', function () {
        if (currentIndex <= 0) {
            currentIndex = totalItems - 3;
            container.style.transition = 'none';
            container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            setTimeout(function() {
                container.style.transition = 'transform 0.9s ease';
            }, 50);
        } else {
            currentIndex--;
            container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });
    
});
