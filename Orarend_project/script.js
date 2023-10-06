function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function toggleSettingsPanel() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('show');
}

function changeTextColor(event) {
    const textColor = event.target.value;
    const tableCells = document.querySelectorAll('.table-cell');
    tableCells.forEach(cell => {
        cell.style.color = textColor;
    });
}


function changeCardColor(event) {
    const cardColor = event.target.value;
    const cards = document.getElementsByClassName('table-cell');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = cardColor;
    }
}

function resetColors() {
    const tableCells = document.querySelectorAll('.table-cell');
    tableCells.forEach(cell => {
        cell.style.color = ''; 
        cell.style.backgroundColor = ''; 
    });
}

