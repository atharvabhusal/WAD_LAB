import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    student_id: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));

    // Reset form
    this.signupObj = {
      name: '',
      email: '',
      phone: '',
      address: '',
      course: '',
      student_id: '',
      password: '',
    };

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
