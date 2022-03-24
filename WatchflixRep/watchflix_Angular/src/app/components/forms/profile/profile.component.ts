import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<{}>{
    return this.http.get<{}>("http://localhost:9000/getprofileuser") 
  }

  ngOnInit(): void {
  }

}