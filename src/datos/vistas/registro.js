import { supabase } from "../../bd/supabase";
import { User } from "../../bd/user";
import { login } from "./login";


export const formRegistro = {
    template: `
    <div class="pt-5">
      <h1 class="w-100 text-center">Registro</h1>
      <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
        <label for="email" class="mt-2 form-label" >Email: </label>
        <input type="text" class="form-control" placeholder="usuario@mail.com" id="email1">
  
        <label for="pass" class="mt-2 form-label">Contraseña: </label>
        <input type="text" class="form-control" id="contrasena">
  
        <input type="text" class="mt-4 w-100 btn btn-success" value="Registro" id="enviar">
      </form>
    </div>
    `,
    script:async()=>{
        document.querySelector('#enviar').addEventListener("click", (e)=>{
            e.preventDefault()
            try {
                // Objeto con datos para el registro de user
                const usuarioRegistro = {
                
                    password: document.querySelector('#contrasena').value,
                    email: document.querySelector('#email1').value
                }
                const nuevoUser =  User.create(usuarioRegistro)
                // Objeto con datos para perfil
                
                console.log(nuevoUser.user)
                Swal.fire('Usuario registrado correctamente')
                // Cargamos la página login
                document.querySelector('main').innerHTML = login.template
       
                console.log(nuevoUser)
              } catch (error) {
                console.log(error)
                Swal.fire('No se a podido registrar el usuario')
              }
            
    
        })
        
    }
}