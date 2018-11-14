import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../app/service/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private _service: DataService) { }


  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {

    let data = {email:this.username,password:this.password};

    this._service.login(data).toPromise().then((res:User)=>{
      console.log(res);
      if (res != null){
        localStorage.setItem('user', JSON.stringify({ token: res.id, userId: res.userId }));
        this.router.navigate(["home/dashboard"]);
      }
      
    })

  }

}
