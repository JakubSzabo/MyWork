function kosik(){
    var counter = document.getElementById('item-basket')
    let length = localStorage.length
    if(length > 0){
        counter.style.display = 'block'
        document.getElementById('item-basket-js').innerHTML = length
    }  
}

function doKosika(event){
    event.preventDefault()
    
    var counter = document.getElementById('item-basket')
    var id = this.id
    let localS = Object.entries(localStorage)
    if(localS == ""){
        localStorage.setItem(id, 1)
    }
    for(const i in localS){
        let inL = localS[i][0]        
        if(inL == id){ 
            break
        }
        else{
            localStorage.setItem(id, 1)
            break
        }
    }

    let length = localStorage.length
    if(length > 0){
        counter.style.display = 'block'
        document.getElementById('item-basket-js').innerHTML = length
    }
}