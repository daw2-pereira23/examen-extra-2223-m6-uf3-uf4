import { User } from "../../bd/user"



export const login = {
    template: `
    <div class="pt-5">
      <h1 class="w-100 text-center">Registro</h1>
      <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
        <label for="email" class="mt-2 form-label">User: </label>
        <input type="text" class="form-control" placeholder="usuario@mail.com" id="email2">
  
        <label for="pass" class="mt-2 form-label">Contraseña: </label>
        <input type="text" class="form-control" id="password2">
  
        <input type="text" class="mt-4 w-100 btn btn-primary" value="Iniciar Sesion" id="iniciarSesion">
      </form>
    </div>
    `,
    script:()=>{
        document.querySelector('#iniciarSesion').addEventListener("click", ()=>{
            try {
                // Capturamos datos del formulario
                const userData = {
                  email: document.querySelector('#email2').value,
                  password: document.querySelector('#password2').value
                }
                
                // Intentamos loguearnos utilizando el método login de nuestra clase User
                User.login(userData)
                
                document.querySelector('#emailRegistrado').value = userData.email
                Swal.fire('Logueado con exito')
            } catch(error){
                Swal.fire('No se a podido Iniciar sesion con el usuario')
            }
        })
        
    }
}