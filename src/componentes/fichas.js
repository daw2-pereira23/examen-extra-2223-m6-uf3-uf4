import { supabase } from "../bd/supabase"
import { series } from "../datos/series"
import { infoDetalle } from "./infoDetalle"


export const fichas = {

    script:async()=>{
        let { data: series, error } = await supabase
  .from('series')
  .select('*')
        for(let index=0; index<series.length;index++){
            const div = document.createElement('div')
            div.classList.add('col-4')

            var tabla = `
        
                <div class="card shadow mt-2">
                    <img
                         src="${series[index].imagen_url}"
                            class="card-img-top imagenSeleccionada"
                            alt="${series[index].nombre}" data-id=${series[index].id}
                            />
                        <div class="card-body">
                            <h5 class="card-title text-center">${series[index].nombre}</h5>
                        </div>
                </div>
       
            `
            div.innerHTML = tabla
            console.log(div)
            document.querySelector('#peliculas').appendChild(div)
            
        }
        infoDetalle.script()
        
        
    }
  
}