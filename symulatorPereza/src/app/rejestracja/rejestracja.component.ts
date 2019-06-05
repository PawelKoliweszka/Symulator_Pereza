import { Component, OnInit } from '@angular/core';
import { HttpClient, post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css']
})
export class RejestracjaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  daneToServer(name: string, password1: string, password2: string, email: string) {
    return this.http.post('localhost:3001/rejestracja', {
      'nick' : name,
      'password1' : password1,
      'password2' : password2,
      'email' : email
    });
  }
}
