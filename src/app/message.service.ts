import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(num: number) {
    if (window.confirm('Do you really like to clear?')) {
      if (num) {
        this.messages.splice(0, num);
      } else {
        this.messages = [];
      }
    }
  }

}
