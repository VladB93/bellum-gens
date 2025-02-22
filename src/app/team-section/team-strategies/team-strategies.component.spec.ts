import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStrategiesComponent } from './team-strategies.component';
import { IgxIconModule,
  IgxCardModule,
  IgxInputGroupModule,
  IgxRadioModule,
  IgxDialogModule,
  IgxToggleModule,
  IgxCheckboxModule,
  IgxChipsModule,
  IgxTimePickerModule,
  IgxSelectModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxSwitchModule,
  IgxDropDownModule,
  IgxProgressBarModule,
  IgxButtonModule,
  IgxDividerModule} from 'igniteui-angular';
import { MapPoolComponent } from 'src/app/map-pool/map-pool.component';
import { SafeVideoLinkPipe } from 'src/app/pipes/safe-video-link.pipe';
import { FormsModule } from '@angular/forms';
import { MapnamePipe } from 'src/app/pipes/mapname.pipe';
import { SideStratsPipe } from 'src/app/pipes/sidestrats.pipe';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { MapimagePipe } from 'src/app/pipes/mapimage.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeekdayPipe } from 'src/app/pipes/weekday.pipe';
import { ActiveDutyMapsPipe } from 'src/app/pipes/active-duty-maps.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TruncateTextPipe } from 'src/app/pipes/truncate-text.pipe';
import { IsVideoPipe } from 'src/app/pipes/is-video.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { VotesPipe } from 'src/app/pipes/votes.pipe';
import { AppShellComponent } from 'src/app/app-shell/app-shell.component';
import { HasVotedPipe } from 'src/app/pipes/has-voted.pipe';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NewStrategyComponent } from './new-strategy/new-strategy.component';
import { LoginDialogComponent } from 'src/app/login/login-dialog/login-dialog.component';
import { IsStratOwnerPipe } from 'src/app/pipes/is-strat-owner.pipe';

describe('TeamStrategiesComponent', () => {
  let component: TeamStrategiesComponent;
  let fixture: ComponentFixture<TeamStrategiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        ServiceWorkerModule.register('', {enabled: false}),
        IgxIconModule,
        IgxAvatarModule,
        IgxCardModule,
        IgxInputGroupModule,
        IgxRadioModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxDialogModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxTimePickerModule,
        IgxBadgeModule,
        IgxSwitchModule,
        IgxDropDownModule,
        IgxProgressBarModule,
        IgxButtonModule,
        IgxDividerModule
      ],
      declarations: [
        TeamStrategiesComponent,
        AppShellComponent,
        MapPoolComponent,
        ConfirmComponent,
        NewStrategyComponent,
        LoginDialogComponent,
        SafeVideoLinkPipe,
        MapnamePipe,
        SideStratsPipe,
        MapimagePipe,
        WeekdayPipe,
        ActiveDutyMapsPipe,
        TruncateTextPipe,
        IsVideoPipe,
        VotesPipe,
        HasVotedPipe,
        IsStratOwnerPipe
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
    fixture = TestBed.createComponent(TeamStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
