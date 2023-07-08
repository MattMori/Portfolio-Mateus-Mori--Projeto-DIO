// Seleciona todos os elementos de gatilho do acordeão
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        // Adiciona um ouvinte de evento de clique a cada elemento de gatilho
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')
        // Verifica se o acordeão está aberto ou fechado
        if (isOpen) {
            acordeon.classList.remove('open')
        // Se o acordeão estiver aberto, remove a classe 'open' para fechá-lo
        } else {         
            acordeon.classList.add('open')
        // Se o acordeão estiver fechado, adiciona a classe 'open' para abri-lo
        }
    })
})
