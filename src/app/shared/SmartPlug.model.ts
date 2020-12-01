import {User} from './User.model';

export class SmartPlug {

  constructor(public id: number, public name: string, public turnedOn: boolean, public ipAddress: string, public owner: User) {

  }
}
