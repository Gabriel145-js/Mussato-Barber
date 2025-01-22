//Responsavel por copiar o valor do QrCode
async function copiarQrCode() {
    try { 
        var copiaQr = document.getElementById('codigo-qr').value
        await navigator.clipboard.writeText(copiaQr)
        alert("QrCode Copiado com sucesso")
    } catch (err) {
        console.error("Falha ao copiar o QrCode: ", err)
        alert("Erro ao copiar o QrCode.")
    }
}

//Função responsavel pelo compartilhamento do QrCode
function compartilharQrCode() {
    if (navigator.share) {
       
        const textoQrCode = document.getElementById('codigo-qr').value;       
    
        navigator.share({
            title: document.title,
            text:textoQrCode     
        })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
        alert('Compartilhamento não suportado');
    }
}