var granimInstance = new Granim({
    element: '#skript1',     
    direction: 'top-bottom',  
    states : {
        "default-state": {
            gradients: [
                ['#fff', '#000'],
                ['#44ab9d','#56dff5'],
                ['#de6564', '#a36fde']
            ],
            transitionSpeed: 1500
        }
    }
 });