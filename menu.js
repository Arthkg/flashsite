document.addEventListener('DOMContentLoaded', function () {
    let flashMenu = document.getElementById('flash-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');
    let fecharMenu = document.querySelector('.flash-fechar');
    
    // Função para fechar o menu
    function fecharMenuMobile() {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    }
    
    // Adiciona evento de clique para abrir o menu
    flashMenu.addEventListener('click', function () {
        menu.classList.toggle('abrir-menu');
        overlay.style.display = menu.classList.contains('abrir-menu') ? 'block' : 'none';
    });
    
    // Adiciona evento de clique para fechar o menu pelo botão de fechamento
    fecharMenu.addEventListener('click', fecharMenuMobile);
    
    // Adiciona eventos de clique para fechar o menu ao clicar em um item da lista
    let itensMenu = document.querySelectorAll('#menu-mobile nav ul li a');
    
    itensMenu.forEach(function (item) {
        item.addEventListener('click', fecharMenuMobile);
    });
});
