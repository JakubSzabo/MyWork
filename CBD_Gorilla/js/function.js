document.getElementById('inc').onclick = function(){
    var val = document.getElementById('pocet').value
    val++
    document.getElementById('pocet').value = val
    cena()
}

document.getElementById('dec').onclick = function(){
    var val = document.getElementById('pocet').value
    if(val > 1){ 
        val--
        document.getElementById('pocet').value = val
        cena()
    }
}

document.getElementById('s10').onclick = function(){cena()}
document.getElementById('s25').onclick = function(){cena()}
document.getElementById('s30').onclick = function(){cena()}

function cena(){
    var s10 = document.getElementById('s10')
    var s25 = document.getElementById('s25')
    var s30 = document.getElementById('s30')
    var price = document.getElementById('cena')
    var pocet = document.getElementById('pocet').value

    if(s10.selected == true){
        price.innerHTML = `${20 * pocet}€`
    }

    if(s25.selected == true){
        price.innerHTML = `${30 * pocet}€`
    }

    if(s30.selected == true){
        price.innerHTML = `${40 * pocet}€`
    }
}