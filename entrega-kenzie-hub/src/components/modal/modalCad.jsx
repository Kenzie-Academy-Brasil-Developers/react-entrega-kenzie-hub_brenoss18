function ModalCadastrarTech (children){
   const modal = document.querySelector('.modal')
   modal.classList.remove('hidden')
}
export function hiddenModal (){
    const modalClose = document.querySelector('.close')
    modalClose.classList.add('hidden')
}

export default ModalCadastrarTech
