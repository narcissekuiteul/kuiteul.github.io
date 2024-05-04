click = document.querySelector("#click");
change = document.querySelector("#change");
amount = document.querySelector("#amount");





click.addEventListener('click', (e) => {
    e.preventDefault();
    change.innerHTML = "";
    let ten_th = 0, five_th = 0, two_th = 0, one_th = 0, five_hd = 0, one_hd = 0, fift = 0, twenty = 0;
    let amounts = amount.value;
        amounts = parseInt(amounts);
    
        if(amounts >10000){
            while(amounts >= 10000){
                parseInt(ten_th);
                ten_th += 1;
                amounts -=  10000;

            }
        }
        if(amounts > 5000){
            while(amounts > 5000) {
                parseInt(five_th);
                five_th += 1;
                amounts -= 5000;
            }
        }
        if(amounts >= 2000) {  
            while(amounts >= 2000) {
                parseInt(two_th);
                two_th += 1;
                amounts -= 2000;
            }
        }
        if(amounts >= 1000) {
            while(amounts >= 1000) {
                parseInt(one_th);
                one_th += 1;
                amounts -= 1000;
            }
        }
        if(amounts >= 500){
            while(amounts >= 500) {
                parseInt(five_hd);
                five_hd += 1;
                amounts -= 500;
            }
        }
        if(amounts >= 100){
            while(amounts >= 100) {
                parseInt(one_hd);
                one_hd += 1;
                amounts -= 100;
            }
        }
        if(amounts >= 50){
            while(amounts >= 50) {
                parseInt(one_hd);
                fift += 1;
                amounts -= 50;
            }
        }
        if(ten_th != 0) 
            change.innerHTML += ten_th +" * 10000 <br>";
        if(five_th != 0)
            change.innerHTML += five_th +" * 5000 <br>";
        if(two_th != 0)
            change.innerHTML += two_th +" * 2000 <br>";
        if(one_th != 0)
            change.innerHTML += one_th +" * 1000 <br>";
        if(five_hd != 0)
            change.innerHTML += five_hd +" * 500 <br>";
        if(one_hd != 0) 
            change.innerHTML += one_hd +" * 100 <br>";
        if(fift != 0)
            change.innerHTML += fift +" * 50 <br>";
        
});