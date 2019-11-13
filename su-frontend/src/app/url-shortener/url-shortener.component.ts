import { Component } from "@angular/core";
import { URLShortenerService } from "./url-shortener.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-url-shortener",
  templateUrl: "./url-shortener.component.html",
  styleUrls: ["./url-shortener.component.scss"]
})
export class URLShortenerComponent {
  longURL: string;
  openExternalLink: string;

  constructor(private readonly svc: URLShortenerService) {}

  register(): void {
    if (this.longURL) {
      this.svc.register(this.longURL).subscribe({
        next: res => {
          this.openExternalLink = `${environment.host}/url/goto/${res.urlIdentifier}`;
        }
      });
    } else {
      this.openExternalLink = "";
    }
  }
}
