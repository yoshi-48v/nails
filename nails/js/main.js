/* banner */
const images = document.querySelectorAll('.banner-img');
let currentImage = 0;

function changeImage() {
    images[currentImage].classList.remove('active');
    
    currentImage = (currentImage + 1) % images.length;
    
    images[currentImage].classList.add('active');
}

setInterval(changeImage, 4000);

/* experiencia */

const experienceData = [
    {
        num: "01",
        title: "Disfruta de<br><em>una bebida</em>",
        text: "Desde el momento en que entras, queremos que te sientas bienvenida. Elige una bebida de cortesía de nuestra carta y disfruta de una experiencia pensada para ti. En Bloom el cuidado empieza antes de tu servicio.",
        media: "assets/img/cafe.jpg",
        type: "image"
    },
    {
        num: "02",
        title: "Respira. Desconecta.<br><em>Disfruta.</em>",
        text: "Cada visita es una invitación a hacer una pausa y disfrutar de un momento de calma, cuidado y bienestar.",
        media: "assets/img/banner02.jpg",
        type: "image"
    },
    {
        num: "03", 
        title: "Nuestras artistas<br><em>transforman todo</em>",
        text: "Cada especialista de Bloom combina técnica, precisión y creatividad para crear resultados que reflejan tu estilo. Cada servicio es una obra de arte, hecha con dedicación y pasión.",
        media: "assets/vid/unas.mp4", // Asegúrate de crear una carpeta 'video' en 'assets'
        type: "video"
    },
    {
        num: "04",
        title: "Más que una cita,<br><em>para recordar</em>",
        text: "En Bloom creemos que el cuidado va más allá de un servicio de belleza. Queremos que cada visita sea un momento para desconectar, sentirte bien y dedicarte tiempo a ti.",
        media: "assets/img/recordar.jpg",
        type: "image"
    }
];

const tabs = document.querySelectorAll('.tab-item');
const expImg = document.getElementById('exp-img');
const expVideo = document.getElementById('exp-video'); 
const expNum = document.getElementById('exp-num');
const expTitle = document.getElementById('exp-title');
const expText = document.getElementById('exp-text');
const expContent = document.getElementById('exp-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const index = this.getAttribute('data-index');
        const currentData = experienceData[index];
        
        expContent.classList.remove('fade-anim');
        void expContent.offsetWidth; 
        expContent.classList.add('fade-anim');

        expNum.textContent = currentData.num;
        expTitle.innerHTML = currentData.title;
        expText.textContent = currentData.text;

        if (currentData.type === "video") {
            expImg.style.display = "none"; 
            expVideo.style.display = "block"; 
            expVideo.src = currentData.media; 
        } else {
            expVideo.style.display = "none"; 
            expVideo.src = ""; 
            expImg.style.display = "block";
            expImg.src = currentData.media;
        }
    });
});

/* galeria */

const albumData = {
    'manicure-gato': {
        title: 'Ojo de gato',
        images: [
            '../assets/img/gato-cover.jpg',  
            '../assets/img/gato01.jpg',      
            '../assets/img/gato02.jpg',      
            '../assets/img/gato03.jpg'
        ]
    },
    'nail-art': {
        title: 'Nail Art - Estrellas Doradas',
        images: [
            '../assets/img/nailart-cover.jpg', 
            '../assets/img/nailart-2.jpg',
            '../assets/img/nailart-3.jpg'
        ]
    }
    // Puedes seguir agregando más álbumes separados por comas
};

// 2. Seleccionar elementos del HTML
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('gallery-modal');
const closeModal = document.getElementById('close-modal');
const modalMainImg = document.getElementById('modal-main-img');
const modalTitle = document.getElementById('modal-title');
const modalThumbnails = document.getElementById('modal-thumbnails');

// Evitamos errores si no estamos en la página de galería
if (modal) {
    
    // 3. Abrir el modal al hacer clic en un álbum
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Obtenemos qué álbum se clickeó (ej. 'manicure-gel')
            const albumId = this.getAttribute('data-album');
            const data = albumData[albumId];

            if(data) {
                // Llenar el título y la foto principal
                modalTitle.textContent = data.title;
                modalMainImg.src = data.images[0];

                // Limpiar miniaturas anteriores
                modalThumbnails.innerHTML = '';

                // Crear las nuevas miniaturas a la derecha
                data.images.forEach(imgSrc => {
                    const thumb = document.createElement('img');
                    thumb.src = imgSrc;
                    
                    // Al hacer clic en una miniatura, cambia la foto principal
                    thumb.addEventListener('click', () => {
                        modalMainImg.src = imgSrc;
                    });
                    
                    modalThumbnails.appendChild(thumb);
                });

                // Mostrar el modal
                modal.classList.add('show');
            }
        });
    });

    // 4. Cerrar el modal (al hacer clic en la X)
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // 5. Cerrar el modal (al hacer clic en el fondo negro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}