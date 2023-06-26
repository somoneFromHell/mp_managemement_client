import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  public supabaseClient = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY)
  constructor() { }

  async getWorkerData() {

    let { data, error } = await this.supabaseClient.from('workers').select(`id,firstName,lastName,nickName,salary,workerType(name),available`)

    return { data, error }
  }

  async getWorkerTypeList() {

    let { data, error } = await this.supabaseClient
      .from('workerType')
      .select('id,name')
      return { data, error }
  }


}
