// Swiper JS...........

let swiper = new Swiper('.mySwiper',{
    slidesPerView: 4,
    spaceBetween: 10,
});



// Theme Toggle With Local Storage............

let darkIcon = document.querySelector('.moon-icon');
let lightIcon= document.querySelector('.sun-icon');
let body = document.querySelector('body');
const idDarkMood = localStorage.getItem('darkMood') === 'true';

function setDarkMood(isDark){

    if(isDark){
        body.classList.add('dark-color');
        lightIcon.style.display = 'inline-block';
        darkIcon.style.display  = 'none'
    }else{
        body.classList.remove('dark-color');
        lightIcon.style.display = 'none';
        darkIcon.style.display  = 'inline-block';
    }
}

// Set the initial dark mode state based on the stored preference
setDarkMood(idDarkMood);

    darkIcon.addEventListener('click',()=>{
    body.classList.add('dark-color');
    lightIcon.style.display = 'inline-block';
    darkIcon.style.display  = 'none'

    // Add Dark Mode in Local Storage.....
    localStorage.setItem('darkMood', 'true');
});

lightIcon.addEventListener('click',()=>{
    body.classList.remove('dark-color');
    lightIcon.style.display = 'none';
    darkIcon.style.display  = 'inline-block'

     // Remove Dark Mode in Local Storage.....
     localStorage.setItem('darkMood', 'false');
});




// ...................... Menu Component Toggle .....................

let menuBarIcon = document.querySelector('.menu-bar');
let leftBar = document.querySelector('.left-bar');

menuBarIcon.addEventListener('click', ()=>{
    leftBar.classList.toggle('leftbar-active')
    rightBar.classList.remove('rightbar-active')
});

let messageIcon = document.querySelector('.message-icon');
let rightBar = document.querySelector('.right-bar')

messageIcon.addEventListener('click', ()=>{
    rightBar.classList.toggle('rightbar-active')
    leftBar.classList.remove('leftbar-active')
});