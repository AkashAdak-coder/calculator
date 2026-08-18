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