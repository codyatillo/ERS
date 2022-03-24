import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './Admin'; 
import { Users2 } from './User2';




@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  private baseURL = "http://localhost:9000/adminviewall";
  httpClient: any;

  constructor(private http: HttpClient) { } 

  getUsers(): Observable<Users2[]>{
    return this.http.get<Users2[]>(`${this.baseURL}`)
  }

  deleteUserview(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  private baseURL2 = "http://localhost:9000/showadmin";
  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseURL2}`)
  }


 

}
