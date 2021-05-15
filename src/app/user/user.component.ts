import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../github-http/github-request.service';
import { User } from '../user';
import { Repository } from '../repository';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private githubRequestService:GithubRequestService) { }
  user: User;
  repos: Repository;
  search: string;
  
  find(searchTerm) {
    this.githubRequestService.searchUSer(searchTerm).then(result => {
      this.user = this.githubRequestService.findUserName
      console.log(this.user)

    }, (error) => {
      console.log(error)
    })
    this.githubRequestService. findRepos(searchTerm).then(result => {
      this.repos = this.githubRequestService.reposName
      console.log(this.repos)

    }, (error) => {
      console.log(error)
    })

  }
  ngOnInit(): void {
    this.find('rogeruwayezu');
  }

}
