import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    res: any;
    title = 'app works!';

  constructor(private _test:TestService){

  }

  login(){
      this._test.login()
            .subscribe(res => {
                this.res = res;
                console.log(res.json())
            }); /* Cos it's an observable */
  }

  logout(){
      this._test.logout()
            .subscribe(res => {
                this.res = res;
                console.log(res.json())
            }); /* Cos it's an observable */
  }

  makeTest(){
      this._test.makeTest()
            .subscribe(res => {
                this.res = res;
                console.log(res);
            }); /* Cos it's an observable */
  }

}
