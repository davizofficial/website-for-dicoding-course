// Dropdown Menu
document.querySelectorAll('.dropdown-trigger').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Slider Gambar
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.image-slider img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Ganti ke slide berikutnya
    showSlide(currentSlideIndex);
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
showSlide(currentSlideIndex); // Tampilkan slide pertama

// Menampilkan Proyek-Proyek Menggunakan Looping
const projects = [
    { title: 'SIBAGALAN', description: 'Sistem Informasi Batik Tegalan' },
    { title: 'Redesign UI Tiki.id', description: 'Redesign UI Tiki.id page Cek Ongkir' },
    { title: 'NgapakLearn', description: 'Aplikasi Pembelajaran Bahasa Ngapak Interaktif' }
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectItem);
});
