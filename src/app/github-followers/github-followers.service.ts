import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubFollowersService {
  private url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: Http) {  }

  getFollowers() {
    return this.http.get(this.url)
    .pipe(
      map(response => response.json())
    )
  }
}
