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
	//userAge: [];
	for(let user of this.displayForm.users) {
	
	userAge.push(this.calculateAge(user));
	}
	
	this.displayForm.ageMin = this.getAgeMin(userAge);
	
	this.displayForm.ageMax = this.getAgeMax(userAge);

	this.displayForm.ageAvg = +(this.getAgeAvg(userAge).toFixed(2));
  }
 
	calculateAge(user: User){
	let age = 0;
	var currentTime = new Date();
	
	let currentYear = currentTime.getFullYear();
	
	//get the user's birth year
	var year = user.birthday.getFullYear();
	
	//year = Date.parse(birthYear);
	//console.log("this is typeof year:")
	//console.log(typeof(year))
	
	age = currentYear - year;
	
	return age;
	//then do comparison between all users age. might need for loop for that and store in array or something
	//how do i edit a table entry? is that possible? or do i need to actually do what that one person did with dogs and ng template?
	
	//add user would need me to push to displayForm users array
	//maybe do same thing as that guy with link button thing that adds another input field
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
