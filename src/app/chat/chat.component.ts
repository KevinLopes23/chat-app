import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

interface Message {
  username: string;
  text: string;
  time: string;
  userImage: string;
  mine?: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: Message[] = [];
  username: string = '';
  userImage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Recupera os dados do usuário armazenados no localStorage
    this.username = localStorage.getItem('username') || 'Usuário';
    this.userImage =
      localStorage.getItem('userImage') || 'assets/default-user.png';

    // Subscreve para receber as mensagens enviadas pelo servidor
    this.chatService.getMessages().subscribe((msg: Message) => {
      msg.mine = msg.username === this.username;
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      const currentTime = new Date().toLocaleTimeString();

      const message: Message = {
        username: this.username,
        text: this.message,
        time: currentTime,
        userImage: this.userImage,
      };

      // Envia a mensagem via ChatService
      this.chatService.sendMessage(message);

      // Aguarda a confirmação do servidor para adicionar a mensagem (evitando duplicidade)
      this.message = '';
    }
  }

  onFocusInput(): void {
    const inputElement = document.querySelector(
      '.input-message'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.style.borderColor = '#9c27b0'; // Roxo um pouco mais claro ao focar
    }
  }

  onBlurInput(): void {
    const inputElement = document.querySelector(
      '.input-message'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.style.borderColor = '#7b1fa2'; // Roxo mais intenso quando desfoca
    }
  }
}
