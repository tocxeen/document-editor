/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordDocumentServiceService } from './wordDocumentService.service';

describe('Service: WordDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordDocumentServiceService]
    });
  });

  it('should ...', inject([WordDocumentServiceService], (service: WordDocumentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
