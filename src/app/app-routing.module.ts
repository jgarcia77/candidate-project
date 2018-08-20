import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeEmailComponent } from './pages/compose-email/compose-email.component';

const routes: Routes = [
  { path: 'compose-email', component: ComposeEmailComponent },
  { path: '', redirectTo: '/compose-email', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
