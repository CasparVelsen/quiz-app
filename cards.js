const cardsContainer = document.querySelector('[data-js=cards]');

const cards = [
  {
    question: 'What is the capital of Ukraine?',
    answer: 'Kiev',
    tags: ['capital', 'countries', 'topografie', 'europe'],
  },
  {
    question: 'What is the highest mountain in europe?',
    answer: 'Mount Elbrus (Russia)',
    tags: ['mountains', 'europe', 'topografie', 'landmarks'],
  },
  {
    question: "Which river is europe's longest?",
    answer: 'Volga (3.530 km - Russia)',
    tags: ['topografie', 'river', 'landmarks', 'europe'],
  },
];

renderCards();

function renderCards() {
  cardsContainer.innerHTML = '';
  cards.forEach(card => {
    const cardElement = document.createElement('li');
    cardElement.className = 'cards';
    cardElement.innerHTML = `
          <h3 class="cards__title">Question:</h3>
          <p class="cards__question">${card.question}</p>
          <button data-js="card-button" class="cards__answer-button">
            Show answer
          </button>
          <p data-js="answer" class="cards__answer">${card.answer}</p>
          <button>
            <img
              class="cards__bookmark"
              src="./images/bookmark-icon.png"
              alt="bookmark"
            />
          </button>
    `;
    cardsContainer.append(cardElement);

    const answerButton = cardElement.querySelector('[data-js=card-button]');
    const answerElement = cardElement.querySelector('[data-js=answer]');

    answerButton.addEventListener('click', () => {
      answerElement.toggleAttribute('hidden');
    });
  });
}
