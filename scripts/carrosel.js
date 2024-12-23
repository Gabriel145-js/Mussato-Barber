//responsavel pelo carrosel de fotos 

document.addEventListener('DOMContentLoaded', function(){
    const imgs = document.querySelectorAll('.container-carrosel img')
    const prox = document.getElementById('prox')
    const ante = document.getElementById('antes')
    let contador = 0

    function proximo(){
      imgs[contador].style.display = 'none'
      contador = (contador + 1) % imgs.length 
      imgs[contador].style.display = 'block'
    }
    
    function antes(){
      imgs[contador].style.display = 'none'
      contador = (contador - 1 + imgs.length) % imgs.length 
      imgs[contador].style.display = 'block'

    }

    prox.onclick = proximo
    ante.onclick = antes
    
    /* function proximoauto (){
        proximo()
        setTimeout(proximoauto, 3000)
    }
    setTimeout(proximoauto, 3000)*/     

     for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none'
     }
     imgs[0].style.display = 'block'
})