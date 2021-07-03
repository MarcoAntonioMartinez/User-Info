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
  
  model = " ";
  displayUsers: User = new User();
  
  //used for switch statement
  userNum = 0;
  
    //used to determine which table row is being edited? holds the data?
  editCache: { [key: string]: any } = {};
  
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
	
	this.updateEditCache();
  }
  
  //begins editing
	startEdit(id: string){
		this.editCache[id].edit = true;
	}
	//cancel an edit
	cancelEdit(id: string): void{
		//this.reset();
		const index = this.displayForm.users.findIndex(item => item.id === id);
		this.editCache[id] = {
			data: { ...this.displayForm.users[index] },
			edit: false
		};
	}
	
	//save the edit
	saveEdit(id: string): void {
		const index = this.displayForm.users.findIndex(item => item.id === id);
		Object.assign(this.displayForm.users[index], this.editCache[id].data);
		this.editCache[id].edit = false;
	
	}
	
	//update the edit cache 
	updateEditCache(): void {
		this.displayForm.users.forEach(item => { 
			this.editCache[item.id] = {
				edit: false,
				data: { ...item }
			};
		});
	}
	
	removeUser(index: string){
	  let numIndex = parseInt(index);
	  this.displayForm.users.splice(numIndex, 1);
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