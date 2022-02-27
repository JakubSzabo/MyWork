/** 1. **/
var play = document.getElementById('play');
var pause = document.getElementById('pause');

var granimInstance = new Granim({
    element: '#skript_3-1',
    direction: 'diagonal',
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#4776E6', '#8E54E9'],
                ['#1A2980', '#26D0CE'],
                ['#9D50BB', '#6E48AA'],
                ['#ADD100', '#7B920A']
            ],
            transitionSpeed: 1500
        },
    }
});

play.onclick = function(){
    granimInstance.play()
}

pause.onclick = function(){
    granimInstance.pause()
}

/** 2. **/
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var red = document.getElementById('red')

var granimInstance2 = new Granim({
    element: '#skript_3-2',
    direction: 'diagonal',
    states : {
        "default-state": {
            gradients: [
                ['#337bab', '#64adde'],
                ['#26d6f2', '#56dff5'],
                ['#52adeb', '#165c6b']
            ],
            transitionSpeed: 1500
        },
        "green": {
            gradients: [
                ['#4ede79', '#52eb80'],
                ['#56f5b3', '#44ab9d'],
                ['#abda65', '#265e57']
            ],
            transitionSpeed: 1500
        },
        "red": {
            gradients: [
                ['#ab3433', '#de7143'],
                ['#de706f', '#e29f93'],
                ['#1A2980', '#914949']
            ],
            transitionSpeed: 1500
        },
    }
});

blue.onclick = function(){
    granimInstance2.changeState('default-state')
}

green.onclick = function(){
    granimInstance2.changeState('green')
}

red.onclick = function(){
    granimInstance2.changeState('red')
}

/** 3. **/
var diagonal = document.getElementById('diagonal');
var radial = document.getElementById('radial');
var topBottom = document.getElementById('topButton');

var granimInstance3 = new Granim({
    element: '#skript_3-3',
    direction: 'diagonal',
    states : {
        "default-state": {
            gradients: [
                ['#337bab', '#64adde'],
                ['#52adeb', '#165c6b'],
                ['#de706f', '#e29f93'],
                ['#26d6f2', '#56dff5'],
                ['#abda65', '#265e57'],
                ['#ab3433', '#de7143'],
                ['#4ede79', '#52eb80'],
                ['#1A2980', '#914949'],
                ['#56f5b3', '#44ab9d']
            ],
            transitionSpeed: 1500
        },
    }
});

diagonal.onclick = function(){
    granimInstance3.changeDirection('diagonal');
}

radial.onclick = function(){
    granimInstance3.changeDirection('radial');
}

topBottom.onclick = function(){
    granimInstance3.changeDirection('top-bottom');
}