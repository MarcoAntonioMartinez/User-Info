import { Pipe, PipeTransform } from '@angular/core';
import { User } from './ses-assignment/user';

@Pipe({
  name: 'userSex'
})
export class UserSexPipe implements PipeTransform {

  transform(input: Array<User>, sex: string): User[] {
    //filter based on the user's sex
    return input.filter( (userList: User) => userList.sex === sex);
  }

}
