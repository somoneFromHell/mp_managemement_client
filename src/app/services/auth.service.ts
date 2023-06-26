import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';
import { userLogin } from 'src/app/interface/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supabaseClient = createClient(environment.SUPABASE_URL,environment.SUPABASE_KEY)
  constructor() { }


  async signIn(credentials:userLogin){
    const {data ,error} =  await this.supabaseClient.auth.signInWithPassword(credentials)
    if(error){
      console.log(error)
      return error
    }
    else{
      return data
    }
  }

  signOut(){
    return this.supabaseClient.auth.signOut();
  }
  
}
