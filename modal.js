document.querySelectorAll('.card__but').forEach(function(element){
    element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function(element){
    element.onclick = closeModal;
});

document.querySelectorAll('.modal').forEach(function(element){
    element.onclick = closeModalWrap;
});


function showModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.body.style.background = 'rgba(0, 0, 0, 0.575)';

};

function closeModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.add('hide');
    document.body.style.overflow = '';
    document.body.style.background = '';
};

function closeModalWrap(){
    this.classList.add('hide');
    document.body.style.overflow = '';
    document.body.style.background = '';
};
