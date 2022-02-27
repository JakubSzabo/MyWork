var confirmBtn = document.getElementById('confirm');
var backgraund = document.getElementById('bg');

confirmBtn.onclick = function(){
    if(verifiNumX() == 1 && verifiNumY() == 1){
        backgraund.style.display = "block";
        makeTable();   
    }
    else{
        return 0;
    }
};