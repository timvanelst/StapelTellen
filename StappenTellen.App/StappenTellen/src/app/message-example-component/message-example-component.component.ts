import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './message-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-example-component',
  templateUrl: './message-example-component.component.html',
  styleUrls: ['./message-example-component.component.css']
})
export class MessageExampleComponentComponent implements OnInit, OnDestroy {

  
  message: string[] = [];
  subscription: Subscription;
  
  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.message.push('init');
    this.subscription = this.messageService.getMessage().subscribe(message => { 
      console.log(message);
      this.message.push(message);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
