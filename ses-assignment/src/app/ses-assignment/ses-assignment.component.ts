import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'ses-assignment',
  templateUrl: './ses-assignment.component.html',
  styleUrls: ['./ses-assignment.component.css']
})
export class SesAssignmentComponent {
//the domain model
  model: User = new User();

//boolean used to disable submit and display buttons 
  isDisabled: boolean = true;
  userId = 0;
  
    ngOnInit(): void {
	console.log(typeof(this.model.birthday));
  }
  
  //form instance with an array of users
  public form: {
	users: User[];
  };
  
  //method used to set isDisabled
  disabledForm(){
	if(this.form.users.length >= 1)
	{
	  this.isDisabled = false;
	}
	else
	{ 
	 this.isDisabled = true;
	}
  }
  
  //constructor to initialize the form instance users array and dependency injection? 
  constructor(private userService: UserService){
	
	this.form = {
		users: []
	};
	
  }
  
  //adds a user to the users array
  public addUser(): void {
	console.log(typeof(this.model.birthday));
	var userBirthday = new Date(this.model.birthday);
	
	this.form.users.push({
		id: this.userId.toString(),
		firstName: this.model.firstName,
		lastName: this.model.lastName,
		sex: this.model.sex,
		birthday: userBirthday
	});
	this.userId++;
	
	this.userService.setUsers(this.form.users)	
	
	this.disabledForm();
  }
  
  //resets the form
  public clearForm(form: any){
	form.reset();
  }
  
  //logs the from data and form data and resets the form
  public handleUserData(form: any): void {
	console.group("Form Data");
	console.log(this.form.users);
	console.groupEnd();
	
	console.group("Form Model");
	console.log(form);
	console.groupEnd();
	
	form.resetForm();
  }

}
