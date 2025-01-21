function abrirModal() {


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

