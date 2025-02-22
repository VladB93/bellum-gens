import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStrategyComponent } from './new-strategy.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxDialogModule,
  IgxInputGroupModule,
  IgxIconModule,
  IgxRadioModule,
  IgxSwitchModule,
  IgxSelectModule} from 'igniteui-angular';
import { SafeVideoLinkPipe } from 'src/app/pipes/safe-video-link.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewStrategyComponent', () => {
  let component: NewStrategyComponent;
  let fixture: ComponentFixture<NewStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewStrategyComponent,
        SafeVideoLinkPipe
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        IgxDialogModule,
        IgxInputGroupModule,
        IgxIconModule,
        IgxRadioModule,
        IgxSwitchModule,
        IgxSelectModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
