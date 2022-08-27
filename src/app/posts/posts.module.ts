import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule,Routes} from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes:Routes=[
  {path:'blog',component:PostListComponent},
  {path:'blog/:id',component:PostDetailComponent},
  {path:'dashboard',component:PostDashboardComponent}
]

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    FormsModule,
    MatProgressBarModule
  ],
  exports:[
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
    RouterModule
  ]
})
export class PostsModule { }
