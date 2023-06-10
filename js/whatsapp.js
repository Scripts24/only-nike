window.addEventListener('load', function () {
    // Obtiene el contenedor del botón de WhatsApp
    let whatsappContainer = document.getElementById('whatsapp-container');
    // Obtiene los span laterales de fullpage
    let spanNav = document.getElementById('fp-nav')

    // Muestra el botón de whatsapp una vez que la página haya cargado completamente
    whatsappContainer.style.display = 'block';
    // Muestra los span laterales de FullPage una vez que la página haya cargado completamente
    spanNav.style.display = 'block';
});
