const catalogo = [
    {
        id: 1,
        nombre: "Código-10001",
        precio: 40000,
        img: "../assets/img/productos/1.png",
    },
    {
        id: 2,
        nombre: "Código-10002",
        precio: 40000,
        img: "../assets/img/productos/2.png",
    },
    {
        id: 3,
        nombre: "Código-10003",
        precio: 40000,
        img: "../assets/img/productos/3.png",
    },
    {
        id: 4,
        nombre: "Código-10004",
        precio: 40000,
        img: "../assets/img/productos/4.png",
    },
    {
        id: 5,
        nombre: "Código-10005",
        precio: 40000,
        img: "../assets/img/productos/5.png",
    },
    {
        id: 6,
        nombre: "Código-10006",
        precio: 40000,
        img: "../assets/img/productos/6.png",
    },
    {
        id: 7,
        nombre: "Código-10007",
        precio: 40000,
        img: "../assets/img/productos/7.png",
    },
    {
        id: 8,
        nombre: "Código-10008",
        precio: 40000,
        img: "../assets/img/productos/8.png",
    },
    {
        id: 9,
        nombre: "Código-10009",
        precio: 40000,
        img: "../assets/img/productos/9.png",
    },
    {
        id: 10,
        nombre: "Código-10010",
        precio: 40000,
        img: "../assets/img/productos/10.png",
    },
    {
        id: 11,
        nombre: "Código-10011",
        precio: 40000,
        img: "../assets/img/productos/11.png",
    },
    {
        id: 12,
        nombre: "Código-10012",
        precio: 40000,
        img: "../assets/img/productos/12.png",
    },
    {
        id: 13,
        nombre: "Código-10013",
        precio: 40000,
        img: "../assets/img/productos/13.png",
    },
    {
        id: 14,
        nombre: "Código-10014",
        precio: 40000,
        img: "../assets/img/productos/14.png",
    },
    {
        id: 15,
        nombre: "Código-10015",
        precio: 40000,
        img: "../assets/img/productos/15.png",
    },
    {
        id: 16,
        nombre: "Código-10016",
        precio: 40000,
        img: "../assets/img/productos/16.png",
    },
    {
        id: 17,
        nombre: "Código-10017",
        precio: 40000,
        img: "../assets/img/productos/17.png",
    },
    {
        id: 18,
        nombre: "Código-10018",
        precio: 40000,
        img: "../assets/img/productos/18.png",
    },
    {
        id: 19,
        nombre: "Código-10019",
        precio: 40000,
        img: "../assets/img/productos/19.png",
    },
    {
        id: 20,
        nombre: "Código-10020",
        precio: 40000,
        img: "../assets/img/productos/20.png",
    },
    {
        id: 21,
        nombre: "Código-10021",
        precio: 40000,
        img: "../assets/img/productos/21.png",
    },
    {
        id: 22,
        nombre: "Código-10022",
        precio: 40000,
        img: "../assets/img/productos/22.png",
    },
    {
        id: 23,
        nombre: "Código-10023",
        precio: 40000,
        img: "../assets/img/productos/23.png",
    },
    {
        id: 24,
        nombre: "Código-10024",
        precio: 40000,
        img: "../assets/img/productos/24.png",
    },
    {
        id: 25,
        nombre: "Código-10025",
        precio: 40000,
        img: "../assets/img/productos/25.png",
    },
    {
        id: 26,
        nombre: "Código-10026",
        precio: 40000,
        img: "../assets/img/productos/26.png",
    },
    {
        id: 27,
        nombre: "Código-10027",
        precio: 40000,
        img: "../assets/img/productos/27.png",
    },
    {
        id: 28,
        nombre: "Código-10028",
        precio: 40000,
        img: "../assets/img/productos/28.png",
    },
    {
        id: 29,
        nombre: "Código-10029",
        precio: 40000,
        img: "../assets/img/productos/29.png",
    },
    {
        id: 30,
        nombre: "Código-10030",
        precio: 40000,
        img: "../assets/img/productos/30.png",
    },
    {
        id: 31,
        nombre: "Código-10031",
        precio: 40000,
        img: "../assets/img/productos/31.png",
    },
    {
        id: 32,
        nombre: "Código-10032",
        precio: 40000,
        img: "../assets/img/productos/32.png",
    },
    {
        id: 33,
        nombre: "Código-10033",
        precio: 40000,
        img: "../assets/img/productos/33.png",
    },
    {
        id: 34,
        nombre: "Código-10034",
        precio: 40000,
        img: "../assets/img/productos/34.png",
    },
];

const contenedor = document.querySelector("#container");

//Inyecto en HTML
catalogo.forEach((prod) => {
    const { nombre, precio, img } = prod;
    if (contenedor) {
        contenedor.innerHTML += `
        <article class="slide">
                <div class="container-product">
                    <div class="info-products">
                    <p class="product-name"> ${nombre}</p>
                    <p class="price">$${precio}</p>
                </div>
                <div class="img-slide">
                    <img src="${img}">
                </div>
        </article>
    `;
    }
});
