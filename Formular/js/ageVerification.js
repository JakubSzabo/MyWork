function ageCalculation(bDate, today, age){
    var splitBDate = bDate.split('-');
    var splitToday = today.split('/');
    var errorAge = document.getElementById('age');
    var errorBDate = document.getElementById('bDate');
    var errorReport = document.getElementById('errorReport');
    var pattern = /\d+/;
    var pattern2 = /(\d{1,2})[/](\d{1,2})[/](\d{1,})/;
    
    if(pattern.test(errorAge.value) == true){
        errorAge.style.borderColor = 'black';
    }
    else{
        errorAge.style.borderColor = 'red'; 
    }

    if(pattern2.test(errorBDate.value) == true){
        errorBDate.style.borderColor = 'black';
    }
    else{
        errorBDate.style.borderColor = 'red'; 
    }

    if(bDate != "" && age != ""){
        if((splitToday[0] - splitBDate[0]) == age){
            if((splitToday[1] - splitBDate[1]) >= 0){ 
                if((splitToday[1] - splitBDate[1]) == 0){
                    if((splitToday[2] - splitBDate[2]) >= 0){
                        errorAge.style.borderColor = 'black';
                        errorBDate.style.borderColor = 'black';
                        errorReport.style.display = 'none';
                    }
                    else{
                        errorAge.style.borderColor = 'red';   
                        errorBDate.style.borderColor = 'red';
                        errorReport.style.display = 'inline-block';
                    }
                }
                else{
                    errorAge.style.borderColor = 'black';
                    errorBDate.style.borderColor = 'black';
                    errorReport.style.display = 'none';
                }
            }
            else{
                errorAge.style.borderColor = 'red';   
                errorBDate.style.borderColor = 'red';
                errorReport.style.display = 'inline-block';
            }
        }
        else{
            errorAge.style.borderColor = 'red';
            errorBDate.style.borderColor = 'red';
            errorReport.style.display = 'inline-block';
        }
    }
}



function ageVerification(){
    var age = document.getElementById('age').value;
    var bDate = document.getElementById('bDate').value;
    var today =  new Date().toJSON().slice(0,10).replace(/-/g,'/');

    ageCalculation(bDate, today, age);
}




