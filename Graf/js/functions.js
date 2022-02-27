function slider(){
    var value = document.getElementById('tSlider').value;
    var slider = document.getElementById('sliderValue');

    slider.innerHTML = value

    if(value == 1) slider.style.left = "22px";
    if(value == 2) slider.style.left = "38px";
    if(value == 3) slider.style.left = "54px";
    if(value == 4) slider.style.left = "70px";
    if(value == 5) slider.style.left = "86px";
    if(value == 6) slider.style.left = "102px";
    if(value == 7) slider.style.left = "118px";
    if(value == 8) slider.style.left = "134px";
    if(value == 9) slider.style.left = "150px";
    if(value == 10) slider.style.left = "166px";
}

function verifi(){
    num = document.getElementById('tNum')
    slider = document.getElementById('tSlider')
    p = document.getElementById('p')

    if(num.value > 10 || num.value < 1){
        num.style.borderColor = 'red';
        p.style.visibility = "visible";

    }
    else{
        num.style.borderColor = 'black';
        p.style.visibility = "hidden";
    }
}

function input(){
    if(document.getElementById('slider').checked == true){
        document.getElementById('tNum').style.visibility = "hidden"
        document.getElementById('tSlider').style.visibility = "visible"
        document.getElementById('sliderValue').style.visibility = "visible"
        
        var slider = document.getElementById('tSlider');
        var value = document.getElementById('sliderValue').value;
        
        slider.innerHTML = value
    
        if(value == 1) slider.style.left = "22px";
        if(value == 2) slider.style.left = "38px";
        if(value == 3) slider.style.left = "54px";
        if(value == 4) slider.style.left = "70px";
        if(value == 5) slider.style.left = "86px";
        if(value == 6) slider.style.left = "102px";
        if(value == 7) slider.style.left = "118px";
        if(value == 8) slider.style.left = "134px";
        if(value == 9) slider.style.left = "150px";
        if(value == 10) slider.style.left = "166px";
        
    }

    if(document.getElementById('num').checked == true){
        document.getElementById('tNum').style.visibility = "visible"
        document.getElementById('tSlider').style.visibility = "hidden"
        document.getElementById('sliderValue').style.visibility = "hidden"
    }
}

function updateTextInput1(e){
    document.getElementById('tNum').value = e;
}

function updateTextInput(e){
    document.getElementById('tSlider').value = e;
}

function check(){
    sinus = document.getElementById('sinus');
    cosinus = document.getElementById('cosinus');

        if(sinus.checked == true && cosinus.checked == true){
            var visibility = {'opacity': 1};
            Plotly.restyle('graf',visibility, [0,1]);
        }

        else if(sinus.checked == true && cosinus.checked == false){
            var visibility = {'opacity': 0};
            Plotly.restyle('graf',visibility, 1);

            var visibility = {'opacity': 1};
            Plotly.restyle('graf',visibility, 0);
        }

        else if(sinus.checked == false&& cosinus.checked == true){
            var visibility = {'opacity': 0};
            Plotly.restyle('graf',visibility, 0);

            var visibility = {'opacity': 1};
            Plotly.restyle('graf',visibility, 1);
        }

        else if(sinus.checked == false&& cosinus.checked == false){
            var visibility = {'opacity': 0};
            Plotly.restyle('graf',visibility, [0,1
            ]);
        }
}