import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

 public supabaseClient = createClient(environment.SUPABASE_URL,environment.SUPABASE_KEY)
  constructor() {}

  

}
