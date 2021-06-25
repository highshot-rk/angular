import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';

// define routes
const routes: Routes = [
  { path: '', component:  MainComponent},
  { path: 'child/:id', component:  ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
