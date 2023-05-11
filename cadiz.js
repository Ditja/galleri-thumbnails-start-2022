// Her skal du skrive javascriptet:

const bigImg = document.querySelector('#lrg-photo');
const caption = document.querySelector('figcaption');
let newSrc;
let newAlt;
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(element => {
    element.addEventListener('click', changeSrc)
});

function changeSrc(){
   newSrc = this.getAttribute('src');
   newAlt = this.getAttribute('alt');

   bigImg.setAttribute('src', newSrc);
   bigImg.setAttribute('alt', newAlt);
   caption.textContent = newAlt
}