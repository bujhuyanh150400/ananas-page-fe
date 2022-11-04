$('.ad-slide-box').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true
});


// Login or sign up
const   
    loginName = document.getElementById('login_name'),
    loginPass = document.getElementById('login_pass'),
    signupEmail  = document.getElementById('signup_email'),
    signupPass = document.getElementById('signup_pass'),
    signupPass2 = document.getElementById('signup_pass2'),
    login = document.querySelector('.login_a'),
    signup = document.querySelector('.signup_a'),
    wrLoginName = document.querySelector('.wr_loginName'),
    wrLoginPass = document.querySelector('.wr_loginPass'),
    wrSignupEmail = document.querySelector('.wr_signupEmail'),
    wrSignupPass = document.querySelector('.wr_signupPass'),
    wrSignupPass2 = document.querySelector('.wr_signupPass2');

login.addEventListener('click', (e)=>{
    if(loginName.value === ''){
        wrLoginName.classList.add('open_block');
        e.preventDefault();
    }
    if(loginPass.value === ''){
        wrLoginPass.classList.add('open_block');
        e.preventDefault();
    }else if (loginPass.value.length < 8){
        wrLoginPass.classList.add('open_block');
        wrLoginPass.innerText = "Mật khẩu phải trên 8 kí tự";
        e.preventDefault();
    }else if(!(loginName.value === 'huyanh123') && !(loginPass.value === '0123456789')){
        wrLoginName.classList.add('open_block');
        wrLoginName.innerText = 'Sai tên đăng nhập hoặc mật khẩu'
        wrLoginPass.classList.add('open_block');
        wrLoginPass.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
        e.preventDefault();
    }if(loginName.value === 'huyanh123' && loginName.value === '0123456789'){
        e.href = "index_login.html";
    }
    
});
// login.addEventListener('click', (e)=>{
    
// });
signup.addEventListener('click', (e)=>{
    if(signupEmail.value === ''){
        wrSignupEmail.classList.add('open_block');
        e.preventDefault();

    }
    if(signupPass.value === ''){
        wrSignupPass.classList.add('open_block');
        e.preventDefault();

    }else if (signupPass.value < 8){
        wrSignupPass.classList.add('open_block');
        wrSignupPass.innerText = "Mật khẩu phải trên 8 kí tự";
        e.preventDefault();

    }
    if(signupPass2.value === ''){
        wrSignupPass2.classList.add('open_block');
        e.preventDefault();

    }
    if(
        signupEmail.value === 'huyanh123' 
        && signupPass.value === '0123456789' 
        && signupPass2.value == signupPass.value){
            alert('Bạn đã đăng kí thành công, bạn hãy đăng nhập lại nhé');
            e.href = "index.html"
        }
});
