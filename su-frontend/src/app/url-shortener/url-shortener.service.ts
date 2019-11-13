import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

interface URLShortened {
  urlIdentifier: string;
}
interface RawURL {
  longURL: string;
}

@Injectable({
  providedIn: "root"
})
export class URLShortenerService {
  private endpoint = `${environment.host}/url`;
  constructor(private readonly http: HttpClient) {}

  register(longURL: string): Observable<URLShortened> {
    return this.http.post<URLShortened>(`${this.endpoint}/register`, {
      longURL
    });
  }
}
