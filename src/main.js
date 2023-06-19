document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    const questions = document.querySelectorAll('[data-faq-question]')
    
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botão){
            const abaAlvo = botão.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas()
            aba.classList.add('shows__list--is-active')
            removeBtnAtivo()
            botão.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta)
    }
})

function abreFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeBtnAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
}}

function escondeAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}