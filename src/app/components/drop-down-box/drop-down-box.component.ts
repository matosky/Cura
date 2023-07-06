import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-box',
  templateUrl: './drop-down-box.component.html',
  styleUrls: ['./drop-down-box.component.css']
})
export class DropDownBoxComponent {
  @Input() tabDropdown: boolean | undefined;
  @Input() noTabDropdown: boolean | undefined;
}
