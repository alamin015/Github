
const myFunction = (id1,id2) => {
    var forEmptyInput = document.getElementById(id1);
    var finalDeposit = document.getElementById(id2);
    let depositInput = parseFloat(document.getElementById(id1).value);
    let totalDeposit = parseFloat(document.getElementById(id2).innerText);
if(depositInput > 0){
    totalDeposit += depositInput;

    finalDeposit.innerHTML = totalDeposit;
    
    return depositInput;
}
forEmptyInput.value = '';
}

// UPDATE BALANCE FUNCTION 
const updateBalance = (ammount,isTrue) => {
    var totalBalance = document.getElementById('totalBalance');
    var balanceNumber = parseFloat(document.getElementById('totalBalance').innerText);
    if(ammount > 0 && isTrue){
        balanceNumber += ammount;
        totalBalance.innerText = balanceNumber;
        
    }else if(ammount > 0 && !isTrue){
        balanceNumber -= ammount;
        totalBalance.innerText = balanceNumber;
    }else{

    }
    
}



document.getElementById('depositBtn').addEventListener('click',() => {

  let depositValue = myFunction('depositAmmount','totalDeposit')
  updateBalance(depositValue,true);
    

})

document.getElementById('withdrawBtn').addEventListener('click',() => {

    let depositValue =myFunction('withdrawAmmount','withdraw');
    updateBalance(depositValue,false);
    
      
  
  })