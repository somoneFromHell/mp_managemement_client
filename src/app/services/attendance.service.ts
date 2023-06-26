import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  constructor(private sb_service:SupabaseService){}

  async getAttendanceTypeList() {

    let { data, error } = await this.sb_service.supabaseClient
      .from('attandanceType')
      .select('id,name')
      return { data, error }  }

}
