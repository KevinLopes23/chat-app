import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterUserComponent } from './enter-user/enter-user.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: EnterUserComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
