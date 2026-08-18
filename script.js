function switchTab(tabId){
  // remove all active classes 
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // highlight useing tab-btn and tab-content 
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
//Normal Calculator Functions
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