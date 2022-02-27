var zoznam = document.getElementById('produkty')

fetch("js/products.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            const li = document.createElement("li")
            zoznam.appendChild(li)
            const div =  document.createElement('div')
            div.className = 'img-eshop'
            li.appendChild(div)
            const a = document.createElement('a')
            const h2 = document.createElement('h2')
            const h3 = document.createElement('h2')
            a.href = '#'
            h2.innerHTML = `${product.nazov}`
            h3.innerHTML = `${product.cena}€`
            div.appendChild(a)
            div.appendChild(h2)
            div.appendChild(h3)
            const img = document.createElement('img')
            img.src = `${product.src}`
            img.alt = `${product.alt}`
            a.appendChild(img)
            const div2 = document.createElement('div')
            div2.className = 'buy-btn-border'
            li.appendChild(div2)
            const a2 = document.createElement('a')
            a2.href = '#'
            a2.id = `${product.id}`
            a2.className = 'buy-btn'
            a2.innerHTML = ' Do Košíka <i class="fas fa-shopping-basket"></i>'
            a2.addEventListener("click", doKosika)
            div2.appendChild(a2)    
        });
    })
 

