import { Component, ViewChild, Input } from '@angular/core';
import { IgxDialogComponent,
  PositionSettings,
  HorizontalAlignment,
  OverlaySettings,
  ConnectedPositioningStrategy,
  IgxProgressType } from 'igniteui-angular';
import { LoginService } from '../services/login.service';
import { ApplicationUser } from '../models/applicationuser';
import { PlaystyleRole } from '../models/playerrole';
import { BellumgensApiService } from '../services/bellumgens-api.service';
import { LoginProvider } from '../models/login-provider';
import { BaseComponent } from '../base/base.component';
import { LOGIN_ASSETS } from '../models/misc';

export interface ProfileCompleteness {
  availability: boolean;
  primaryRole: boolean;
  secondaryRole: boolean;
  mapPool: boolean;
  profileStage: number;
  doneColor: string;
  pendingColor: string;
  doneIcon: string;
  pendingIcon: string;
  progressType: IgxProgressType;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {
  private _authUser: ApplicationUser;

  public loginProviders: LoginProvider [];

  public loginColors = LOGIN_ASSETS;

  @Input()
  public set authUser(user: ApplicationUser) {
    this._authUser = user;
    if (user) {
      this.fillCompleteness();
    }
  }

  public get authUser(): ApplicationUser {
    return this._authUser;
  }

  public profileCompleteness: ProfileCompleteness;

  public positionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Left,
    horizontalStartPoint: HorizontalAlignment.Right
  };

  public overlaySettings: OverlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy(this.positionSettings)
  };

  @ViewChild(IgxDialogComponent) public dialog: IgxDialogComponent;

  constructor(private authManager: LoginService,
              private apiService: BellumgensApiService) {
    super();
    this.subs.push(this.apiService.authUserUpdate.subscribe(_ => this.fillCompleteness()));
    this.subs.push(this.authManager.loginProviders.subscribe(providers => this.loginProviders = providers));
  }

  public openLogin() {
    this.dialog.open();
  }

  public login(provider: string) {
    this.authManager.login(provider);
  }

  public logout() {
    this.authManager.logout();
  }

  private fillCompleteness() {
    this.profileCompleteness = {
      availability: false,
      primaryRole: false,
      secondaryRole: false,
      mapPool: false,
      profileStage: 0,
      doneColor: '#4eb862',
      pendingColor: '#ff134a',
      doneIcon: 'done',
      pendingIcon: 'clear',
      progressType: IgxProgressType.INFO
    };
    if (this._authUser.availability.filter(a => a.Available).length) {
      this.profileCompleteness.availability = true;
      this.profileCompleteness.profileStage++;
    }
    if (this._authUser.primaryRole !== PlaystyleRole.NotSet) {
      this.profileCompleteness.primaryRole = true;
      this.profileCompleteness.profileStage++;
    }
    if (this._authUser.secondaryRole !== PlaystyleRole.NotSet) {
      this.profileCompleteness.secondaryRole = true;
      this.profileCompleteness.profileStage++;
    }
    if (this._authUser.mapPool.filter(m => m.IsPlayed).length) {
      this.profileCompleteness.mapPool = true;
      this.profileCompleteness.profileStage++;
    }
    this.profileCompleteness.progressType = this.profileCompleteness.profileStage <= 1 ? IgxProgressType.DANGER :
                                            this.profileCompleteness.profileStage >= 4 ? IgxProgressType.SUCCESS :
                                            IgxProgressType.WARNING;
  }
}
