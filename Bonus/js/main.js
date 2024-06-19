// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

// array oggetti
const images = [ 
    {   
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

//selettore items-container
const itemsContainer = document.querySelector(".items-container");

//selettore tumbnails-container
const tumbnailsContainer = document.querySelector(".tumbnails-container");

//per ogni ogetto dell'array creo un setup da utilizzare in html
images.forEach((obj) => {
    let itemContent = `
            <div class="item">
                <img src="${obj.image}">

                <div class="item-txt">
                    <h2>${obj.title}</h2>
                    <p>${obj.text}</p>
                </div>
            </div>`;
    
    let tumbnailsContent = `
            <div class="tumbnail">
                <img src="${obj.image}" alt="">
            </div>`;

    //inserimento div.item nel div.items-container
    itemsContainer.innerHTML += itemContent;
    //inserimento div.tumbnail in div.tumbnails-container
    tumbnailsContainer.innerHTML += tumbnailsContent;
})

//selettore elementi div.item
const divItems = document.getElementsByClassName("item");
//selettore elementi div.tumbnail
const divTumbnail = document.getElementsByClassName("tumbnail")

//asseganzione classe .active al primo elemento generato (default)
let activeItem = 0;
divItems[activeItem].classList.add("active");
//assegnazione classe .bright al primo elemento
let brightTumbnail = 0;
divTumbnail[brightTumbnail].classList.add("bright");


//selettore "bottone" arrow-down
const next = document.getElementById("arrow-down");
//selettore "bottone" arrow-up
const previous = document.getElementById("arrow-up");

//creazione evento su click di arrow-down
next.addEventListener("click",
    function () {

        //condizione per verificare se siamo alla fine della lista
        if (activeItem < images.length - 1){

            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");
            divTumbnail[brightTumbnail].classList.remove("bright");

            //incremento valore di activeItem/brightBox per passare alla foto successiva
            activeItem++;
            brightTumbnail++;

            //aggiungere la classe active alla nuova immagine
            divItems[activeItem].classList.add("active");
            divTumbnail[brightTumbnail].classList.add("bright")

        } else {  //altrimenti
            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");
            divTumbnail[brightTumbnail].classList.remove("bright");

            //resetta activeItem alla prima foto in lista
            activeItem = 0;
            brightTumbnail = 0;

            //aggiungere .active alla nuova immagine
            divItems[activeItem].classList.add("active");
            divTumbnail[brightTumbnail].classList.add("bright")
        }
    } 
);

//creazione evento su click di arrow-up
previous.addEventListener("click",
    function () {

        //condizione per verificare se siamo all'inizio della lista
        if (activeItem != 0){

            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");
            divTumbnail[brightTumbnail].classList.remove("bright");
            
            //incremento valore di activeItem per passare alla foto successiva
            activeItem--;
            brightTumbnail--;

            //aggiungere la classe active anche alla nuova immagine
            divItems[activeItem].classList.add("active");
            divTumbnail[brightTumbnail].classList.add("bright")
        } 
        
        else {  //altrimenti
            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");
            divTumbnail[brightTumbnail].classList.remove("bright");

            //resetta activeItem all'ultima foto in lista
            activeItem = images.length - 1;
            brightTumbnail = images.length - 1;
            //aggiungere .active alla nuova immagine
            divItems[activeItem].classList.add("active");
            divTumbnail[brightTumbnail].classList.add("bright")
        }
    }
);