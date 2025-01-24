const fotos = document.querySelectorAll('.foto')
const carrossel = document.querySelector('.carrossel')
const proximo = document.getElementById('proximo')
const antes = document.getElementById('antes')

let contador = 0

// Inicializa a primeira foto como visível
fotos[0].classList.add('visible')

function aparecerFoto() {
  // Remove a classe 'visible' de todas as fotos
  fotos.forEach(foto => {
    foto.classList.remove('visible')
  })

  // Adiciona a classe 'visible' à foto atual
  fotos[contador].classList.add('visible')

  // Move o carrossel para a esquerda
  carrossel.style.transform = `translateX(-${contador * 100}%)`

  // Incrementa o contador e ajusta para loop contínuo
  contador = (contador + 1) % fotos.length
}

// Chama a função aparecerFoto a cada 3 segundos
setInterval(aparecerFoto, 3000)

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