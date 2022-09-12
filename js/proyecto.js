const autos = [
    { id: 1, modelo: "207", marca: "peugeot", precio: "2500000", img: "207.jpg" },
    { id: 2, modelo: "rcz", marca: "peugeot", precio: "3500000", img: "rcz.jpg" },
    { id: 3, modelo: "x6", marca: "bmw", precio: "4500000", img: "x6.jpg" },
    { id: 4, modelo: "corolla", marca: "toyota", precio: "2400000", img: "corolla.jpg" },
    { id: 5, modelo: "focus", marca: "ford", precio: "2700000", img: "focus.jpg" },
    { id: 6, modelo: "cruze", marca: "chevrolet", precio: "2900000", img: "cruze.jpg" },
    { id: 7, modelo: "mito", marca: "alfa romeo", precio: "3700000", img: "mito.jpg" },
    { id: 8, modelo: "clio", marca: "renault", precio: "1600000", img: "clio.jpg" },
];

console.log(autos);

function auto(id, modelo, marca, precio, img) {
    this.id = id;
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;
    this.img = img;
}

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const lista = document.getElementById("lista");
const card = document.querySelectorAll("card");
const a = document.getElementById("a");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const botonSearch = document.querySelector("#botonSearch");
const inputSearch = document.querySelector("#inputSearch");
const contenedor = document.querySelector('.contenedor')

h1.innerText = "Probando contenido dinamico";

// AGREGANDO CONTENIDO A FAVORITOS MEDIANTE EVENTO CLICK


const agregarAFavoritos = document.querySelectorAll('.agregarAfavoritos');

agregarAFavoritos.forEach(agregar => {
    agregar.addEventListener('click', agregarAfavoritosClicked);
})

function agregarAfavoritosClicked(event) {
    const button = event.target;
    const card = button.closest('.card');
    const cardTitle = card.querySelector('.card-title').textContent;
    const cardText = card.querySelector('.card-text').textContent;
    const cardText2 = card.querySelector('.card-text2').textContent;
    const cardImg = card.querySelector('.card-img-top').src;

    agregandoAfavoritos(card, cardImg, cardTitle, cardText, cardText2)
}

function agregandoAfavoritos(card, cardImg, cardTitle, cardText, cardText2) {
    const cardDiv = document.createElement('div')
    const cardContenido = `
    <div class="row favoritos__contenido contenedor">
          
          <div class="card p-3 " style="width: 18rem;">
            <img src=${cardImg} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cardTitle}</h5>
              <p class="card-text">${cardText}</p>
              <h5 class="card-text2">${cardText2}</h5>
              
              <button type="button" class="btn btn-danger">X</button>
            </div>

          </div>
    `;
    cardDiv.innerHTML = cardContenido
    contenedor.append(cardDiv);
}


// BUSQUEDA Y FILTRADO POR CONSOLA MEDIANTE EVENT CLICK

function filtrarModelo(arr, filtro) {
    const filtrado = arr.filter(el => {
        return el.modelo.includes(filtro);
    })
    return filtrado;
}
botonSearch.addEventListener('click', () => {
    let resultado = filtrarModelo(autos, inputSearch.value)
    console.log(resultado);

})

// RESULTADO DE BUSQUEDA EN HTML 

inputSearch.addEventListener('input', () => {
    let resultado = filtrarModelo(autos, inputSearch.value)
    h2.innerText = "Busqueda: " + `${resultado[0].modelo}`;
})




/*
const nuevoAuto = new auto(9, "focus", "ford", "3000000");

function cargarAuto(arr,valor) {
    arr.push(valor);
}
cargarAuto(autos,nuevoAuto)

console.log(autos);

for (const objeto of autos) {
    console.log(objeto);
}

let preguntaAgregarAuto = prompt("Quieres agregar un nuevo auto?"
+ " Selecciona un opción \n 1 - No \n 2 - Si");

if (preguntaAgregarAuto > 1) {
   
        let entrada = prompt("ingresa modelo");
        autos.push(entrada);
        let entrada2 = prompt("ingresa marca");
        autos.push(entrada2);
        let entrada3 = prompt("ingresa precio");
        autos.push(entrada3);
        console.log(autos);

} else{
    for (const objeto of autos) {
        console.log(objeto);
    }
}


const resultado = autos.some((el) => el.modelo == "onix")
const resultado2 = autos.some((el) => el.modelo == "celta")


console.log(resultado);
console.log(resultado2);


const precio = autos.map((precios)=>{

    return precios.marca;

});

const actualizarPrecio = autos.map ((precios)=>{
return {
    id: precios.id,
    modelo: precios.modelo,
    marca: precios.marca,
    precio: precios.precio * 2 ,

};


});

console.log(actualizarPrecio);



const masBarato = autos.filter (modelo => modelo.precio < 3000000)

console.log(masBarato);
*/









