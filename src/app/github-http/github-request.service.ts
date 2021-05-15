import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  findUserName: User;
  reposName: Repository;
  
  constructor(private http: HttpClient) {
    this.findUserName = new User("","", "", "", "", 0, 0, 0, "", new Date);
    this.reposName = new Repository('', '', '', '', new Date());
  }

  searchUSer(searchName: string) {
   
    interface Response {
      url: string,
      login: string;
      html_url: string;
      location: string
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
      name: string;
    }

    return new Promise<void>((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiKey).toPromise().then(
        (result) => {
          this.findUserName = result;
          console.log(this.findUserName);
          resolve();
        },
        (error) => {
          console.log(error);
          console.log('hello world');
          console.log(environment.apiKey);
          reject();
        }
      );
    });
  }

  findRepos(profile){
    interface ApiResponse{
      name:string,
      description:string,
      language:string,
      html_url:string,
      updated_at:Date
   }
   let promise= new Promise<void>((resolve,reject)=>{
     this.http.get<ApiResponse>('https://api.github.com/users/'+profile+'/repos?access_token='+environment.apiKey).toPromise().then((data)=> {
       this.reposName=data
       console.log(this.reposName)
       resolve()
   },error=>{
     this.reposName.name='invalid repository'
     this.reposName.description=''
    })
   })
   return promise
  }
}
