
//Beállítások menü
function toggleSettingsPanel() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('show');
}
//Light/Dark mód állítás
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    localStorage.setItem("darkMode", body.classList.contains('dark-mode'));
}
//Betűszínváltás
function changeTextColor(event) {
    const textColor = event.target.value;
    const tableCells = document.querySelectorAll('.table-cell');
    tableCells.forEach(cell => {
        cell.style.color = textColor;
    });

    localStorage.setItem("textColor", textColor);
}
//Háttérszínváltás
function changeCardColor(event) {
    const cardColor = event.target.value;
    const cards = document.getElementsByClassName('table-container');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = cardColor;
    }

    localStorage.setItem("cardColor", cardColor);
}

//Header szín váltás
function changeHeaderColor(event){
    const headerColor = event.target.value;
    const header = document.getElementsByClassName('table-header');
    for (let i = 0; i < header.length; i++) {
        header[i].style.background = headerColor;
    }

    localStorage.setItem("headerColor", headerColor);
}




//Reset
function resetColors() {
    const tableCells = document.querySelectorAll('.table-cell');
    const tableContainer = document.querySelectorAll('.table-container')
    const tableHeader = document.querySelectorAll('.table-header')
    
    tableCells.forEach(cell => {
        cell.style.color = ''; 
    });

    tableContainer.forEach(container => {
        container.style.backgroundColor = '';
    });

    tableHeader.forEach(container => {
        container.style.background = 'linear-gradient(45deg, #ffab40, #ff8e53, #ff705f, #ff4d6b, #ff357a, #e83e8c, #d83e8c, #e83e8c'; 
    });

    localStorage.removeItem("textColor")
    localStorage.removeItem("cardColor")
    localStorage.removeItem("headerColor")
}
//Localhost mentés hívása
document.addEventListener('DOMContentLoaded', function () {
    const storedTextColor = localStorage.getItem("textColor");
    const storedCardColor = localStorage.getItem("cardColor");
    const storedHeaderColor = localStorage.getItem("headerColor");

    if (storedTextColor) {
        changeTextColor({ target: { value: storedTextColor } });
    }
    
    if (storedCardColor) {
        changeCardColor({ target: { value: storedCardColor } });
    }

    if (storedHeaderColor) {
        changeHeaderColor({ target: { value: storedHeaderColor } });
    }

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        toggleMode();
    }
});

