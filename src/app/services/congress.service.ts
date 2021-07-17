import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WebService} from './web.service';

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  private url: string;

  constructor(
    private http: HttpClient,
    private server: WebService
  ) {
    this.url = server.obtainUrl();
  }

  getCongress() {
    return this.http.get(`${this.url}/getCongress`, this.server.obtainHeaders())
  }

  putCongress(id: string, congress: object) {
    return this.http.put(`${this.url}/putCongress/${id}`, congress, this.server.obtainHeaders())
  }

  disableEnableCongress(id: string, person: object) {
    return this.http.put(`${this.url}/disableCongress/${id}`, person, this.server.obtainHeaders());
  }

  getCongressById(id: string) {
    return this.http.get(`${this.url}/getCongressById/${id}`, this.server.obtainHeaders());
  }
}
