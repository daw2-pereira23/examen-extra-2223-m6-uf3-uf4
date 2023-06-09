console.log('hola');

import { series } from "./src/datos/series";
import { home } from "./src/datos/vistas/home";

console.log(series);



document.querySelector('main').innerHTML = home.template