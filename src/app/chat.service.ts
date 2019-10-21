import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serverURL:string="http://localhost:3000";
  socket;
  observer: any;
  constructor() {
    this.socket=io(this.serverURL);
   }
   sendMessage(message:string){
    this.socket.emit("newmessage",message);
   }

   getMessage(){
    this.socket.on("newmessage",x=>{
      this.observer.next(x);
    });
    return this.createObservable();
 }
 createObservable(): Observable<any> {
  return new Observable<any>(observer => {
    this.observer = observer;
  });
}
}
