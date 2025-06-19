import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ import this
import { CommonModule } from '@angular/common'; // optional, but safe to include
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent], // ✅ add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travlr Getaways admin';
}
