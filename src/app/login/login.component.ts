import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  showAlert:boolean = false;
  hideSuccess:boolean = true;
  hideAlert:boolean = true;

  login(firstName: string, password: string) {
    const isLoggedIn = this.userService.loginUser(firstName, password);

    if (isLoggedIn) {
      console.log('Login Successful!');
      this.hideSuccess = false;
      this.router.navigate(['/schedule']); // Navigate to the schedule page
    } else {
      console.log('Login Failed!');
      this.showAlert = true;
      this.hideAlert = false;
      // Handle failed login, show error message, etc.
    }
  }
}


