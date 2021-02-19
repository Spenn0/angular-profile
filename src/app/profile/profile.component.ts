import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';
//2
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: UserProfile; // NAME VARIABLE TO STORE THE OBJECT INJECTED IN A FUNCTION BELOW vv

  constructor(private profileService: ProfileService) {} // THIS IS A SERVICE : DEPENDENCY INJECTION (INJECTING INFO FROM PROFILE.SERVICE.TS)

  //THE profile PROPERTY NOW HOLDS THE OBJECT THAT WAS INJECTED THROUGH THE PROFILE SERVICE DEPENDENCY INJECTION.

  ngOnInit(): void {
    this.getProfileByService();
  }
  getProfileByService = () => {
    this.profile = this.profileService.getUserProfile();
    console.log(this.profile);
  };
}

//NOW YOU CAN UTILIZE INTERPOLATION WITHIN THE profile.component.html
