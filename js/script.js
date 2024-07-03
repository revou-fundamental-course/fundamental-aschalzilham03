// MENAMBAHKAN ATAU MENGHAPUS KELAS CSS SAAT PENGGUNA MENGGULIR HALAMAN
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 140);
});

// RESPONSIVE MENU HAMBURGER
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};


// MENGATUR EVENT LISTENER PADA BAGIAN MESSAGE US
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.getElementById('gender').value;
    var pesan = document.getElementById('pesan').value;

document.getElementById('displayName').textContent = "Nama: " + name;
document.getElementById('displayBirthdate').textContent = "Tanggal Lahir: " + birthdate;
document.getElementById('displayGender').textContent = "Jenis Kelamin: " + gender;
document.getElementById('displayPesan').textContent = "Pesan: " + pesan;
});