/* Graf */

var other = document.getElementById('ine');
var graf1 = document.getElementById('grafika1');
var graf2 = document.getElementById('grafika2');

other.onchange = function(){
    document.getElementById('textAreaIne').style.display = 'block';
};

graf1.onchange = function(){
    document.getElementById('textAreaIne').style.display = 'none';
};

graf2.onchange = function(){
    document.getElementById('textAreaIne').style.display = 'none';
};

/* Others */
function checkbox(){
    var chceckBoxOther = document.getElementById('chceckBoxOther');
    var textAreaCheckBox = document.getElementById('textAreaCheckBox')

    if(chceckBoxOther.checked == true){
        textAreaCheckBox.style.display = 'block';
    }
    else{
        textAreaCheckBox.style.display = 'none';
    }
}