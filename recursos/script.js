document.addEventListener('keydown', function (event) {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains('card')) {
        const cards = Array.from(document.querySelectorAll('.card'));
        const currentIndex = cards.indexOf(focusedElement);
        const columns = 3; // Número de colunas na grade

        if (event.key === 'ArrowRight') {
            const nextSibling = focusedElement.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('card')) {
                nextSibling.focus();
            }
        } else if (event.key === 'ArrowLeft') {
            const previousSibling = focusedElement.previousElementSibling;
            if (previousSibling && previousSibling.classList.contains('card')) {
                previousSibling.focus();
            }
        } else if (event.key === 'ArrowDown') {
            const nextRowElementIndex = currentIndex + columns;
            if (nextRowElementIndex < cards.length) {
                cards[nextRowElementIndex].focus();
            }
        } else if (event.key === 'ArrowUp') {
            const previousRowElementIndex = currentIndex - columns;
            if (previousRowElementIndex >= 0) {
                cards[previousRowElementIndex].focus();
            }
        }
    }
});

// Focar o primeiro card quando a página carregar
document.addEventListener('DOMContentLoaded', (event) => {
    const firstCard = document.querySelector('.card');
    if (firstCard) {
        firstCard.focus();
    }
});