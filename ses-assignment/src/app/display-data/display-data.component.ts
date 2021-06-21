import { Component, Input, OnInit } from '@angular/core';
import { SesAssignmentComponent } from '../ses-assignment/ses-assignment.component';

@Component({
  selector: 'display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  
  @Input() sesAssignment!: SesAssignmentComponent;

  constructor() { }

  ngOnInit(): void {
  }

  
}
