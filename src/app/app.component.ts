import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [SidebarComponent,CommonModule,RouterOutlet],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  ngOnint(){
    
  }
}

