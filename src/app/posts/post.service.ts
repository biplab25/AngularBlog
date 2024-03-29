import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore/'; 
import {Post} from './post'
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsCollection: AngularFirestoreCollection<Post>;
  postDoc:AngularFirestoreDocument<Post>; 

  constructor(private afs: AngularFirestore) { 
    this.postsCollection = afs.collection<Post>('posts',ref=>ref.orderBy('published','desc'));
  }

  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }));
  }

  getPostData(id:string){
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`)
  }

  



  create(data:Post): Observable<any>{
    return from(this.postsCollection.add(data))
  }

  delete(id: string):Observable<any> { 
    return from(this.getPost(id).delete())
  }


  update(id: string, formData):Observable<any> {
    return from(this.getPost(id).update(formData))
  }



}

