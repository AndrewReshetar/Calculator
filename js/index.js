const display = document.querySelector('.display');
document.querySelectorAll('.buttons').forEach(el => el.addEventListener('click', clickNumber));
document.querySelectorAll('.operations').forEach(el => el.addEventListener('click', clickOperation));
document.querySelector('.equil').addEventListener('click', clickCalc);
document.querySelector('.remover').addEventListener('click', clickRemove);
//function for numbers
function clickNumber(event) {
    display.value += event.target.innerText;
}
// function for operations
function clickOperation(event) {
    display.value += event.target.innerText;
}
// function for calculation
function clickCalc() {
    display.value = eval(display.value);
}
// function for 'remover'
function clickRemove(event) {
    display.value = display.value = '';
}
