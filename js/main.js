let container = document.getElementById("container")

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Hatolik topildi! Qaytadan qiling!")
        }
        return response.json()
    })
    .then(data => {
        data.forEach(element => {
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="miniproduct">
                <img src="${element.image}" alt="" class="img">
                <div class="every_h1">
                    <h1 class="description">${element.title}</h1>
                    <h1 class="description">${element.price}</h1>
                    <h1 class="description">${element.description}</h1>
                <h1 class="description">${element.rating.rate}</h1>
            <h1 class="description">${element.rating.count}</h1>
            </div>
            </div>
        `

            div.classList.add("product")
            container.append(div)
        });
    })
    .catch(error => {
        console.error("Hatolik topildi!", error)
    })

let men = document.getElementById("men")
let women = document.getElementById("women")
let dark_mode = document.getElementById("dark_mode")

men.addEventListener("click", function () {
    container.innerHTML = ""
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Hatolik topildi! Qaytadan qiling!")
            }
            return response.json()
        })
        .then(data => {
            data.forEach(element => {
                if (element.category == "men's clothing") {
                    let div = document.createElement("div")
                    div.innerHTML = `
                <div class="miniproduct">
                    <img src="${element.image}" alt="" class="img">
                    <div class="every_h1">
                        <h1 class="description">${element.title}</h1>
                        <h1 class="description">${element.price}</h1>
                        <h1 class="description">${element.description}</h1>
                    <h1 class="description">${element.rating.rate}</h1>
                <h1 class="description">${element.rating.count}</h1>
                </div>
                </div>
                `

                    div.classList.add("product")
                    container.append(div)
                }
            });
        })
        .catch(error => {
            console.error("Hatolik topildi!", error)
        })
})






women.addEventListener("click", function () {
    container.innerHTML = ""
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Hatolik topildi! Qaytadan qiling!")
            }
            return response.json()
        })
        .then(data => {
            data.forEach(element => {
                if (element.category == "women's clothing") {
                    let div = document.createElement("div")
                    div.innerHTML = `
                <div class="miniproduct">
                    <img src="${element.image}" alt="" class="img">
                    <div class="every_h1">
                        <h1 class="description">${element.title}</h1>
                        <h1 class="description">${element.price}</h1>
                        <h1 class="description">${element.description}</h1>
                    <h1 class="description">${element.rating.rate}</h1>
                <h1 class="description">${element.rating.count}</h1>
                </div>
                </div>
                `

                    div.classList.add("product")
                    container.append(div)
                }
            });
        })
        .catch(error => {
            console.error("Hatolik topildi!", error)
        })
})

let header = document.getElementById("header")
let buttons = document.getElementById("buttons")

dark_mode.addEventListener("click", function(){
    header.classList.add("header2")
    header.classList.remove("header")
    
    
})