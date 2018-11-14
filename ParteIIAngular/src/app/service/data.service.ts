import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  login(data: any){
    return this.http.post<User>('http://seminario2app.herokuapp.com/api/Users/login',data,httpOptions);
  }


}
