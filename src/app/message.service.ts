import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; //messages are an array of strings

  add(message: string) {
    this.messages.push(message); //This will ADD a message to the cache
  }
  clear() {
    this.messages = []; //This will CLEAR the cache
  }
}
