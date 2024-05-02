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
    change.innerHTML = "2 * 5000 or 5 * 2000 or 10 * 1000 or 20 * 500";
    else if(amounts == 5000)
        change.innerHTML = "2 * 2000 and 1 * 1000 or 5 * 1000 or 10 * 500";
    else if(amounts == 2000)
        change.innerHTML = "2 * 1000 or 4 * 500";
    else if(amounts == 1000)
        change.innerHTML = "2 * 500";
    else
        change.innerHTML = "The amount you enter cannot be change";
    
   
});