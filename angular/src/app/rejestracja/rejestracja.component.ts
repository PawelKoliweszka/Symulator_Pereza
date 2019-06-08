import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css']
})
export class RejestracjaComponent implements OnInit {

  nick: string;
  password1: string;
  password2: string;
  email: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  daneToServer() {
    const obiekt = {
      nick: this.nick,
      password1: this.password1,
      password2: this.password2,
      email: this.email
    };
    console.log(obiekt);
    this.httpService.addPost('http://localhost:3001/rejestracja', obiekt).subscribe(() => {
      console.log('dupa');
    });
  }

}
