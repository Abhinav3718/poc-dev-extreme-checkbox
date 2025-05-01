import { Component, OnInit } from '@angular/core';
import { response } from './response';

@Component({
  selector: 'app-dx-checkbox-component',
  standalone: false,
  templateUrl: './dx-checkbox-component.component.html',
  styleUrl: './dx-checkbox-component.component.css'
})
export class DxCheckboxComponentComponent implements OnInit {

  constructor() {

  }

  organizationUsers: any[] = [];

  ngOnInit(): void {

    //need to change map here.
    this.organizationUsers = response.message.statusCode.TransactionAudit.map((user: any) => ({
      username: user.created_by,
      email: user.change_audit        
    }));
  }

  valueChanged(e: any) {
    console.log(e.value)
  }
}
