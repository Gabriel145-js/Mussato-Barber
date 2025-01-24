//responsavel por copiar o valor oculto no button.

async function copiar() {
    var cnpj = document.querySelector(".cnpjInput").value
    try { 
        await navigator.clipboard.writeText(cnpj)
        alert("CNPJ copiado ")
    } catch (err) {
        console.error("Falha ao copiar o CNPJ: ", err)
        alert("Erro ao copiar o CNPJ.")
    }
}

//Função responsavel pelo compartilhamento. 
function compartilhar() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Confira o novo site da MussattoBarberShop',
        url: window.location.href
      })
      .then(() => console.log('Compartilhado com sucesso!'))
      .catch((error) => console.log('Erro ao compartilhar:', error))
    } else {
      alert('Compartilhamento não suportado')
    }
  }

//Responsavel por abrir e fechar a janela Modal do button QrCode e do Pagar Agora.
function abrirModal(){
  const btnQr = document.getElementById('qrcode')
  const janelaModal = document.querySelector('.janela-modal-qrcode')
  const fecharBtn = document.getElementById('x-btn')
  const btnPagar = document.querySelector('.pagar-agora')

btnQr.addEventListener('click', () => {
    janelaModal.style.display = 'block'

})

fecharBtn.addEventListener('click', () => {
    janelaModal.style.display = 'none'
    
})

btnPagar.addEventListener('click', () => {
    janelaModal.style.display = 'block'
})
}
abrirModal()

