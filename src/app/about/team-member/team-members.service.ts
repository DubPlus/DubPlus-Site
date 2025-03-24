import { Injectable } from '@angular/core';
import { TeamMember } from "./team-member";

@Injectable()
export class TeamMembersService {

  constructor() { }

  getMembers(): TeamMember[] {
    return [
      new TeamMember(
        "Cory Shaw",
        "Co-Owner",
        "Cory was a long time user of Turntable.fm (rest in peace), and immediately hopped on board the QueUp train once hearing about it. Cory has sporadically helped QueUp with its frontend development and continues to stay in touch with the QueUp team. He helps on <a href=\"https://discord.gg/kSCNemv\" target=\"_blank\">QueUp's Discord</a> as part of the support staff, and continues to help the community with issues and building tools, including Dub+ and <a href=\"https://github.com/coryshaw1/SteveBot\" target=\"_blank\">SteveBot<a/>!",
        "coryshaw1",
        "5014172",
        "mbsurfer",
        "coryshawty"
      ),
      new TeamMember("Francisco G.",
        "Co-Owner",
        "Francisco has been a QueUp user since the beginning. He is a Moderator in the <a href=\"https://queup.net/join/chillout-mixer\" target=\"_blank\">Chillout Mixer</a>. He has built other QueUp related tools like <a href=\"https://github.com/FranciscoG/DerpyBot\" target=\"_blank\">DerpyBot<a/>!",
        "FranciscoG",
        "557684",
        "ciscog",
        ""
      )
    ]
  }

}
