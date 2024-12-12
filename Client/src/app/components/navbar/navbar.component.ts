import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isDropdownHidden: boolean = true;

  toggleDropDown(event: Event): void {
    event.stopPropagation();  // Prevent click from propagating to document
    this.isDropdownHidden = !this.isDropdownHidden;  // Correctly toggle the value
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropdownBtn && dropdownMenu && !dropdownBtn.contains(event.target as Node) && !dropdownMenu.contains(event.target as Node)) {
      this.isDropdownHidden = true;  // Hide dropdown if click is outside button and menu
    }
  }
}
