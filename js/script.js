// greeting
function ubahNama(){
    let nama = prompt("Masukkan Nama Anda", "");
    document.getElementById("userGreeting").innerHTML = nama
}

ubahNama()

let changename = document.getElementById("btnName").addEventListener("click", ubahNama)

// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imgSlideShow");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusSlides(1)
}, 2000);

// validation form
function validateForm() {
    const name = document.forms["messageForm"]["fullName"].value;
    const birthDate = document.forms["messageForm"]["birthDate"].value;
    const gender = document.forms["messageForm"]["gender"].value;
    const message = document.forms["messageForm"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("senderfullName").innerHTML = name;
    document.getElementById("senderbirthDate").innerHTML = birthDate;
    document.getElementById("senderGender").innerHTML = gender;
    document.getElementById("senderMessage").innerHTML = message;
}

// Add this to your existing JavaScript file

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('nav > ul > a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Your existing JavaScript code remains below this...