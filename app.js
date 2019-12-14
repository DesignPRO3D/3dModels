// const _screen = screen;
// const _object = document.querySelector('object');

// _object.style.width = _screen.width + 'px';
// _object.style.height = _screen.height + 'px';

const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');

const cancelBtn = document.querySelector('#btn-clear');
const confirmBtn = document.querySelector('#btn-confirm');

const expenses = document.querySelector('#expenses');

const tottalOutput = document.querySelector('#total');

let sum = 0;


const clearFields = () => {
  reason.value = '';
  amount.value = '';
}

confirmBtn.addEventListener('click', () => {
  const eReason = reason.value;
  const eAmount = amount.value;

  if (eReason.trim().length <=0 || eAmount <= 0 || eAmount.trim().length <= 0) {
    return;
  }

  sum += +eAmount;
  tottalOutput.textContent = sum;

  const el = document.createElement('ion-item');
  el.textContent = eReason + ': $' + eAmount;
  expenses.appendChild(el);
  clearFields();
});

cancelBtn.addEventListener('click', clearFields);
