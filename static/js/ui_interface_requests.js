function selectProposal() {
    const select = document.getElementById("rationalization-proposals");

    fetch(select.options[select.selectedIndex].value)
        .then(response => response.text()) // Получаем текстовое содержимое ответа
        .then(html => {
            // Загрузка полученного HTML на страницу
            document.open();
            document.write(html);
            document.close();
        })
        .catch(error => console.error('Ошибка при загрузке страницы:', error));
}

function downloadDocuments(id) {
    fetch(`/download_proposal/${id}`)
        .then(response => response.text()) // Получаем текстовое содержимое ответа
        .then(html => {
            // Загрузка полученного HTML на страницу
            document.open();
            document.write(html);
            document.close();
        })
        .catch(error => console.error('Ошибка при загрузке страницы:', error));
}