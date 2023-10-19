function saveData() {
    var storageType = document.getElementById('storageType').value;
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;

    if (key && value) {
        if (storageType === 'local') {
            localStorage.setItem(key, value);
        } else if (storageType === 'session') {
            sessionStorage.setItem(key, value);
        }

        document.getElementById('result').textContent = 'Adat elmentve.';
    } else {
        document.getElementById('result').textContent = 'Kulcs és érték megadása kötelező.';
    }
}

function checkAndDisplayData() {
    var storageType = document.getElementById('storageType').value;
    var key = document.getElementById('key').value;
    var result = document.getElementById('result');

    if (storageType === 'local' && localStorage.getItem(key)) {
        result.textContent = 'Kulcs: ' + key + ', Érték: ' + localStorage.getItem(key);
    } else if (storageType === 'session' && sessionStorage.getItem(key)) {
        result.textContent = 'Kulcs: ' + key + ', Érték: ' + sessionStorage.getItem(key);
    } else {
        result.textContent = 'Adat nem érhető el.';
    }
}