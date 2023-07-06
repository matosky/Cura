import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    data = [
    {
      Time: '12:40pm',
      Date: '10/09/12',
      Phone: '083883900303',
      Complaint: 'Laboratory',
      Rating: 1.0,
      NPS: 5,
      Status: 'In-progress',
        Action: 'action-button',
      Active: true,
      },
      {
         Time: '12:40pm',
      Date: '10/09/12',
      Phone: '083883900303',
      Complaint: 'Laboratory',
      Rating: 1.0,
      NPS: 5,
      Status: 'In-progress',
        Action: 'action-button',
      Active: false,

      },
      {
         Time: '12:40pm',
      Date: '10/09/12',
      Phone: '083883900303',
      Complaint: 'Laboratory',
      Rating: 1.0,
      NPS: 5,
      Status: 'In-progress',
        Action: 'action-button',
      Active: false,
      }
    ]
}
