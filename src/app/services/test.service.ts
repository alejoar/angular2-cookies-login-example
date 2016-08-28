import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TestService {
  private url: string;

  constructor(private _http:Http) { }

  makeTest(){
    this.url = "http://localhost:5000/companies/test";
    return this._http.get(this.url, { withCredentials: true })
            .map(res => res.json());
  }

  login(){
    this.url = "http://localhost:5000/companies/login_test";
    return this._http.post(this.url, {email: 'alejoar@gmail.com', password: '123456'}, { withCredentials: true })
            .map(res => res);
  }


  logout(){
    this.url = "http://localhost:5000/companies/logout_test";
    return this._http.get(this.url, { withCredentials: true })
            .map(res => res);
  }

}
