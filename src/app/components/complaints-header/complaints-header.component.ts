import { Component } from '@angular/core';

@Component({
  selector: 'app-complaints-header',
  templateUrl: './complaints-header.component.html',
  styleUrls: ['./complaints-header.component.css']
})
export class ComplaintsHeaderComponent {
  tabDropdown: boolean = true;

  toggleTabDropdown(): void {
    this.tabDropdown = !this.tabDropdown;
  }
}
