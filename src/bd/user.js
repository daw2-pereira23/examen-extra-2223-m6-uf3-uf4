// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'

export class User {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, email = null, password = null, rol=null) {
    this.id = id
    this.email = email
    this.password = password

  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (userData) {
    const { data, error } = await supabase.auth.signUp(userData)

    if (error) {
        throw new Error(error.message)
      }
    console.log('usuario creado correctamente ', data)
    return new User(data.user.id, data.user.email)
  }
  static async login (userData) {
    // USER LOGIN
      const { data, error } = await supabase.auth.signInWithPassword(userData)
      if (error) {
        throw new Error(error.message)
      }
      return new User(data.user.id, data.user.email, data.user.rol)
    }

}