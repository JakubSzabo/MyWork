var section = document.getElementById("produkty")

if(Object.entries(localStorage) == ""){
    const h6 = document.createElement('h6')
    h6.innerText = "Váš košík je prázdny"
    section.appendChild(h6)
}
else{
    const ul = document.createElement("ul")
    ul.id = "ul-kosik"
    section.appendChild(ul)
    arr = Object.entries(localStorage)
    arr.forEach(element => {
        var id = element[0]
        fetch("js/products.json")
            .then(res => res.json())
            .then(data => {
                var length = Object.keys(data).length
                for(var i = 0; i < length; i++){
                    if(id == data[i].id){
                        const h5 = document.createElement("h5")
                        const input = document.createElement("input")
                        input.id = `${i}`
                        input.value = "1"
                        const divPlus = document.createElement("div")
                        divPlus.id = "plus"
                        divPlus.className = `${i}`
                        divPlus.innerHTML = "+"
                        divPlus.addEventListener("click", (e) => {
                            value = (input.value)
                            value++
                            input.value = value

                            var classD = divPlus.getAttribute("class")
                            console.log(classD)
                            value = input.value
                        })
                        
                        const divMinus = document.createElement("div")
                        divMinus.id = "minus"
                        divMinus.innerHTML = "-"
                        divMinus.className = `${i}`
                        divMinus.addEventListener("click", () => {
                            if(input.value > "0"){
                                value = (input.value)
                                value--
                                input.value = value
                            }
                        })
                        
                        const li = document.createElement("li")
                        li.id = "li-kosik"
                        const img = document.createElement("img")
                        img.id = "img-kosik"
                        img.src = `${data[i].src}`
                        img.alt = `${data[i].alt}`
                        const h4 = document.createElement("h4")
                        h4.id = "nazov-kosik"
                        h4.innerText = `${data[i].nazov}`
                        
                        h5.id = "cena-kosik"
                        h5.innerText = `${data[i].cena * input.value}€`


                        

                        ul.appendChild(li)
                        li.appendChild(img)
                        li.appendChild(h4)
                        li.appendChild(divPlus)
                        li.appendChild(input)
                        li.appendChild(divMinus)
                        li.appendChild(h5)
                    }
                }
            })
    });
}