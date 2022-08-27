import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  post:Post;

  content: string
  image: string
  title: string

  constructor(private auth:AuthenticationService,private postService:PostService,private toast: HotToastService,private router: Router) { }

  ngOnInit(): void {
  }

  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title
    };
    
    this.postService.create(postData).pipe(
      this.toast.observe({
        success: 'Your Post Submitted Successfully',
        loading: 'Posting...',
        error: ({ message }) => `There was an error`
      })
    ).subscribe(() => {
      this.router.navigate(['/blog']);
    });
    this.title = ''
    this.content = ''
    this.image = ''

}


}