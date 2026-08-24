function item1() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.image1

        document.getElementById('categoria').innerHTML = corpo.category1

        document.getElementById('descricao').innerHTML = corpo.describe1

        document.getElementById('preco').innerHTML = corpo.price1


         
    })
}

function item2() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.image2

        document.getElementById('categoria').innerHTML = corpo.category2

        document.getElementById('descricao').innerHTML = corpo.describe2

        document.getElementById('preco').innerHTML = corpo.price2

         
    })
}

function item3() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.image3

        document.getElementById('categoria').innerHTML = corpo.category3

        document.getElementById('descricao').innerHTML = corpo.describe3

        document.getElementById('preco').innerHTML = corpo.price3




         
    })
}

function item4() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.image4

        document.getElementById('categoria').innerHTML = corpo.category4

        document.getElementById('descricao').innerHTML = corpo.describe4

        document.getElementById('preco').innerHTML = corpo.price4




         
    })
}

function item5() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.image5

        document.getElementById('categoria').innerHTML = corpo.category5

        document.getElementById('descricao').innerHTML = corpo.describe5

        document.getElementById('preco').innerHTML = corpo.price5




         
    })
}


