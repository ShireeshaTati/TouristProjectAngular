import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TouristFormComponent } from './tourist-form/tourist-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"register",component:TouristFormComponent},
  {path:"details",component:DetailsComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"",redirectTo:"welcome",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
