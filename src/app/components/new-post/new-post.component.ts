import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweetMessage:string=""
  tweetMaxLength: number =240
 tweetRemain: number = this.tweetMaxLength
 
 constructor(private service:MessagesService){

 }
 chengeTweet(){
  this.tweetRemain = this.tweetMaxLength  - this.tweetMessage.length
 }
 
sendTweet() {
  if (this.tweetMessage.trim().length > 0) {
    this.service.addMessage(this.tweetMessage);
    this.tweetMessage = "";
    this.tweetRemain = this.tweetMaxLength;
  }
}

}

