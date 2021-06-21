import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'ses-assignment',
  templateUrl: './ses-assignment.component.html',
  styleUrls: ['./ses-assignment.component.css']
})
export class SesAssignmentComponent {
  model: User = new User();
  @ViewChild('sesForm') form: any;
  
  handleUserData(){

	let formData = this.form.value;
	
		
	let firstName = formData.firstName;
	let lastName = formData.lastName;
	let sex = formData.sex;
	let birthday = formData.birthday;
	
	let user = new User();
	
	console.log(user);
	console.log('posting user');	
  }

}
