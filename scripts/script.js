//responsavel por copiar o valor oculto no button.

async function copyCNPJ() {
    
    var cnpj = document.getElementById("cnpjInput").value

    try {
        
        await navigator.clipboard.writeText(cnpj)
        alert("CNPJ copiado ")
    } catch (err) {
        console.error("Falha ao copiar o CNPJ: ", err)
        alert("Erro ao copiar o CNPJ.")
    }
}