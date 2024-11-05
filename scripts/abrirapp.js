function abrirApp (){

    //Links app
    var androidLink = 'https://play.google.com/store/search?q=app+barber&c=apps'
    var iosLink = 'https://play.google.com/store/search?q=app+barber&c=apps'

    //Links para as lojas do app (Android ou IOS)
    var androidLinkLoja = 'https://play.google.com/store/search?q=app+barber&c=apps'
    var iosLinkLoja = 'https://apps.apple.com/br/app/appbarber-cliente/id6450795073'

    var startTime = Date.now()

    window.location.href = isIos() ? iosLink : androidLink

    //Redireciona para as lojas de aplicativos caso não abra o app, / 1segundo de tempo
    setTimeout(function () {
        var endTime = Date.now();
        if (endTime - startTime < 1500) { 
            window.location.href = isIOS() ? iosLinkLoja : androidLinkLoja;
        }
    }, 1000)

}
    //Detecta se os dispositivo é IOS
    function isIos (){
    return /iphone|ipod|ipad/i.test(navigator.userAgent)
    }