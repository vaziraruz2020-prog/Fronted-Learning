// // 1. Находим все кнопки открытия
const modalButtons = document.querySelectorAll('[data-modal-button]');
// 2. Находим все кнопки закрытия
const closeButtons = document.querySelectorAll('[data-modal-close]');
// 3. Находим все модальные окна
const allModals = document.querySelectorAll('[data-modal]');

// Слушаем клики по кнопкам открытия
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        // Получаем ID окна, которое нужно открыть
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        
        // Показываем окно
        modal.classList.remove('hidden');
    });
});

// Слушаем клики по кнопкам закрытия
closeButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        // Находим родительское модальное окно для этой кнопки и скрываем его
        const modal = this.closest('[data-modal]');

        modal.classList.add('hidden');
    });
});

// Дополнительно: закрытие по клику на серый фон (флоу)
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    });
});

// Чтобы клик внутри окна (по карточке) не закрывал его
const modalWindows = document.querySelectorAll('.modal-window');
modalWindows.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // Останавливает "всплытие" клика до фона
    });
});





