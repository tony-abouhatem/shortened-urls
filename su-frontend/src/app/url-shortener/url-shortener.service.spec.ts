import { TestBed } from '@angular/core/testing';

import { URLShortenerService } from './url-shortener.service';

describe( 'CoreServiceService', () => {
  beforeEach( () => TestBed.configureTestingModule( {} ) );

  it( 'should be created', () => {
    const service: URLShortenerService = TestBed.get( URLShortenerService );
    expect( service ).toBeTruthy();
  } );
} );
