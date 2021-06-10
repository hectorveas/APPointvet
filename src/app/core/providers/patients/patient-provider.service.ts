import { Injectable } from '@angular/core';
import { PetOwner } from '@core/models/petOwner.models';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientProviderService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllPacients(): Observable<PetOwner[]> {
    return this.httpService.get<PetOwner[]>('/pet-owner');
  };

  public getPacientById(petOwnerId: string): Observable<PetOwner> {
    return this.httpService.get<PetOwner>(`/pet-owner/${petOwnerId}`);
  };

  public getPacientByRut(petOwnerRut: string): Observable<PetOwner> {
    return this.httpService.get<PetOwner>(`/pet-owner/search/${petOwnerRut}`);
  };

  public updatePacient(petOwnerId: string, body: any): Observable<Partial<PetOwner>> {
    return this.httpService.put<PetOwner>(`/pet-owner/${petOwnerId}`, body);
  };

  public deletePacient(petOwnerId: string): Observable<PetOwner> {
    return this.httpService.delete<PetOwner>(`/pet-owner/${petOwnerId}`);
  };

  public postPacient(body: any): Observable<PetOwner> {
    return this.httpService.post<PetOwner>(`/pet-owner`, body);
  };
}