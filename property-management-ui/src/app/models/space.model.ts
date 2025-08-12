import { RentRoll } from './rent-roll.model';

export interface Space {
  id: string;
  name: string;
  rentRoll: RentRoll[];
  expanded?: boolean;
}