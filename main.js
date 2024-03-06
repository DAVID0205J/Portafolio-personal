import { header } from "./header.js";
let diseno_grid=document.querySelector(".root")

let cuadros_grid=`
<div class="contenido1">${header}</div>
<div class="contenido2"></div>
<div class="contenido3"></div>
<div class="contenido4"></div>
`
diseno_grid.innerHTML=(cuadros_grid);