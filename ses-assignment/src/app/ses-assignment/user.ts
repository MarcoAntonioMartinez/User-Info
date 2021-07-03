export class User {
		 public id: string;
		 public firstName: string;
		 public lastName: string;
		 public sex: string;
		 public birthday: Date;
		 
		 constructor(){
		  this.id = "";
		  this.firstName = '';
		  this.lastName = '';
		  this.sex = '';
		  this.birthday = new Date();
		}
} 

