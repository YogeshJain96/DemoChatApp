import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }


  public getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('new-message', (message) => {
        console.log(message);
        observer.next(message);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    console.log(observable);
    return observable;
  }

//   public getMessages = () => {
//     console.log("in getmessage")
//     return Observable.create((observer:any) => {
//       console.log("obs created");
//       console.log(this.socket);
//         this.socket.on('new-message', (message:String) => {
//           console.log("msg:"+message);
//             observer.next(message);
//         });
//     });
// }
}