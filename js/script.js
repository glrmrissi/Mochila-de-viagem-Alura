const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens =  JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((element) => {
    console.log(element.name, element.quantidade)
});

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']

    createElement(nome.value, quantidade.value)

    name.value = ""
    quantidade.value = ""
})

function createElement(name, quantidade) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += name

    lista.appendChild(novoItem)
    
    const itemAtual = {
        "name": name,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))
}