let cardCounter = 1;

const ASK_BUTTON_SELECTOR = '[data-open="qa-ask"]';      // кнопка "Задать вопрос" — ставь data-open="qa-ask"

function showModal(modalEl){
    if(!modalEl) return;
    modalEl.setAttribute('aria-hidden','false');
  }
  function hideModal(modalEl){
    if(!modalEl) return;
    modalEl.setAttribute('aria-hidden','true');
  }

  // прикрепим делегирование: на document слушаем клики по кнопкам открытия/закрытия
    document.addEventListener('click', function(e){
    // открыть модалку "Задать вопрос"
    const askBtn = e.target.closest(ASK_BUTTON_SELECTOR);
    if(askBtn){
      const modal = document.getElementById('nameModal');
      showModal(modal);
      return;
    }
    
});

function confirmName() {
    const cardName = document.getElementById('cardNameInput').value.trim();
    
    if (cardName === '') {
        alert('Название темы не может быть пустым!');
        return;
    }
    
    cardCounter++;
    
    const newCard = document.createElement('div');
    newCard.className = 'category-card';
    newCard.innerHTML = `
        <h3>${cardName}</h3>
        <p>Описание новой темы для изучения.</p>
        <div class="card-actions">
            <a href="pages/new-page-${cardCounter}.html" class="btn">Читать</a>
        </div>
    `;

    const container = document.getElementById('cardsContainer');
    container.appendChild(newCard);

    // Анимация появления
    setTimeout(() => {
        newCard.classList.add('visible');
    }, 10);
    
    // Закрываем модальное окно и очищаем поле
    cancelName();
}

function cancelName() {
    document.getElementById('nameModal').style.display = 'none';
    document.getElementById('cardNameInput').value = '';
}

function deleteCard(button) {
    const card = button.closest('.category-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        card.remove();
    }, 300);
}