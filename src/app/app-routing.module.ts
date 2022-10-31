import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';

//Compoent
import { HomeComponent } from './Component/home/home.component';
import { WorkkComponent } from './Component/workk/workk.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkkComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
