const search = document.querySelector('.input_nav-searching'),
      images = document.querySelectorAll('.product_box');

search.addEventListener('keyup', e =>{
    if(e.key == 'Enter'){
        let searchValue = search.value,
            valueKey = searchValue.toLowerCase();

        images.forEach(image =>{
            if(valueKey === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});
search.addEventListener('keyup', e =>{
    if(e.key == 'Enter'){
        let searchValue = search.value,
            valueKey = searchValue.toLowerCase();

        images.forEach(image =>{
            if(valueKey === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});