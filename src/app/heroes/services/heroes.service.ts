import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroe( id: string):Observable<Heroe>{
    //const params = new HttpParams();
    //params.set('id',id);
    //return this.http.get<Heroe>('http://localhost:3000/heroes/',{params});
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }
}
