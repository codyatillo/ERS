import { Component, OnInit } from '@angular/core';
import { changeUser } from 'src/app/changeUser';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  CUserModel  = new changeUser('', false, false, false)
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  onFormUpdate(data: any){
    console.log(data)
    this.router.navigateByUrl('/adminupdate');
  }

}
