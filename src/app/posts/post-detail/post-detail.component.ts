import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:Post;
  editing: boolean = false
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private toast: HotToastService,
    public auth:AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPost();
    console.log(this)
  }

  getPost() {
    const id = this.route.snapshot.params['id'];
    return this.postService.getPostData(id).subscribe(data => this.post=data)
  }

  delete(){
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.delete(id).pipe(
      this.toast.observe({
        success: 'Your Post Deleted Successfully',
        loading: 'Deleting...',
        error: ({ message }) => `There was an error`
      })
    ).subscribe(() => {
      this.router.navigate(['/blog'])
    });
  
  }
  
  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }


}
