
// Seleciona todos os botões "Abrir modal"
const openModalButtons = document.querySelectorAll('.card-content');

// Seleciona todos os botões "Fechar"
const closeModalButtons = document.querySelectorAll('.close');

// Seleciona todos os modais
const modals = document.querySelectorAll('.modal');

// Adiciona um event listener para cada botão "Abrir modal"
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtém o ID do modal a ser aberto a partir do atributo "data-modal-id" do botão
    const modalId = button.dataset.modalId;

    // Seleciona o modal correto com base no ID
    const modal = document.getElementById(modalId);

    // Adiciona a classe "open" ao modal para exibi-lo
    modal.classList.add('open');
  });
});

// Adiciona um event listener para cada botão "Fechar"
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtém o modal pai do botão
    const modal = button.closest('.modal');

    // Remove a classe "open" do modal para escondê-lo
    modal.classList.remove('open');
  });
});

// Adiciona um event listener para cada modal
modals.forEach(modal => {
  modal.addEventListener('click', event => {
    // Verifica se o clique ocorreu fora do conteúdo do modal
    if (event.target === modal) {
      // Remove a classe "open" do modal para escondê-lo
      modal.classList.remove('open');
    }
  });
});

function thumbChange(num){
  var thumb ='../assets/Image/carro' + num + '.jpeg';
  document.getElementById("mainPic").src = thumb;
  document.getElementById("mainPic1").src = thumb;
}