import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { URLShortenerComponent } from "./url-shortener.component";
import { URLShortenerService } from "./url-shortener.service";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

const routes: Routes = [
  {
    path: "",
    component: URLShortenerComponent
  }
];

@NgModule({
  declarations: [URLShortenerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [URLShortenerService]
})
export class URLShortenerModule {}
