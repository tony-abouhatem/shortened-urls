import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { URLShortenerComponent } from "./url-shortener.component";
import { URLShortenerService } from "./url-shortener.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";

fdescribe("URLShortenerComponent", () => {
  let component: URLShortenerComponent;
  let fixture: ComponentFixture<URLShortenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [URLShortenerComponent],
      imports: [FormsModule, CommonModule, HttpClientTestingModule],
      providers: [URLShortenerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URLShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should ");
});
