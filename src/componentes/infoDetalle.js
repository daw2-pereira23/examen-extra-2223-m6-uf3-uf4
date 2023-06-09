import { series } from "../datos/series";
import { fichas } from "./fichas"

export const infoDetalle = {
    template: `

    `,
    script:()=>{
       
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('imagenSeleccionada')){
                console.log("click")
            const imagen = document.querySelector('.imagenSeleccionada')
                    const dataId = imagen.id
                    console.log(dataId)
            }
            
          
               
   
       
                /*
                let tabla= `
                div class="card shadow mt-2">
						<img
							src="${data.imagen_url}"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h3>${data.nombre}</h3>
							<hr />
							<p><strong>Año: </strong><span>${seleccionSerie.año}</span></p>
							<p>
								<strong>Descripción: </strong>
								<span>
									
								</span>
							</p>
						</div>
					</div>
				</div>
                `
                

               document.querySelector('#seleccionSerie').innerHTML = tabla
               */
              }
              
           

               
            
                
                
            )}
    
    
}



