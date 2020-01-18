import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rxjs-chat';
  message: string;
  messages: string[] = ["hard-code msg"];

  constructor(public chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    console.log(this.message);
    this.message = '';
  }

  ngOnInit() {
    console.log("on Init");
    this.chatService
      .getMessages()
      .subscribe((msg: string) => {
        console.log("pushing"+msg);
        this.messages.push(msg);
      });
  }

}
