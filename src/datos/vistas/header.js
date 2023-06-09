import { login } from "./login"
import { formRegistro } from "./registro"


export const header = {
    template: `
    <div class="container-fluid">
        <span class="navbar-brand mb-0">2223 M6 UF3/UF4 - Examen extraordinaria - (Alumnno: Pepito Lospalotes)</span>
        <form  class="d-flex" id="formHeader">
          <input class="form-control me-2" id="emailRegistrado">
          <button class="btn btn-outline-success" id="login">Login</button>
          <button class="btn btn-link" id="registro">Regístrate</button>
        </form>
        
      </div>
    `,
    script: ()=>{
        document.querySelector('#registro').addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = formRegistro.template
            formRegistro.script()
        })
        document.querySelector('#login').addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = login.template
            login.script()
        })
        
    }
}