import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfilIdService {
    private profileId: number;

    setProfileId(id: number) {
      this.profileId = id;
    }
  
    getProfileId(): number {
      return this.profileId;
    }
}
