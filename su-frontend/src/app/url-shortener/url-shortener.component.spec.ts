import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { URLShortenerComponent } from "./url-shortener.component";
import { URLShortenerService } from "./url-shortener.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as faker from "faker";

describe("URLShortenerComponent", () => {
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

  it("should remove link", () => {
    component.openExternalLink = faker.internet.url();
    component.register();
    expect(component.openExternalLink).toBeUndefined();
  });
  it("link should be visible", () => {
    let anchorTag = fixture.debugElement.nativeElement.querySelector("a");
    expect(anchorTag).toBeNull();

    component.openExternalLink = faker.internet.url();
    anchorTag = fixture.debugElement.nativeElement.querySelector("a");
    expect(anchorTag).toBeDefined();
  });
});
