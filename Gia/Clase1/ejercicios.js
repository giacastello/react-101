// console.log('gatitos')

// crear objeto, nombre apellido dni, y usar keys para obtener los valores de las propiedades.

// 

// console.log(gatito.dni);
// console.log(gatito['dni']);
// console.log(Object.keys(gatito)[2]);
// console.log(gatito[Object.keys(gatito)[2]])

// function x (p1 = 1, p2 = (2) {
//     console.log(p1);
//     console.log(p2);
// }
// x(p1 = 2)


const inventario = [
    {tipo: "cable", cantidad: 5000, sucursal:"Centro"},
    {tipo: "cable", cantidad: 1000, sucursal:"Centro"},
    {tipo: "cable", cantidad: 650, sucursal:"Garin"},
    {tipo: "cable", cantidad: 100, sucursal:"Garin"},
    {tipo: "cable", cantidad: 150, sucursal:"Vicente Lopez"},
    {tipo: "cable", cantidad: 300, sucursal:"Vicente Lopez"},
    {tipo: "teclado", cantidad: 10, sucursal:"Centro"},
    {tipo: "teclado", cantidad: 1200, sucursal:"Garin"},
    {tipo: "modem", cantidad: 77, sucursal:"Centro"},
    {tipo: "monitor", cantidad: 20, sucursal:"Vicente Lopez"},
    {tipo: "monitor", cantidad: 10, sucursal:"Centro"},
   ]

   // FILTER
   const inventarioFiltrado = inventario.filter(itemDondeEstoy => itemDondeEstoy.tipo === 'cable' && itemDondeEstoy.sucursal === 'Centro')
   console.log(inventarioFiltrado);

   const itemMenorCien = inventario.find(itemDondeEstoy => itemDondeEstoy.cantidad<100)
   console.log(itemMenorCien);
   


   
