import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsComponent } from './team-details.component';
import { AvailabilityComponent } from 'src/app/availability/availability.component';
import { IgxAvatarModule,
  IgxCardModule,
  IgxDragDropModule,
  IgxChipsModule,
  IgxTimePickerModule,
  IgxDialogModule,
  IgxRippleModule } from 'igniteui-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { PlayerCountryPipe } from 'src/app/pipes/player-country.pipe';
import { WeekdayPipe } from 'src/app/pipes/weekday.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        ServiceWorkerModule.register('', {enabled: false}),
        IgxAvatarModule,
        IgxCardModule,
        IgxDragDropModule,
        IgxChipsModule,
        IgxTimePickerModule,
        IgxDialogModule,
        IgxRippleModule
      ],
      declarations: [
        TeamDetailsComponent,
        AvailabilityComponent,
        ConfirmComponent,
        PlayerCountryPipe,
        WeekdayPipe
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              params: new Observable()
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
