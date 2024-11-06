function abrirApp() {
    // Links para abrir o Instagram diretamente
    var androidLink = 'intent://appbarber-cliente.com/#Intent;package=com.appbarber.cliente;scheme=https;end';
    var iosLink = 'appbarber.cliente://';

    // Links para as lojas de aplicativos (Android ou iOS)
    var androidLinkLoja = 'https://play.google.com/store/apps/details?id=br.com.starapp.appbarbercli&pcampaignid=web_share';
    var iosLinkLoja = 'https://apps.apple.com/br/app/appbarber-cliente/id6450795073';

    var startTime = Date.now();

    // Tenta abrir o Instagram no iOS ou Android
    window.location.href = isIos() ? iosLink : androidLink;

    // Redireciona para as lojas de aplicativos caso o app não seja aberto após 1 segundo
    setTimeout(function () {
        var endTime = Date.now();
        if (endTime - startTime < 1500) { 
            window.location.href = isIos() ? iosLinkLoja : androidLinkLoja;
        }
    }, 1000);
}

// Função para detectar se o dispositivo é iOS
function isIos() {
    return /iphone|ipod|ipad/i.test(navigator.userAgent);
}
