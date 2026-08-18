function switchTab(tabId){
  // remove all active classes 
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // highlight useing tab-btn and tab-content 
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
//Normal Calculator Logics
let displayBox = document.getElementById('display-calc');

function clearCalc(){
  displayBox.value = '';
}

function pressKey(key){
  displayBox.value += key;
}

function calculateResult(){
  try{
    displayBox.value = eval(displayBox.value);
  } catch(error){
    displayBox.value = 'Error';
  }
}

//age calculator logic
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