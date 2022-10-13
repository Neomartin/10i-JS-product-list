import { Products } from './products.js';

// console.table(Products)

function leerProductos() {
    // console.time();
    Products.forEach((prod, indice) => {

        const keys = Object.keys(prod);
        if(keys.includes('jostick')) {
            // pintamos un icono de jostick
        }

        if(prod.jostick === true) {
            // pintamos un icono de jostick
        }

        if('jostick' in prod) {
            console.log(`Existe`)
        }

        if(prod.hasOwnProperty('jostick')){
            console.log(`hasOwnPropery`)
        }

        prod.nueva = `una propiedad`;
        prod.

        console.log(prod.jostick)

        // console.log(prod)
    });
    // console.timeEnd();
    console.log(Products)

    // console.time();
    // for (const prod of Products) {
    //     console.log(prod.name)
    // }

    // console.timeEnd();
}

leerProductos();
