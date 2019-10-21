import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatdemosocket';
  messages:string='';
  message:string[]=[];
  public constructor(private _chat:ChatService){

  }
  ngOnInit(){
    this._chat.getMessage().subscribe(
        (x:string)=>{
          this.message.push(x);
        }
    );
  }
  onSendClick(){
    this._chat.sendMessage(this.messages);
  }
}
