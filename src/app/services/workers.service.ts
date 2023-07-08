import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';
import { SupabaseService } from './supabase.service';
import { workersModel } from '../interface/workers';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor( private sbService:SupabaseService) { }

  async getWorkerData() {
    let { data, error } = await this.sbService.supabaseClient.from('workers').select(`id,firstName,lastName,nickName,salary,workerType(workerTypeTitle),available`)
      if(error)console.warn(error)
    return data
  }

  async getWorkerTypeList() {

    let { data, error } = await this.sbService.supabaseClient
      .from('workerType')
      .select('id,workerTypeTitle,icon,color')

      if (error)console.error(error)
    return data
  }



  async addNewWorker(workerColumn:workersModel) {

    const { data, error } = await this.sbService.supabaseClient
      .from('workers')
      .insert([
        workerColumn
      ])

      return {data,error}

  }


}
