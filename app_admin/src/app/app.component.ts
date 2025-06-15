import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ import this
import { CommonModule } from '@angular/common'; // optional, but safe to include

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travlr Getaways admin';
}
