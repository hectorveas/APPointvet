import { Injectable } from '@angular/core';
import { Specialist } from '@core/models/specialist.models';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorProviderService {

  constructor(
    private httpService: HttpService
  ){}

  public getAllSpecialists(): Observable<Specialist[]> {
    return this.httpService.get<Specialist[]>('/specialist');
  }

  public getSpecialistById(specialistId: string): Observable<Specialist>{
    return this.httpService.get<Specialist>(`/specialist/${specialistId}`);
  };

  public getSpecialistByRut(specialistRut: string): Observable<Specialist>{
    return this.httpService.get<Specialist>(`/specialist/search/${specialistRut}`);
  };

  public updateSpecialist(specialistId: string, body: any): Observable<Partial<Specialist>>{
    return this.httpService.put<Specialist>(`/specialist/${specialistId}`, body);
  };

  public deleteSpecialist(specialistId: string): Observable<Specialist>{
    return this.httpService.delete<Specialist>(`/specialist/${specialistId}`);
  };

  public postSpecialist(body: any): Observable<Specialist>{
    return this.httpService.post<Specialist>(`/specialist`, body);
  };
}
