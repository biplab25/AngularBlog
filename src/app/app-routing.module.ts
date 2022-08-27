import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostsModule } from './posts/posts.module';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';

const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path:'',
    redirectTo:'/blog',
    pathMatch:'full',
  },
  {
    path:'',
    loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PostsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
