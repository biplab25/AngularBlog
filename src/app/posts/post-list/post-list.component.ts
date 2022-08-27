import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  post: Post
  editing: boolean = false
  posts: Observable<Post[]>;
  constructor(private postService: PostService, private toast: HotToastService, public auth: AuthenticationService, private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    console.log(this)
  }



 

  


}
