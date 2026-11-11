<div align="center">

# 💬 Chat App

**Front-end de chat em tempo real com Angular e Socket.IO.**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

</div>

## 💡 Sobre

Aplicação Angular em que o usuário informa o nome, escolhe uma foto de perfil e entra numa sala de chat. As mensagens são enviadas e recebidas em tempo real por WebSocket com `socket.io-client`.

> Este repositório contém apenas o front-end. Ele espera um servidor Socket.IO em `http://localhost:3000` que retransmita o evento `chat message` (cada mensagem tem `username`, `text`, `time` e `userImage`).

## ✨ Funcionalidades

- Tela de entrada com nome e upload de foto de perfil
- Envio e recebimento de mensagens em tempo real
- Mensagens com foto, nome do autor e horário
- Diferenciação visual entre mensagens próprias e de outros usuários

## 🛠️ Tecnologias

- Angular 13
- TypeScript
- Socket.IO Client
- RxJS

## 🚀 Como rodar

Requer Node.js compatível com Angular 13 (ex.: Node 16) e um servidor Socket.IO rodando na porta 3000.

```bash
git clone https://github.com/KevinLopes23/chat-app.git
cd chat-app
npm install
npm start
```

Acesse `http://localhost:4200`.

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)
