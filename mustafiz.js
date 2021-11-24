var depositBtn = document.getElementById("depositBtn");
var withdrawBtn = document.getElementById("withdrawBtn");


// Deposit function here 
const deposit = (id) => {
    let depositAmmount = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = "";
    return depositAmmount;
}

// totalDeposit function 
const totalDeposit = (id, ammount) => {
    let totalDeposit = parseInt(document.getElementById(id).innerHTML);
    let h = document.getElementById(id).innerHTML;

    if(ammount > 0){
        totalDeposit += ammount;
        h.innerHTML = totalDeposit;
        return totalDeposit;
    }
    
}

// calculation part total ammount 

const calculation = (ammount, isTrue) => {
    let totalBalance = parseInt(document.getElementById("totalBalance").innerHTML);

    if(ammount > 0 && isTrue){
        totalBalance += ammount;
        document.getElementById("totalBalance").innerHTML = totalBalance;
    }

}


depositBtn.addEventListener("click",() => {
    let depositAmmount = deposit('depositAmmount');
    let totaldeposit = totalDeposit('totalDeposit',depositAmmount);

    calculation(depositAmmount,true)




    // let totalBalance = parseInt(document.getElementById("totalBalance").innerHTML);


    // if(depositAmmount){
    //     totalBalance += depositAmmount;
    //     document.getElementById("totalDeposit").innerHTML = totaldeposit;
    //     document.getElementById("totalBalance").innerHTML = totalBalance;


    // }else{

        
    // }

})


// withdrawBtn.addEventListener('click',() => {
//     let withdrawAmmount = deposit('withdrawAmmount');
//     let totalWithdraw = totalDeposit('totalWithdraw');
//     let totalBalance = parseInt(document.getElementById("totalBalance").innerHTML);


//     if(withdrawAmmount){
//         totalWithdraw += withdrawAmmount;
//         totalBalance -= withdrawAmmount;
//         document.getElementById("totalWithdraw").innerHTML = totalWithdraw;
//         document.getElementById("totalBalance").innerHTML = totalBalance;


//     }else{

        
//     }

// })