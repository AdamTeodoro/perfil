import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdamService {

    private readonly urlAdam: string = "http://localhost:3000/teste" ;

    private httpOptions = {
        headers: new HttpHeaders()
    };

    constructor(public httpClient: HttpClient) { }

    getAdam(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.urlAdam);
    }
}
