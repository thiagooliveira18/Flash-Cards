const form = document.querySelector('form');
const list = document.querySelector('div.cards-container');
const cards = [];
const btnSort = document.querySelector('.btn-sort');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const question = event.target.elements['pergunta'];
    const response = event.target.elements['resposta'];

    const card = {
        "question": question.value,
        "response": response.value
    };
    
    card.id = cards[cards.length - 1] ? (cards[cards.length - 1] + 1) : 0;

    cards.push(card);

    saveCard();
    alert('Card salvo com sucesso.');

    question.value = '';
    response.value = '';
});

function saveCard() {
    localStorage.setItem('cards', JSON.stringify(cards))
}

btnSort.addEventListener('click', () => {
    
    
});

function sortID(){
    return Math.floor(Math.random() * cards.length);
}

// function createCard(question, response){
//     const newItem = document.createElement('div');
//     newItem.classList.add('card');

//     const newQuestion = document.createElement('p');
//     newQuestion.classList.add('card-pergunta');
//     newQuestion.classList.add('disable');
//     newQuestion.innerHTML = question;

//     const btnVer = document.createElement('button');
//     btnVer.innerHTML = 'Ver Resposta';
//     btnVer.classList.add('btn-ver')
//     btnVer.classList.add('disable');
//     btnVer.addEventListener('click', () => {
//         newResponse.classList.remove('disable');

//         newQuestion.classList.add('disable');
//         btnVer.classList.add('disable');
//     });

//     const newResponse = document.createElement('p');
//     newResponse.classList.add('card-resposta');
//     newResponse.classList.add('disable');
//     newResponse.innerHTML = response;

//     newItem.addEventListener('click', (event) => {
//         newQuestion.classList.remove('disable');
//         btnVer.classList.remove('disable');
//     });

//     newItem.appendChild(newQuestion);
//     newItem.appendChild(btnVer);
//     newItem.appendChild(newResponse);
//     list.appendChild(newItem);

// }