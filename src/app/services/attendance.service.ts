import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {


  constructor(private sb_service: SupabaseService) { }

  async getAttendanceTypeList() {

    let { data, error } = await this.sb_service.supabaseClient
      .from('attandanceType')
      .select('id,name,color,icon')

      if(error){
        console.error(error)
      }
    return data
  }

  async getWorkerDataFotAtt() {

    let { data, error } = await this.sb_service.supabaseClient
      .from('workers')
      .select('id,nickName').eq('available',true)
    console.log(data)
    return { data, error }
  }

}
