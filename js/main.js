const form = document.querySelector('form');
const list = document.querySelector('div.cards-container');
const cards = JSON.parse(localStorage.getItem('cards')) || [];
const btnSort = document.querySelector('.btn-sort');
const modalExit = document.querySelector('.btn-exit');
const modal = document.querySelector('.modal-container');
const responseCard = document.querySelector('.text-response');
const questionCard = document.querySelector('.text-question');

//Criando Carta
//Create Card
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const question = event.target.elements['pergunta'];
    const response = event.target.elements['resposta'];

    const card = {
        "question": question.value,
        "response": response.value
    };
    
    let index = cards.length;
    if(cards.length == 0){
        card.id = 0
    } else{
        card.id = index;
    }
    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));
    alert('Card salvo com sucesso.');

    question.value = '';
    response.value = '';
});

//Criando evento de sorteio
//Create sort event
let verify = 0;
btnSort.addEventListener('click', () => {
    const id = sortID();
    const exist = cards.findIndex(element => element.id === id);
    const card = cards[id];
    if(exist && verify !== id){
        createCard(card);
        modal.classList.remove('disable');
        verify = id;
    }else{
        id = sortID();
    }    
});

//Disabilitando o modal
//Disable modal window
modalExit.addEventListener('click', () => {
    modal.classList.add('disable');
});

//Função auxiliar de sorteio de id
//Auxiliary function for sort id
function sortID(){
    return Math.floor(Math.random() * cards.length);
}

//Criando card com a resposta e a pergunta
//Create card with question and response
function createCard(card){
    questionCard.innerText = card.question;
    responseCard.innerText = card.response;
}