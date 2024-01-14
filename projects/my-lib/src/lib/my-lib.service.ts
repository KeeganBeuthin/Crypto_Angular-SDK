import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyLibService {
  private apiUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  sayHello(): string {
    return 'Hello from MyService!';
  }

  getTestData(): Observable<any> {
    const endpoint = '/api/test'; 
    return this.http.get(`${endpoint}`);
  }
}
