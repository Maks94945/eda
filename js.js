  // Функция фильтрации меню по категориям
  function filterMenu(category) {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';
    menuData[category].forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Цена: ${item.price} руб.</p>
        <button>Добавить в корзину</button>
      `;
      menuItems.appendChild(menuItem);
    });
  }
  
  // Слушатель на отправку формы
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваше сообщение отправлено!');
  });

  // Получаем элементы
const showCardBtn = document.getElementById('showCardBtn');
const pizzaCard = document.getElementById('pizzaCard');
const orderBtn = document.getElementById('orderBtn');

// Слушаем клик по кнопке "Узнать о Пицце Маргарита"
showCardBtn.addEventListener('click', function() {
    pizzaCard.style.display = 'block'; // Показываем карточку
});

// Слушаем клик по кнопке "Заказать"
orderBtn.addEventListener('click', function() {
    alert('Ваш заказ принят!'); // Оповещение о заказе
});

  
  