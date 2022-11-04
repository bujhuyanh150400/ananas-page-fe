// Slick image detail
  $('.detail_img-slick').slick({
    slidesToShow: 1,
    arrows:true,
    infinite: true,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="bx bx-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next slick-arrow"><i class="bx bx-chevron-right"></i></button>'
  });


// Select detail sp
const detailTitle = document.querySelector('.detail_sp-title'),
      detailContent = document.querySelector('.detail_sp-box');
detailTitle.addEventListener('click', ()=>{
    detailTitle.classList.toggle('active'); 
    detailContent.classList.toggle('open');
})



// Select size and amount

const optionSizeBtn = document.querySelector('.detail_size_select'),
      optionAmountBtn = document.querySelector('.detail_amount-select'),
      optionsSizes = document.querySelector('.select_size'),
      optionsAmounts = document.querySelector('.amount_select'),
      optionsSize = document.querySelectorAll('.size'),
      optionsAmount = document.querySelectorAll('.amount'),
      headerSize = document.querySelector('.size_choose'),
      headerAmount = document.querySelector('.amount_choose'),
      btnPayment = document.querySelector('.payment'),
      btnCart = document.querySelector('.add_giohang');

optionSizeBtn.addEventListener('click', () => optionsSizes.classList.toggle('open_flex'));
optionAmountBtn.addEventListener('click', () => optionsAmounts.classList.toggle('open_flex'));


optionsSize.forEach(optionSize => {
    optionSize.addEventListener("click", () => {
        let selectOptionSize = optionSize.innerText;
        headerSize.innerText = selectOptionSize;
    })
});
optionsAmount.forEach(optionAmount => {
    optionAmount.addEventListener("click", () => {
        let selectOptionAmount = optionAmount.innerText;
        headerAmount.innerText = selectOptionAmount;
    })
});
btnPayment.addEventListener('click', (e)=>{
    if(headerSize.innerText == 'Chọn size'){
        alert('Vui lòng chọn size')
        e.preventDefault();
    }else if(headerAmount.innerText == 'Chọn số lượng'){
        alert('Vui lòng chọn số lượng')
        e.preventDefault();
    }
});
btnCart.addEventListener('click', (e)=>{
    if(headerSize.innerText == 'Chọn size'){
        alert('Vui lòng chọn size')
        e.preventDefault();
    }else if(headerAmount.innerText == 'Chọn số lượng'){
        alert('Vui lòng chọn số lượng')
        e.preventDefault();
    }
});


