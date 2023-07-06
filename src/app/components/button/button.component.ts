import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() borderRadius: string | undefined;
  @Input() color: boolean | undefined;
  @Input() icon: boolean | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() activeRow: boolean | undefined;
  @Input() activeColor: boolean | undefined;
}


