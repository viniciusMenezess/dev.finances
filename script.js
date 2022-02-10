const modal = {
    open(){
        // Abrir modal
        // Adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //fechar o modal
        // remover a classe active do modal

        document.querySelector('.modal-overlay').classList.remove('active')
    }
}