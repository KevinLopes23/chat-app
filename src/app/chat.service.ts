import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

interface Message {
  username: string;
  text: string;
  time: string;
  userImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;

  constructor() {
    // Utiliza o transporte 'websocket' para melhorar a latência (se suportado)
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });
  }

  sendMessage(message: Message) {
    this.socket.emit('chat message', message);
  }

  getMessages(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('chat message', (msg: Message) => {
        observer.next(msg);
      });
    });
  }
}
