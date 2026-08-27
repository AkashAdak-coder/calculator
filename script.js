function switchTab(tabId){
  // remove all active classes 
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // highlight useing tab-btn and tab-content 
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
//---1. Normal Calculator Logics ---
let displayBox = document.getElementById('display-calc');
let keyword = '';

function clearCalc(){
  displayBox.value = '';
  keyword = '';
}

document.querySelectorAll('.pressKey').forEach(button => {
  button.addEventListener('click', () =>{
    displayBox.value += button.textContent;
    keyword += button.textContent;
  });
});

function calculateResult(){
  try{
    displayBox.value = eval(displayBox.value);
    storeHistory();
    displayHistory();

    keyword = displayBox.value;
  } catch(error){
    displayBox.value = 'Error';
  }
}

function deleteBtn(){
  displayBox.value = displayBox.value.slice(0,-1);
}

// ---2. age calculator logic ---
function calculateAge() {
  let birthInput = document.getElementById('birthdate').value;
  if (!birthInput) return;

  let birthDate = new Date(birthInput);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('age-result').innerHTML = 
    `<strong>Age:</strong> ${years} Years, ${months} Months, and ${days} Days.`;
}
// --- 3. EMI Calculator Logic ---
function calculateEMI() {
  let P = parseFloat(document.getElementById('loan-amount').value);
  let annualRate = parseFloat(document.getElementById('interest-rate').value);
  let N = parseFloat(document.getElementById('loan-tenure').value);

  if (isNaN(P) || isNaN(annualRate) || isNaN(N)) return;

  // Monthly interest rate calculation
  let R = (annualRate / 12) / 100;

  // Standard Banking EMI Formula: P * R * (1+R)^N / ((1+R)^N - 1)
  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  let totalPayment = emi * N;
  let totalInterest = totalPayment - P;

  document.getElementById('emi-result').innerHTML = `
    <strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}<br>
    <strong>Principal Amount:</strong> ₹${P.toFixed(2)}<br>
    <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}<br>
    <strong>Total Payable:</strong> ₹${totalPayment.toFixed(2)}
  `;
}


// ---4. Weight Price Calculate Logic ---
function weightPriceCalculate(){
  let kgPrice = parseFloat(document.getElementById('kgPrice').value);
  let weightGram = parseFloat(document.getElementById('grams').value);
  let result = document.getElementById('weight-price-result');

  if(isNaN(kgPrice) || isNaN(weightGram) || kgPrice <= 0 || weightGram <= 0){
    result.innerHTML = `<p style="color: red;">Enter Your Value</p>`;
  }

  let gramPrice = kgPrice / 1000;
  let totalPrice = gramPrice * weightGram;

  result.innerHTML = 
  `<strong> 1kg Price : </strong> ${kgPrice.toFixed(2)} <br>
  <strong> Item Weight : </strong> ${weightGram} grams <br>
  <strong> Item Price : </strong> ${totalPrice.toFixed(2)}`;
}

// History Panel All Logics

const historyBtn = document.querySelector('.history-button');
const historyPanel = document.querySelector('.history-panel');
const closeBtn = document.querySelector('.close-btn');

historyBtn.addEventListener('click', ()=> {
  historyPanel.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
  historyPanel.classList.toggle('hidden');
});

let historyList = [];

function storeHistory(){
  let newObject = {
    data : ''
  };
  newObject.data = `${keyword} = ${displayBox.value}`;
  historyList.push(newObject);
}

function displayHistory(){
  let html = '';
  historyList.forEach(list => {
    html += `<div class="history-data"> ${list.data} </div>`;
  });

  document.querySelector('.history-list').innerHTML = html;
}

function clearAll(){
  document.querySelector('.history-list').innerHTML = '';
}

document.querySelector('#clear-history-btn').addEventListener('click', () => {
  clearAll();
});