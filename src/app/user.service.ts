import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registeredUsers: any[] = [];

  registerUser(user: any) {
    this.registeredUsers.push(user);
  }

  loginUser(firstName: string, password: string): boolean {
    const user = this.registeredUsers.find(
      (u) => u.firstName === firstName && u.password === password
    );

    return !!user;
  }
}

