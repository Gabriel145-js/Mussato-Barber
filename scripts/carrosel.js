
let index = 0;
const fotos = document.querySelectorAll('.foto')
const carrossel = document.querySelector('.carrossel')
const vejaMaisButton = document.getElementById('vejaMais')
const proximo = document.getElementById('proximo')
const antes = document.getElementById('antes')


function mudarFoto() {
    
    fotos.forEach(foto => {
        foto.classList.remove('visible')
    });
    
    fotos[index].classList.add('visible')

    carrossel.style.transform = `translateX(-${index * 100}%)`

    index = (index + 1) % fotos.length
  
}

proximo.onclick = function() {
  index = (index + 1) % fotos.length; 
  mudarFoto();  
};

antes.onclick = function() {
  index = (index - 1 + fotos.length) % fotos.length 
};

fotos.forEach((foto, i) => {
    if (i === 0) {
        foto.classList.add('visible');
    }
});

setInterval(mudarFoto, 3000);

vejaMaisButton.addEventListener('click', () => {
 
});
