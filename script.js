const body = document.body;
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');
const selectTab = document.querySelector('.navBar');
const calculator = document.querySelectorAll('.calculator');
const sciKeyboardBtn = document.querySelector('.js-fa-square-root-variable');
const historyBtn = document.querySelector('.fa-calculator');
const keyboardCon = document.querySelectorAll('.keyBoard button');

function toggleTheam(){
  body.classList.toggle('light-mode');

 if (body.classList.contains('light-mode')) {
    moonIcon.classList.remove('de-active');
    sunIcon.classList.add('de-active');
  } else {
    moonIcon.classList.add('de-active');
    sunIcon.classList.remove('de-active');
  }
}

function swichTab(tabId){
  calculator.forEach( cal => cal.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  if(tabId !== 'Basic'){
    document.querySelector('.js-fa-calculator').style.display = 'none';
    sciKeyboardBtn.style.display = 'none';
  } else {
    document.querySelector('.js-fa-calculator').style.display = 'block';
    sciKeyboardBtn.style.display = 'block';
  }
}

function openSciKeyBoard(){
  let keyboard = document.querySelector('.sci-keyboard');
  let series = [16,17,18,19,23,27,31,35];

  if(keyboard.classList.contains('appear')){
    document.querySelector('.sci-keyboard').classList.remove('appear');
    keyboardCon.forEach( btn => {
      btn.classList.add('resize');
      if(btn.classList.contains('special')){
        btn.classList.remove('special');
      }
    });
  } else {
    document.querySelector('.sci-keyboard').classList.add('appear');
    keyboardCon.forEach( (btn,ind) => {
      btn.classList.remove('resize');
      series.forEach( n => {
        if ( n === ind){
          btn.classList.add('special');
        }
      });
    });
  }
}

function blink(){
  document.getElementById('input-box').focus();
}

function historyPanel(){
  document.querySelector('.cal-history-panel').classList.toggle('history-appear');
  blink();
}

sunIcon.addEventListener('click', toggleTheam);
moonIcon.addEventListener('click', toggleTheam);
selectTab.addEventListener('change', (e) => {
  swichTab(e.target.value);
});
sciKeyboardBtn.addEventListener('click', openSciKeyBoard);
historyBtn.addEventListener('click', historyPanel);
blink();

// === Basic Calculator ===

const inputBox = document.getElementById('input-box');
let keyword = '';

function clear(){
  inputBox.value = '';
  keyword = '';
}

function calculateResult(){
  try{
    inputBox.value = eval(keyword.slice(0,-1));
    storeHistory();
  } catch(error){
    keyword = '';
    inputBox.value = 'Error';
  }
}

function deletekey(){
  keyword = keyword.slice(0,-2);
  inputBox.value = keyword;
}

keyboardCon.forEach(btn => {
  btn.addEventListener('click' ,(e) => {
    e.stopPropagation();
    let btnKey = e.target.textContent;
    if(btnKey === '()'){
      let openCount = (keyword.match(/\(/g) || []).length;
      let closeCount = (keyword.match(/\)/g) || []).length;

      if(openCount > closeCount){
        btnKey = ')';
      } else {
        btnKey = '(';
      }
    }
    keyword += btnKey;
    inputBox.value = keyword;
  });
});

let historyData = [];

function storeHistory(){
  if(inputBox.value === 'Error') return;
  let panel = document.querySelector('.history-data');
  let history = {
    data : ''
  };
  history.data = inputBox.value;
  historyData.unshift(history);

  panel.innerHTML = '';
  historyData.forEach( n => {
    let li = document.createElement('li');
    li.textContent = `${keyword}${n.data}`;
    panel.appendChild(li);
  });
  keyword = inputBox.value;
}

function clearHistory(){
  document.querySelector('.history-data').innerHTML = '';
  historyData = [];
  inputBox.value = '';
  keyword = '';
}

document.querySelector('.clear-btn').addEventListener('click', clear);
document.querySelector('.equal-btn').addEventListener('click', calculateResult);
document.querySelector('.delete-btn').addEventListener('click', deletekey);
document.querySelector('.history-clear-btn').addEventListener('click', clearHistory);

// === Age , EMI , GramPrice Calculator ===

let resultCon = document.querySelector('.age-result');
let  calculateBtn = document.querySelectorAll('.calculate');

function calculateAge(){
  let userDOB = document.querySelector('.input-date');
  if(!userDOB) return;

  let birthDate = new Date(userDOB.value);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

if(days < 0){
  months--;
  let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  console.log(previousMonth);
  days += previousMonth.getDate();
}
if(months < 0){
  years--;
  months += 12;
}
  resultCon.innerHTML = `<strong> Age: </strong> ${years} Years ${months} Month ${days} Days`;
}

function emiCalculator(){
  let loanAmount = parseFloat(document.getElementById('amount').value);
  let loanInterest = parseFloat(document.getElementById('interest').value);
  let time = parseFloat(document.getElementById('time').value);

  if(isNaN(loanAmount) || isNaN(loanInterest) || isNaN(time)) return;

  let R = (loanInterest / 12) / 100;
  let emi = (loanAmount * R * Math.pow(1 + R, time)) / (Math.pow(1 + R, time) - 1);
  let totalPayment = emi * time;
  let totalInterest = totalPayment - loanAmount;
  document.querySelector('.emi-result').innerHTML = `
    <strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}<br>
    <strong>Principal Amount:</strong> ₹${loanAmount.toFixed(2)}<br>
    <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}<br>
    <strong>Total Payable:</strong> ₹${totalPayment.toFixed(2)}
  `;
}

function gramPrice(){
  let proWeight = document.getElementById('weight').value;
  let proPrice = document.getElementById('price').value;
  let yourNeed = document.getElementById('youNeed');

  if(!proPrice || !proWeight || !yourNeed) return;

  let gramPrice = proPrice / (proWeight * 1000);
  let totalPrice = gramPrice * yourNeed.value;

  document.querySelector('.GramPrice-result').innerHTML = 
  `<strong> ${proWeight}kg Price : </strong> ₹${proPrice} <br>
  <strong> Item Weight : </strong> ${yourNeed.value} grams <br>
  <strong> Item Price : </strong> ${totalPrice.toFixed(2)}`;
}

calculateBtn.forEach( btn => {
  btn.addEventListener('click', () => {
    calculateAge();
    emiCalculator();
    gramPrice();
  });
});