// ---------------------------------------- swiper
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ---------------------------------------- botao newsletter
function formatarTelefone(input) {
    let numero = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (numero.length > 10) {
        numero = numero.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (numero.length > 6) {
        numero = numero.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (numero.length > 2) {
        numero = numero.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else if (numero.length > 0) {
        numero = numero.replace(/^(\d{0,2})$/, "($1");
    }

    input.value = numero;
}

function enviarMensagem() {
    let telefone = document.getElementById('telefone').value.replace(/\D/g, ''); // Remove formatação
    let mensagem = `Olá, meu whatsapp é ${telefone}. Gostaria de ficar por dentro das promoções!`;

    // Link do WhatsApp com a mensagem
    let url = `https://wa.me/5514997358324?text=${encodeURIComponent(mensagem)}`;

    // Redirecionar para o WhatsApp
    window.open(url, '_blank');
}