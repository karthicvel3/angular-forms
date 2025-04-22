import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


interface MenuItem {
  label: string;
  routerLink?:any;
  children?: MenuItem[];
  isOpen?: boolean;
}


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      label: 'Reactive Form',
      isOpen: false,
      children: [
        { label: '1. Form Control', routerLink:""},
        { label: '2. Form Group' ,routerLink:"formgroup" },
        { label: '3. Form Array',routerLink:"formarray" },
        { label: '4. CheckBox',routerLink:"checkbox" },
        { label: '5. Select Box',routerLink:"select"},
        { label: '6. Dynamic Form Array',routerLink:"dynamicformarray" },
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
