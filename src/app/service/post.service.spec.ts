import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import {
  HttpTestingController, HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, ResponseOptions, RequestMethod
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { PersonList } from './../interface/person-model';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from './../service/http-error-handler.service';
import { MessageService } from './../service/message.service';
import { AddPersonComponent } from './../add-person/add-person.component';
import { LoginComponent } from './../login/login.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { PersonComponent } from './../person/person.component';
import { PersonDetailComponent } from './../person-detail/person-detail.component';
import { SearchPipe } from './../pipe/search.pipe';
import { CapitalizeFirstPipe } from './../pipe/capitalize-first.pipe';
import { RouterTestingModule } from '@angular/router/testing';


describe('PostService', () => {

  var mockBackend: MockBackend;

  beforeEach(async(() => {
    // set up the test environment
    TestBed.configureTestingModule({
      declarations: [CapitalizeFirstPipe, SearchPipe, AddPersonComponent, LoginComponent, PageNotFoundComponent, PersonComponent, PersonDetailComponent],
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule, FormsModule],
      providers: [PostService, HttpErrorHandler, MessageService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  // This block of code is called before each spec is executed
  beforeEach(() => {
    console.log('POST SERVICE -- This is called before spec');
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

});
