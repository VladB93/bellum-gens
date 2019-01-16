import { Component, OnInit, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import { IgxDropEventArgs, IgxAvatarComponent } from 'igniteui-angular';
import { PlaystyleRole } from 'src/app/models/playerrole';
import { TeamMember, CSGOTeam, TEAM_PLACEHOLDER } from 'src/app/models/csgoteam';
import { ApplicationUser } from 'src/app/models/applicationuser';
import { BellumgensApiService } from 'src/app/services/bellumgens-api.service';

interface RoleSlot {
  roleName: string;
  role: PlaystyleRole;
  user: TeamMember;
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  private _team = TEAM_PLACEHOLDER;

  public get team() {
    return this._team;
  }

  @Input()
  public set team(team: CSGOTeam) {
    if (this._team !== team) {
      this._team = team;
      this.roleSlots.forEach((role) => {
        const member = this._team.Members.find(m => m.Role === role.role);
        if (member) {
          role.user = member;
        }
      });
      this.activeMembers = this._team.Members.filter(m => m.IsActive && m.Role === PlaystyleRole.NotSet);
      this.inactiveMembers = this._team.Members.filter(m => !m.IsActive);
    }
  }
  public activeMembers: TeamMember [];
  public inactiveMembers: TeamMember [];

  @Input()
  public authUser: ApplicationUser;
  public roleSlots: RoleSlot [] = [
    { roleName: 'IGL', role: PlaystyleRole.IGL, user: null },
    { roleName: 'Awper', role: PlaystyleRole.Awper, user: null },
    { roleName: 'Entry Fragger', role: PlaystyleRole.EntryFragger, user: null },
    { roleName: 'Support', role: PlaystyleRole.Support, user: null },
    { roleName: 'Lurker', role: PlaystyleRole.Lurker, user: null }
  ];

  @ViewChildren(IgxAvatarComponent, { read: ElementRef }) public emptyRoles: QueryList<ElementRef>;

  constructor(private apiService: BellumgensApiService) { }

  ngOnInit() {
  }

  public removeFromRole(role: RoleSlot) {
    const user = role.user;
    this.activeMembers.push(user);
    role.user = null;
    user.Role = PlaystyleRole.NotSet;
    this.apiService.updateTeamMember(user).subscribe();
  }

  public removeFromTeam(user: TeamMember) {
    this.apiService.removeTeamMember(user).subscribe();
  }

  public assignToRole(args: IgxDropEventArgs, role: RoleSlot) {
    const user = args.drag.data;
    user.Role = role.role;
    role.user = user;
    this.activeMembers.splice(this.activeMembers.indexOf(args.drag.data), 1);
    args.cancel = true;
    this.roleDraggingEnd();
    this.apiService.updateTeamMember(user).subscribe();
  }

  public get isAdmin() {
    if (!this.team || !this.authUser) {
      return false;
    }
    return this.team.Members.find(m => m.UserId === this.authUser.SteamUser.steamID64).IsAdmin;
  }

  public roleDragging() {
    this.emptyRoles.filter(e => e.nativeElement.classList.contains('empty-role')).forEach((avatar) => {
      avatar.nativeElement.classList.add('empty-role-active');
    });
  }

  public roleDraggingEnd() {
    this.emptyRoles.forEach((avatar) => {
      avatar.nativeElement.classList.remove('empty-role-active');
    });
  }
}
