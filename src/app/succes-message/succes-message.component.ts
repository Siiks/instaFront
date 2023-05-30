import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-succes-message',
  templateUrl: './succes-message.component.html',
  styleUrls: ['./succes-message.component.css']
})
export class SuccesMessageComponent {
  @Input() message: string;
}
