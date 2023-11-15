const numberForm = document.getElementById('number-form');
const numberInput = document.getElementById('number-input');
const addButton = document.getElementById('add-btn');
const processButton = document.getElementById('process-btn');
const numberList = document.getElementById('number-list');
const totalElement = document.getElementById('total');
const averageElement = document.getElementById('average');
const maxElement = document.getElementById('max');
const minElement = document.getElementById('min');
let numbers = [];


numberForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const number = parseFloat(numberInput.value);
  numbers.push(number);
  displayNumbers();
  numberInput.value = '';
});


function displayNumbers() {
  numberList.innerHTML = '';
  numbers.forEach((number, index) => {
    const row = document.createElement('tr');
    const positionCell = document.createElement('td');
    const numberCell = document.createElement('td');
    positionCell.textContent = index + 1;
    numberCell.textContent = number;
    row.appendChild(positionCell);
    row.appendChild(numberCell);
    numberList.appendChild(row);
  });
}


processButton.addEventListener('click', function() {
  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    totalElement.textContent = sum;
    averageElement.textContent = average.toFixed(2);
    maxElement.textContent = max;
    minElement.textContent = min;
  }
});
