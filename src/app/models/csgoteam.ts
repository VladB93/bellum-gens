import { PlaystyleRole } from './playerrole';
import { SteamGroup } from './steamuser';
import { NotificationState } from './usernotifications';
import { Availability } from './playeravailability';

export interface CSGOTeam {
  TeamId?: string;
  TeamName: string;
  TeamAvatar: string;
  Description: string;
  Discord?: string;
  Visible: boolean;
  CustomUrl?: string;
  Members?: TeamMember [];
  PracticeSchedule?: Availability [];
  SteamGroup?: SteamGroup;
}

export interface TeamMember {
  TeamId: string;
  UserId: string;
  IsActive: boolean;
  IsAdmin: boolean;
  IsEditor: boolean;
  Role: PlaystyleRole;
  Username: string;
  AvatarIcon: string;
  AvatarMedium: string;
  AvatarFull: string;
  CustomUrl: string;
  Country: string;
  RealName: string;
}

export interface TeamApplication {
  State: NotificationState;
  ApplicantId: string;
  TeamId: string;
  Message: string;
  Sent: string;
  UserName?: string;
  AvatarIcon?: string;
}

export interface TeamSearch {
  role: PlaystyleRole;
  scheduleOverlap: number;
}

export const TEAM_PLACEHOLDER: CSGOTeam = {
  TeamName: 'Create or view teams',
  TeamAvatar: '',
  Description: 'Use the left navigation to create your own team or to view existing teams.',
  Visible: true,
};

export function getEmptyNewTeam(): CSGOTeam {
  return {
    TeamName: '',
    TeamAvatar: '',
    Description: '',
    Discord: '',
    Visible: true,
    TeamId: undefined,
    PracticeSchedule: [],
    Members: undefined
  };
}

export const TEAM_SEARCH: TeamSearch = {
  role: null,
  scheduleOverlap: 0
};
