import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
 {path:'courses',component:CoursesComponent},
 {path:'about',component:AboutComponent},
 {path:'team',component:TeamComponent},
 {path:'pricing',component:PricingComponent},
 {path:'blog',component:BlogComponent},
 {path:'contact',component:ContactComponent},
 {path:'**', component:HomeComponent},
 
//  {path:'home/home.component.html',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
