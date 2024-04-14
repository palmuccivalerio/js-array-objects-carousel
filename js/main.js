const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "../img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


const imagesArray = [
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp"
];

// Stampare tutte le immagini in pagina tramite Javascript
const slidesContainer = document.querySelector(".my-carousel-item");

imagesArray.forEach((curImage) => {
  console.log(curImage);
  const slideItem = `
    <div class="item">
      <img src="${curImage}" alt="">
    </div>
  `;

  slidesContainer.innerHTML += slideItem;
});

//1. Imposto lo stato di partenza: la prima slide attiva
console.log(slides);
let activeIndex = 0;
slides[activeIndex].classList.add("active");

//2. Al click sul bottone avanti
document.querySelector(".my-next").addEventListener("click", showNext);

function showNext() {
    // tolgo classe active dal indice corrente
    slides[activeIndex].classList.remove("active");

    // se l'indice attivo è minore della lunghezza di array - 1
    // incremento indice altrimenti
    // indice attivo diventa 0
    if(activeIndex < imagesArray.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }

    // aggiungo classe active al nuovo indice corrente
    slides[activeIndex].classList.add("active");
}
