// Info validation form
const 
    nameIp = document.querySelector('.input_name'),
    phoneIp = document.querySelector('.input_phone'),
    adressIp = document.querySelector('.input_adress'),
    nameWr = document.querySelector('.wr-name'),
    phoneWr = document.querySelector('.wr-phone'),
    adressWr = document.querySelector('.wr-adress');

nameIp.addEventListener("keyup", ()=>{
    if(nameIp.value === ""){
        nameWr.classList.add('open-block')
    }else{
        nameWr.classList.remove('open-block')
    };
});
phoneIp.addEventListener("keyup", ()=>{
    if(phoneIp.value === ""){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Vui lòng nhập số điện thoại';
    }
    else if(isNaN(phoneIp.value)){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Chỉ được nhập số';
    }else if(phoneIp.value.length > 10){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Số điện thoại không được quá 10 số';
    }else if(phoneIp.value.length < 9){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Số điện thoại không được nhỏ hơn 9 số';
    }else{
        phoneWr.classList.remove('open-block');
    }
});
adressIp.addEventListener("keyup", ()=>{
    if(adressIp.value === ""){
        adressWr.classList.add('open-block')
    }else{
        adressWr.classList.remove('open-block')
    };
});

// Select city and district
const infoCity = document.querySelector('.info_City'),
      infoDistrict = document.querySelector('.info_District'),
      cityChoose = document.querySelector('.city_choose'),
      haNoi = document.querySelector('.info_choose-Hanoi'),
      HoChiMinh = document.querySelector('.info_choose-HCM'),
      citiLi = document.querySelectorAll('.cityli'),
      hanoiLi = document.querySelectorAll('.hanoili'),
      hcmLi = document.querySelectorAll('.hcmli'),
      titleCity = document.querySelector('.title_city'),
      titleDistrict = document.querySelector('.title_district');

infoCity.addEventListener('click', () => cityChoose.classList.toggle('open_flex'));
citiLi.forEach(citi => {
    citi.addEventListener("click", () => {
        let selectCity = citi.innerText;
        titleCity.innerText = selectCity;
        titleCity.style.fontWeight ='700'
    })
});

infoDistrict.addEventListener('click', () => {
    if(titleCity.innerText =='Hà Nội'){
        haNoi.classList.toggle('open_flex');
    }else if(titleCity.innerText =='Hồ Chí Minh'){
        HoChiMinh.classList.toggle('open_flex');
    };
});

hanoiLi.forEach(hanoi => {
    hanoi.addEventListener("click", () => {
        let selectHanoi = hanoi.innerText;
        titleDistrict.innerText = selectHanoi;
        titleDistrict.style.fontWeight ='700'
    })
});
hcmLi.forEach(hcm => {
    hcm.addEventListener("click", () => {
        let selectHCM = hcm.innerText;
        titleDistrict.innerText = selectHCM;
        titleDistrict.style.fontWeight ='700'
    })
});

// Payment card
const 
    paymentCard = document.getElementById('payment_onl'),
    paymentBox = document.querySelector('.container'),
    cancelPayment = document.querySelector('.cancel-btn'),
    numberCardIp = document.querySelector('.card-number-input'),
    nameCardIp = document.querySelector('.card-holder-input'),
    monthCardIp = document.querySelector('.month-input'),
    yearCardIp = document.querySelector('.year-input'),
    yesPayment = document.querySelector('.yes-btn');

paymentCard.addEventListener('click' , ()=> {
    paymentBox.classList.add('open_flex');
});
cancelPayment.addEventListener('click',()=>{
    paymentBox.classList.remove('open_flex');
})
numberCardIp.oninput = () =>{
    document.querySelector('.card-number-box').innerText = numberCardIp.value;
}
nameCardIp.oninput = () =>{
    document.querySelector('.card-holder-name').innerText = nameCardIp.value;
}
monthCardIp.oninput = () =>{
    document.querySelector('.exp-month').innerText = monthCardIp.value;
}
yearCardIp.oninput = () =>{
    document.querySelector('.exp-year').innerText = yearCardIp.value;
}
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
};

yesPayment.addEventListener('click',()=>{
    if(numberCardIp.value === ""){
        document.querySelector('.number_card-sp').style.color = 'red';
        document.querySelector('.number_card-sp').innerText = "Mời bạn nhập số thẻ"; 
    }if(isNaN(numberCardIp.value)){
        document.querySelector('.number_card-sp').style.color = 'red';
        document.querySelector('.number_card-sp').innerText = "Số thẻ chỉ được nhập số"; 
    }if(nameCardIp.value === ""){
        document.querySelector('.name_card-sp').style.color = 'red';
        document.querySelector('.name_card-sp').innerText = "Mời bạn nhập tên";
    }if(document.querySelector('.exp-month').value == ""){
        document.querySelector('.month_card-sp').style.color = 'red';
        document.querySelector('.month_card-sp').innerText = "Hãy chọn tháng";
    }if(document.querySelector('.exp-year').value == ""){
        document.querySelector('.month_card-sp').style.color = 'red';
        document.querySelector('.month_card-sp').innerText = "Hãy chọn năm";
    }if(document.querySelector('.cvv-input').value == ''){
        document.querySelector('.cvv_card-sp').style.color = 'red';
        document.querySelector('.cvv_card-sp').innerText = "Hãy điền CVV";
    }else{
        paymentBox.classList.remove('open_flex');
    }
})

// Finish order
const 
    paymentBtn = document.querySelector('.link_nextpage');
    paymentBtn.addEventListener('click',(event)=>{
    if(nameIp.value === ""){
        nameWr.classList.add('open-block');
        event.preventDefault();
    }
    if(isNaN(phoneIp.value)){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Chỉ được nhập số';
        event.preventDefault();
    }if(phoneIp.value.length > 10){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Số điện thoại không được quá 10 số';
        event.preventDefault();
    }if(phoneIp.value.length < 9){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Số điện thoại không được nhỏ hơn 9 số';
        event.preventDefault();
    }
    if(phoneIp.value === ""){
        phoneWr.classList.add('open-block');
        phoneWr.innerText = 'Vui lòng nhập số điện thoại';
        event.preventDefault();
    }
    if(adressIp.value === ""){
        adressWr.classList.add('open-block')
        event.preventDefault();
    }else{
        paymentBtn.href = "thankiu.html";
    }
})

