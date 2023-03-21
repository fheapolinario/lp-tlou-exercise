// Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

/*
    a lógica para isso funcionar:
    SEMPRE ANTES DE CRIAR SEU CÓDIGO JAVASCRIPT PENSE COMO VAI FAZER ISSO FUNCIONAR

  - passo 1 - dar um jeito de pegar o elemento html dos botões

  - passo 2 - dar um jeito de identificar o clique do usuário no botão

  - passo 3 - desmarcar o botão selecionado anterior

  - passo 4 - marcar o botão clicado como se estivesse selecionado

  - passo 5 - esconder a imagem de fundo anterior

  - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento html dos botões
const buttonCarrousel = document.querySelectorAll('.main-carrousel-button');
const carrousel = document.querySelectorAll('.main-background-image');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
buttonCarrousel.forEach((button, index) => {
    button.addEventListener('click', () => {
        // passo 3 - desmarcar o botao selecionado anterior
        unableSelectButton();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selectCarrouselButton(button);

        // passo 5 - esconder a imagem ativa de fundo anterior
        hiddenActiveImage();

        // passo 6 = fazer aparecer a imagem de fundo correspondente ao botão clicado
        showBackgroundImage(index);
    })
})

function selectCarrouselButton(button) {
    button.classList.add('select');
}

function showBackgroundImage(index) {
    carrousel[index].classList.add('active');
}

function hiddenActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function unableSelectButton() {
    const selectButton = document.querySelector('.select');
    selectButton.classList.remove('select');
}


/*
const buttonCarrousel = document.querySelectorAll('.main-carrousel-button');
const carrousel = document.querySelectorAll('.main-background-image');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
buttonCarrousel.forEach((button, index) => {
    button.addEventListener('click', () => {
        // passo 3 - desmarcar o botao selecionado anterior
        const selectButton = document.querySelector('.select');
        selectButton.classList.remove('select');

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        button.classList.add('select');

        // passo 5 - esconder a imagem ativa de fundo anterior
        const activeImage = document.queryselector('.active')
        activeImage.classList.remove('active); 

        // passo 6 = fazer aparecer a imagem de fundo correspondente ao botão clicado
        main-background-image[index].classList.add('active');
    })
})
*/