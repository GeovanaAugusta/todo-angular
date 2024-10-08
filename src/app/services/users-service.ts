import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = environment.urlBaseUsers;

    constructor(private http: HttpClient) { }

    addUser(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, user);
    }

    allUsers(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    updateUser(task: any, id: number): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, task);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
