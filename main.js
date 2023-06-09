console.log('hola');

import { fichas } from "./src/componentes/fichas";
import { series } from "./src/datos/series";
import { header } from "./src/datos/vistas/header";
import { home } from "./src/datos/vistas/home";




document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = home.template
await fichas.script()