import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true, // ✅ This is a standalone component
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [CommonModule], // ✅ Import CommonModule for *ngIf
})
export class ProfileComponent implements OnInit {
  loggedInUser: any = null;

  ngOnInit(): void {
    const currentUser = localStorage.getItem('loggedInUser');
    if (currentUser) {
      this.loggedInUser = JSON.parse(currentUser);
    }
  }

  constructor(private router: Router) {}

  onLogout(): void {
    localStorage.removeItem('loggedInUser'); // Remove the stored user session
    alert('Logged out successfully!');
    this.router.navigate(['/login']); // Redirect to login page
  }
}
