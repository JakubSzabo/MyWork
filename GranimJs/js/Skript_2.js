var granimInstance = new Granim({
    element: '#skript_2',
    direction: 'top-bottom',
    image : {
        source: './pictures/skript2.jpg',
        blendingMode: 'hue',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 2000
        }
    }
});