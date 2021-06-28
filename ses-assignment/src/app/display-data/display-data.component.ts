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
	ageMin: number,
	ageMax: number,
	ageAvg: number
  };
  
  model = " "
  displayUser: User = new User();
  enableEdit = false;
  enableEditIndex = null;
  editUser = "";
  editName = "";
  isEditable: boolean = false;
  
  //used for switch statement
  userNum = 0;
  
  constructor(private userService: UserService) { 
    this.displayForm = {
		users: [],
		ageMin: 0,
		ageMax: 0,
		ageAvg: 0
	};
  }
 
 //get the user data from the SesAssignmentComponent
  ngOnInit(): void {
	this.displayForm.users = this.userService.getUsers();
	
	//calculate all user's age
	let userAge: number[] = [];
	
	for(let user of this.displayForm.users) {
	
	userAge.push(this.calculateAge(user));
	}
	
	this.displayForm.ageMin = this.getAgeMin(userAge);
	
	this.displayForm.ageMax = this.getAgeMax(userAge);

	this.displayForm.ageAvg = +(this.getAgeAvg(userAge).toFixed(2));
  }
  
	enableEditing(e: any,i: any){
		this.enableEdit = true;
		this.enableEditIndex = i;
		console.log(i,e);
		console.log("before assignment: " + this.isEditable);
		this.isEditable = true;
		console.log("after assignment: " + this.isEditable);
	}
	
	saveEdit(event: any, name: string){
		this.editUser = event.target.outerText as string;
		this.editName = name;
	}
	
	submitEdit(index: number){
	  switch(this.userNum)
	  {
		case 1:
			this.displayForm.users[index].firstName = this.editUser;
			break;
		case 2:
			this.displayForm.users[index].lastName = this.editUser;
			break;
		case 3:
			this.displayForm.users[index].sex = this.editUser;
			break;
		case 4:
			let userDate = new Date(this.editUser);
			this.displayForm.users[index].birthday = userDate;
			break;
	  }	
	  
	  console.log(this.displayForm.users);
	}
	calculateAge(user: User){
	let age = 0;
	var currentTime = new Date();
	
	let currentYear = currentTime.getFullYear();
	
	//get the user's birth year
	var year = user.birthday.getFullYear();
	
	age = currentYear - year;
	
	return age;
	
	}
	
	getAgeMin(age: number[]){
		age: [];
		return Math.min(...age);
	}
	
	getAgeMax(age: number[]){
		age: [];
		return Math.max(...age);
	}
	
	getAgeAvg(age: number[]){
		age: [];
		return age.reduce(function(a,b){
		return (a + b)/age.length
		}, 0);
	}
}
