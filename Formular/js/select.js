var selectedOptionCpu = document.getElementById('cpu');
var selectedOptionIntel = document.getElementById('Intel');
var selectedOptionAMD = document.getElementById('AMD');

var htmlCollectionCPU = document.getElementsByClassName('intelAmdJs');
var htmlCollectionIntel = document.getElementsByClassName('IxJs');
var htmlCollectionAMD = document.getElementsByClassName('RxJs');

var arrCpu = Array.from(htmlCollectionCPU);
var arrIntel = Array.from(htmlCollectionIntel);
var arrAMD = Array.from(htmlCollectionAMD);

/* CPU -> Intel / AMD */
selectedOptionCpu.onchange = function(){
    arrCpu.forEach(function(element){
        element.style.display = 'none';
    });
    document.getElementById(this.value).style.display = 'inline';

    document.body.style.backgroundImage = `url('pictures/${this.value}.jpg')`;
};

/* Intel -> Ix */
selectedOptionIntel.onchange = function(){
    arrIntel.forEach(function(element){
        element.style.display = 'none';
    });
    document.getElementById(this.value).style.display = 'inline';
};

/* Amd -> Rx */
selectedOptionAMD.onchange = function(){
    arrAMD.forEach(function(element){
        element.style.display = 'none';
    });
    document.getElementById(this.value).style.display = 'inline';
};