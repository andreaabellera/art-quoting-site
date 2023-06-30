import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage, ReviewPage, OrderPage } from './pages';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'review', component: ReviewPage },
  { path: 'order', component: OrderPage },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }