var numberInput = document.querySelector('.controls__number'),
    resultField = document.querySelector('.result');

document.querySelector('.controls__calc-button').addEventListener('click', () => {
    message = { num: numberInput.value };
    
    var b = new Blob([JSON.stringify(message)], {type : 'application/json'});
    fetch('/', {body: b, method: 'POST'})
        .then(response => response.text())
        .then(text => {
            resultField.textContent = text;
        });
});