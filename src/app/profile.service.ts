import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';
//1
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Spudd',
    contact: 'spudd@spudd.com',
    bio: 'jump up and down, please just jump up and down',
  };
  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (userprofile: UserProfile) => {
    this.userProfile = userprofile;
  };
}
