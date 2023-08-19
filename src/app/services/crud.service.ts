import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  private API_URL = 'https://empleados-springboot-backend-production.up.railway.app';

  constructor(private _http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(`${this.API_URL}/empleados`);
  }

  getEmpleado(id: string): Observable<Empleado> {
    return this._http.get<Empleado>(`${this.API_URL}/empleados/${id}`);
  }

  createEmpleado(data: Empleado): Observable<Empleado> {
    return this._http.post<Empleado>(`${this.API_URL}/empleados`, data);
  }

  updateEmpleado(id: string, data: Empleado) {
    return this._http.put(`${this.API_URL}/empleados/${id}`, data);
  }

  deleteEmpleado(id: string) {
    return this._http.delete(`${this.API_URL}/empleados/${id}`);
  }

}
