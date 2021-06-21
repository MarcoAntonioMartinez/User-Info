export class User {
	public firstName:string;
	public lastName:string;
	public sex:string;
	public birthday: Date; 
	
	constructor(){
		this.firstName = '';
		this.lastName = '';
		this.sex = '';
		this.birthday = new Date();
	}
	
}
