const autos = [
{id: 1, modelo:"207", marca: "peugeot", precio:"2500000"},
{id: 2, modelo:"308", marca: "peugeot", precio:"3500000"},
{id: 3, modelo:"3008", marca: "peugeot", precio:"4500000"},
{id: 4, modelo:"corolla", marca: "toyota", precio:"2400000"},
{id: 5, modelo:"fiesta", marca: "ford", precio:"2700000"},
{id: 6, modelo:"onix", marca: "chevrolet", precio:"2900000"},
{id: 7, modelo:"golf", marca: "volkswagen", precio:"3700000"},
{id: 8, modelo:"corsa", marca: "chevrolet", precio:"1600000"},
];

console.log(autos);

function auto(id, modelo, marca, precio) {
    this.id = id;
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;

}

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

if (preguntaAgregarAuto = 2) {
   
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





