click = document.querySelector("#click");
change = document.querySelector("#change");
amount = document.querySelector("#amount");





click.addEventListener('click', (e) => {
    e.preventDefault();

    let amounts = amount.value;
        amounts = parseInt(amounts);
    if(amounts == "")
        change.innerHTML = "You must enter an amount to change";
    else if(amounts == 10000)
    change.innerHTML = "2 * 5000 XAF";
    else if(amounts == 5000)
        change.innerHTML = "2 * 2000 XAF and 1 * 1000 XAF";
    else if(amounts == 2000)
        change.innerHTML = "2 * 1000 XAF";
    else if(amounts == 1000)
        change.innerHTML = "2 * 500 XAF";
    else
        change.innerHTML = "The amount you enter cannot be change";
    
   
});