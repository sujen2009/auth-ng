import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerComponent } from './error-handler.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateRegistryLoaderFactory } from 'src/app/app.module';
import { TranslateRegistry } from '@itonics/translate-ng';
import { UiNgModule } from '@itonics/ui-ng';

fdescribe('ErrorHandlerComponent', () => {
  let component: ErrorHandlerComponent;
  let fixture: ComponentFixture<ErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHandlerComponent ],
      imports: [
        UiNgModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: TranslateRegistryLoaderFactory,
            deps: [TranslateRegistry]
          }
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
