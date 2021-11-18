class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    sumaIva() {
        this.precio = Math.trunc(this.precio * 1.21);
    }
}

const avena = new Producto("Avena",300,25);
const harina = new Producto("Harina", 150,30);
const mascabo = new Producto("Mascabo",120,10);
const coco = new Producto("Coco",160,20);
const nueces = new Producto("Nueces",180,50);
const almendras = new Producto("Almendras",200,60);


avena.sumaIva();
harina.sumaIva();
mascabo.sumaIva();
coco.sumaIva();
nueces.sumaIva();
almendras.sumaIva();

console.log(avena);
console.log(harina);
console.log(mascabo);
console.log(coco);
console.log(nueces);
console.log(almendras);

const listaPrecio = alert(
    "Bienvenido, estas es nuestra lista de precios:" +
      "\n" +
      `${avena.nombre + " " + "$"+avena.precio}` + " " + "\n" +
      `${harina.nombre + " " + "$"+harina.precio}` +  " " + "\n" +
      `${mascabo.nombre + " " + "$"+mascabo.precio}` +  " " + "\n" +
      `${coco.nombre + " " + "$"+coco.precio}` +  " " + "\n" +
      `${nueces.nombre + " " + "$"+nueces.precio}` +  " " + "\n" +
      `${almendras.nombre + " " + "$"+almendras.precio}`
);

alert("Qué quieres comprar?")

function compra() {

    let producto1 = prompt("Ingrese producto 1");

    if ((producto1 === "avena") || (producto1 === "Avena") || (producto1 === "AVENA")) {
      producto1 = avena;
    } else if ((producto1 === "harina") || (producto1 === "Harina") || (producto1 === "HARINA")) {
      producto1 = harina;
    } else if ((producto1 === "mascabo") || (producto1 === "mascabo") || (producto1 === "mascabo")) {
      producto1 = mascabo;
    } else if ((producto1 === "coco") || (producto1 === "Coco") || (producto1 === "COCO")) {
      producto1 = coco;
    } else if ((producto1 === "nueces") || (producto1 === "Nueces") || (producto1 === "NUECES")) {
      producto1 = nueces;
    } else if ((producto1 === "almendras") || (producto1 === "Almendras") || (producto1 === "ALMENDRAS")) {
      producto1 = almendras;
    } else {
      alert("Por favor elija al menos un producto.");
      producto1 = prompt("Ingrese producto 1");
    }

    let producto2 = prompt("Ingrese producto 2");

    if ((producto2 === "avena") || (producto2 === "Avena") || (producto2 === "AVENA")) {
      producto2 = avena;
    } else if ((producto2 === "harina") || (producto2 === "Harina") || (producto2 === "HARINA")) {
      producto2 = harina;
    } else if ((producto2 === "mascabo") || (producto2 === "mascabo") || (producto2 === "mascabo")) {
      producto2 = mascabo;
    } else if ((producto2 === "coco") || (producto2 === "Coco") || (producto2 === "COCO")) {
      producto2 = coco;
    } else if((producto2 === "nueces") || (producto2 === "Nueces") || (producto2 === "NUECES")) {
      producto2 = nueces;
    } else if ((producto2 === "almendras") || (producto2 === "Almendras") || (producto2 === "ALMENDRAS")) {
      producto2 = almendras;
    } else {
      alert("Por favor elija al menos un producto.");
      producto2 = prompt("Ingrese producto 2");
    }

    producto1.stock = producto1.stock -1;
    producto2.stock = producto2.stock-1;

    console.log(producto1);
    console.log(producto2);

    let listaCompra = [];
    listaCompra.push(producto1.nombre, producto2.nombre);

    console.log(listaCompra);

    return listaCompra.sort() + "\n" + "Por $ "+ (producto1.precio + producto2.precio);

}

alert("Estas comprando " + compra());


