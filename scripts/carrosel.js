const fotos = document.querySelectorAll('.foto')
const carrossel = document.querySelector('.carrossel')
const proximo = document.getElementById('proximo')
const antes = document.getElementById('antes')

let contador = 0

fotos[0].classList.add('visible')

function aparecerFoto() {
  fotos.forEach(foto => {
    foto.classList.remove('visible')
  })

  fotos[contador].classList.add('visible')

  carrossel.style.transform = `translateX(-${contador * 100}%)`

  contador = (contador + 1) % fotos.length
}


setInterval(aparecerFoto, 4000)

// Responsável por abrir a janela modal do botão "Pagar agora"
function abrilModal() {
  const btnQr = document.getElementById('qrcode')
  const janelaModal = document.querySelector('.janela-modal-qrcode')
  const fecharBtn = document.getElementById('x-btn')

  btnQr.addEventListener('click', () => {
    janelaModal.style.display = 'block'
  })

  fecharBtn.addEventListener('click', () => {
    janelaModal.style.display = 'none'
  })
}