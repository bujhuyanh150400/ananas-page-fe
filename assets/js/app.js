// login modal
const buyBtn = document.querySelector('.js-open');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const modalCloses = document.querySelectorAll('.js-modal-close');

 //hàm hiển thị modal (thêm class open vào modal)
function showModal () {
    modal.classList.add('open');
};
 //hàm ẩn hiển thị modal (xóa class open trong modal)
function hideModal () {
    modal.classList.remove('open');
};
buyBtn.addEventListener('click', showModal);

// nghe hành vi click vào btn close
for(var modalClose of modalCloses){
    modalClose.addEventListener('click', hideModal);
};
modal.addEventListener('click', hideModal);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});