document.addEventListener('DOMContentLoaded', function () {
    let sliderNext = document.getElementById('slider-next');
    let sliderBack = document.getElementById('slider-back');
    let counterButton = document.getElementById('counter');
    let container = document.querySelector('.slider');
    let items = document.querySelectorAll('.card');
    let currentIndex = 0;
    const totalItems = items.length;
    const elementWrapper = document.getElementById('wrapper');
    const styleWrapper = window.getComputedStyle(elementWrapper);
    const widthWrapper = styleWrapper.width;
    const elementSlider = document.getElementById('slider');
    const styleSlider = window.getComputedStyle(elementSlider);
    const gapSlider = styleSlider.gap;
    let sum = gapSlider.slice(0, -2) * 1 + 270;
    const itemWidth = sum;
    let stepItem = null;
    function step() {
        if ((widthWrapper.slice(0, -2) * 1) <= 320) {
            stepItem = 6;
        } else if ((widthWrapper.slice(0, -2) * 1) <= 580) {
            stepItem = 7;
        } else {
            stepItem = sliderNext.disabled = true;
            stepItem = sliderBack.disabled = true;
        }
    };
    step();

    if (sliderNext) {
        sliderNext.addEventListener('click', function () {
            if (currentIndex >= items.length - stepItem) {
                counterButton.textContent = + 1;
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
        counterButton.textContent = (currentIndex + 1) - 1;
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
