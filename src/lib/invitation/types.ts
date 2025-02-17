export interface InvitationDTO {
  creatorId: number;
  invitationId: number;
  created_at: string;
  updated_at: string;
  place: string;
  detail_address: string;
  date: string;
  max_attendances: number;
  description: string;
  state: string;
  link: string;
  invitationType: 'CREATOR' | 'INVITED';
  fontName: string;
  sticker: string;
  title: string;
  backgroundImageData: string;
}
