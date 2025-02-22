import { Component, Input } from '@angular/core';
import { PlaystyleRole } from '../../models/playerrole';
import { TeamSearch, TEAM_SEARCH } from '../../models/csgoteam';
import { ApplicationUser } from '../../models/applicationuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent {
  public searchModel: TeamSearch = TEAM_SEARCH;

  @Input()
  public authUser: ApplicationUser;

  public activeLineup = [
    { roleName: 'IGL', role: PlaystyleRole.IGL },
    { roleName: 'Awper', role: PlaystyleRole.Awper },
    { roleName: 'Entry Fragger', role: PlaystyleRole.EntryFragger },
    { roleName: 'Support', role: PlaystyleRole.Support },
    { roleName: 'Lurker', role: PlaystyleRole.Lurker }
  ];

  constructor(private router: Router) { }

  public searchTeams() {
    this.router.navigate(['search/teams', this.searchQuery]);
  }

  private get searchQuery() {
    return `role=${this.searchModel.role}&overlap=${this.searchModel.scheduleOverlap}`;
  }
}
