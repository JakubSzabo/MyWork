const ano = document.getElementById("ano")
const con = document.getElementById("confirm-none")

const verifi = localStorage.getItem("verifi")

if(verifi == 1){
    con.style.display = "none"
}

ano.addEventListener("click", () => {
    localStorage.setItem("verifi", 1)
    con.style.display = "none"
})