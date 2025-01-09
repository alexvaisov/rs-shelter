document.querySelectorAll('.menu-link').forEach(function(element){
    element.onclick = closeBurger;
});

function closeBurger(){
    const checkbox = document.getElementById('menu-toggle');
    checkbox.checked = false;
}