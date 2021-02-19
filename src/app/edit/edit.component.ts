import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  profile!: UserProfile;
  constructor(private router: Router, private profileService: ProfileService) {} //DIRECT INJECTION FROM ROUTER/PROFILESERVICE

  ngOnInit(): void {
    this.profile = this.profileService.getUserProfile();
  }
  setUserProfile = (form: NgForm) => {
    console.log(form);
    let profile: UserProfile = {
      name: form.form.value.name,
      contact: form.form.value.contact,
      bio: form.form.value.bio,
    };
    this.profileService.setUserProfile(profile);
    this.router.navigate(['profile']);
  };
}
