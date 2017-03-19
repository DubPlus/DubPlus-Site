import { TestBed, inject } from '@angular/core/testing';
import { BrowserDetectionService } from './browser-detection.service';

describe('BrowserDetectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserDetectionService]
    });
  });

  it('should ...', inject([BrowserDetectionService], (service: BrowserDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
