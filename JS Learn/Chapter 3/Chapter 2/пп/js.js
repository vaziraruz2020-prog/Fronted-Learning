// Получаем все элементы details с классом acc
const detailsElements = document.querySelectorAll('.acc');

detailsElements.forEach(detail => {
    // Слушаем событие 'toggle' на каждом блоке details
    detail.addEventListener('toggle', function() {
        // Находим кнопку (summary) внутри текущего открытого/закрытого блока
        const button = this.querySelector('.button');
        
        // Свойство this.open возвращает true, если блок открыт, и false, если закрыт
        if (this.open) {
            button.textContent = 'Закрыть блок';
        } else {
            button.textContent = 'Открыть блок';
        }
    });
});