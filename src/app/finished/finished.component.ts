import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FinishedComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    
   }

  ngOnInit(): void {
  }

}
