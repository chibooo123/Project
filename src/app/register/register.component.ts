import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showAlert: boolean = false;
  hideAlert: boolean = true;
  hideSuccess: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  checkPasswords(name:string, value: string, confirmValue: string) {
    if (value === confirmValue && value.length >= 6) {
      const user = {
        firstName: name, 
        password: value,
      };

      this.userService.registerUser(user);

      console.log('Successfully Registered!');
      this.router.navigate(['/login']);
      this.hideSuccess = false;

      setTimeout(() => {
        this.hideSuccess = true;
      }, 3000);
    } else {
      console.log('Registration Unsuccessful!');
      this.showAlert = true;
      this.hideAlert = false;

      setTimeout(() => {
        this.showAlert = false;
        this.hideAlert = true;
      }, 3000);
    }
  }
}

