import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FileEffects } from './file.effects';

describe('FileEffects', () => {
  let actions$: Observable<any>;
  let effects: FileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
