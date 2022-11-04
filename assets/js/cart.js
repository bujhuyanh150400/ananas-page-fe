// select

const optionSizeBtn = document.querySelector('.detail_size_select'),
      optionAmountBtn = document.querySelector('.detail_amount-select'),
      optionsSizes = document.querySelector('.select_size'),
      optionsAmounts = document.querySelector('.amount_select'),
      optionsSize = document.querySelectorAll('.size'),
      optionsAmount = document.querySelectorAll('.amount'),
      headerSize = document.querySelector('.size_choose'),
      headerAmount = document.querySelector('.amount_choose'),
      pmPrice = document.querySelector('.pm_price'),
      totalPrice = document.querySelector('.total_price')

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

// Total money
