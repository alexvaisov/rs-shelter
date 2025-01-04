document.addEventListener('DOMContentLoaded', function () {
    let sliderNext = document.getElementById('slider-next');
    let sliderBack = document.getElementById('slider-back');
    let container = document.querySelector('.slider');
    let items = document.querySelectorAll('.card');
    let currentIndex = 0;
    const totalItems = items.length;
    const elementWrapper = document.getElementById('wrapper');
    const styleWrapper = window.getComputedStyle(elementWrapper);
    const widthWrapper = styleWrapper.width;
    console.log(widthWrapper);
    const elementSlider = document.getElementById('slider');
    const styleSlider = window.getComputedStyle(elementSlider);
    const gapSlider = styleSlider.gap;
    console.log(gapSlider.slice(0, -2));
    let sum = gapSlider.slice(0, -2) * 1 + 270;
    const itemWidth = sum;
    console.log(itemWidth);
    let stepItem = null;
    function step() {
        if ((widthWrapper.slice(0, -2) * 1) <= 279) {
            stepItem = 1;
        } else if ((widthWrapper.slice(0, -2) * 1) <= 570) {
            stepItem = 2;
        } else {
            stepItem = 3;
        }
    };
    step();
    console.log(stepItem);

    if (sliderNext) {
        sliderNext.addEventListener('click', function() {
            if (currentIndex >= items.length - stepItem) {
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
            currentIndex = totalItems - stepItem;
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
