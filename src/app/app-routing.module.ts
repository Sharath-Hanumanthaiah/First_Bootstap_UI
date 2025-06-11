import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {path: '', component:IndexPageComponent},
  {path: 'login', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// PR to test Git app
// PR for test