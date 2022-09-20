const autos = [
    { id: 1, modelo: "207", marca: "peugeot", precio: "2500000", img: "./img/207.jpg" },
    { id: 2, modelo: "rcz", marca: "peugeot", precio: "3500000", img: "./img/rcz.jpg" },
    { id: 3, modelo: "x6", marca: "bmw", precio: "4500000", img: "./img/x6.jpg" },
    { id: 4, modelo: "corolla", marca: "toyota", precio: "2400000", img: "./img/corolla.jpg" },
    { id: 5, modelo: "focus", marca: "ford", precio: "2700000", img: "./img/focus.jpg" },
    { id: 6, modelo: "cruze", marca: "chevrolet", precio: "2900000", img: "./img/cruze.jpg" },
    { id: 7, modelo: "mito", marca: "alfa romeo", precio: "3700000", img: "./img/mito.jpg" },
    { id: 8, modelo: "clio", marca: "renault", precio: "1600000", img: "./img/clio.jpg" },
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
const contenedor = document.querySelector('.contenedor');
const contenidoCards = document.querySelector('.contenido__cards');
const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const botonSearchLogin = document.getElementById("botonSearchLogin");
const checkboxLogin = document.querySelector('.checkboxLogin');


h1.innerText = "Probando contenido dinamico";
// agregar las CARDS MEDIANTE JS
    
function crearCards() {
    autos.forEach(auto => {

        const cardCreate = document.createElement('div')
        const contenidoCard = ` <div class="col">
        <div class="card p-3" style="width: 18rem;">
          <img src=${auto.img} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${auto.marca}</h5>
            <p class="card-text">${auto.modelo}</p>
            <h5 class="card-text2">Precio: ${auto.precio}$</h5>
            <a href="#" class="btn btn-primary agregarAfavoritos" id="a">Agregar a favoritos</a>
          </div>
        </div>
      </div>`;
        cardCreate.innerHTML = contenidoCard
        contenidoCards.append(cardCreate);
    });
}
crearCards();

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
    <div class="favoritos__contenido contenedor"> 
          <div class="card p-3 " style="width: 18rem;">
            <img src=${cardImg} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cardTitle}</h5>
              <p class="card-text">${cardText}</p>
              <h5 class="card-text2">${cardText2}</h5>
              
              <button type="button" class="btn btn-danger botonDelete">X</button>
            </div>

          </div>
    `;
    cardDiv.innerHTML = cardContenido
    contenedor.append(cardDiv);

    cardDiv.querySelector('.botonDelete').addEventListener('click', eliminarCard)
    
  

    
}
// funcion de ELIMINAR CARTA 

function eliminarCard(event) {
    const buttonClick = event.target
    buttonClick.closest('.card').remove();
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


// LOGIN

function guardadoEnLSoST(valor) {
    let user = {username: inputEmail.value, password: inputPassword.value }
if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
}
if (valor === "localStorage"){
    localStorage.setItem("user", JSON.stringify(user));
}
return user
}

function recover(datos){
if(datos){
    inputEmail.value = datos.username;
    inputPassword.value = datos.password;
}
}

recover(JSON.parse(localStorage.getItem("user")));

botonSearchLogin.addEventListener('click',(e)=>{
e.preventDefault();
if (checkboxLogin.checked){
    guardadoEnLSoST("localStorage");
    console.log("guardado en Local");
} else {
    guardadoEnLSoST("sessionStorage");
    console.log("guardado en Sesion");
}

});

