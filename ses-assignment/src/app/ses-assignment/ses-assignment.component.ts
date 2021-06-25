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
  model: User = new User();

  isDisabled: boolean = true;
   
    ngOnInit(): void {
	console.log(typeof(this.model.birthday));
  }
  
  public form: {
	users: User[];
  };
  
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
  
  //constructor for the form instance users array
  constructor(private userService: UserService){
	
	this.form = {
		users: []
	};
	
  }
  
  public addUser(): void {
	console.log(typeof(this.model.birthday));
	var userBirthday = new Date(this.model.birthday);
	this.form.users.push({
		firstName:this.model.firstName,
		lastName: this.model.lastName,
		sex:this.model.sex,
		birthday:userBirthday
	});
	
	this.userService.setUsers(this.form.users)	
	
	this.disabledForm();
  }
  
  public clearForm(form: any){
	form.reset();
  }
  
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
