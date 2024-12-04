// Получаем элементы
const openFormBtn = document.getElementById("openFormBtn");
const modal = document.getElementById("orderFormModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const form = document.getElementById("orderForm");
const successMessage = document.getElementById("orderSuccessMessage");

// Открытие модального окна при нажатии на кнопку
openFormBtn.onclick = function() {
    modal.style.display = "flex";
}

// Закрытие модального окна при нажатии на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработчик отправки формы
form.onsubmit = function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Прячем форму
    modal.style.display = "none";

    // Показываем сообщение об успешном заказе
    successMessage.style.display = "block";

    // Через 3 секунды скрываем сообщение
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 3000);
}

