function verifiNumX(){
    var X = document.getElementById('X');
    
    var warningX = document.getElementById('warningX');
    
    var pattern = /^[1-9]$/
    var errorMsg = "Zadaj celé číslo od 1 do 9"

    if(pattern.test(X.value) == true){
        X.style.borderColor = "black";
        
        warningX.style.display = "none";
        return 1;
    }
    else{
        X.style.borderColor = "red";
        
        warningX.textContent = errorMsg;
        warningX.style.display = "block";
        return 0;
    }

}

function verifiNumY(){
    var Y = document.getElementById('Y');
    
    var warningY = document.getElementById('warningY');
    
    var pattern = /^[1-9]$/
    var errorMsg = "Zadaj celé číslo od 1 do 9"

    if(pattern.test(Y.value) == true){
        Y.style.borderColor = "black";
        
        warningY.style.display = "none";
        return 1;
    }
    else{
        Y.style.borderColor = "red";
        
        warningY.textContent = errorMsg;
        warningY.style.display = "block";
        return 0;
    }
}