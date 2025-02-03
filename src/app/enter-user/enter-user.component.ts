import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-user',
  templateUrl: './enter-user.component.html',
  styleUrls: ['./enter-user.component.css'],
})
export class EnterUserComponent {
  username: string = '';
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  startChat() {
    if (this.username && this.imageUrl) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('userImage', this.imageUrl as string);
      this.router.navigate(['/chat']);
    } else {
      alert('Por favor, insira seu nome e foto!');
    }
  }
}
