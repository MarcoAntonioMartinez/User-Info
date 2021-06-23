import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../ses-assignment/user';

@Component({
  selector: 'display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  
  //form instance used to hold array of users
  public displayForm: {
	users: User[];
  };
  
  constructor(private userService: UserService) { 
    this.displayForm = {
		users: []
	};
  }
 
 //get the user data from the SesAssignmentComponent
  ngOnInit(): void {
	this.displayForm.users = this.userService.getUsers();
  }
  
}
