import { AddNewHostComponent } from '../../add-new-host/add-new-host.component';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'kt-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor( public dialog:MatDialog ) { }

  ngOnInit() {
  }
  addHost(){
    // this.dialog.open(PopupWindowComponent,{data:{description:'Fetching',content:'We Just start fetching updated data please wait...'}})
    this.dialog.open(AddNewHostComponent,{
      height: '65%',
      width: '40%',
    })
  }
}
