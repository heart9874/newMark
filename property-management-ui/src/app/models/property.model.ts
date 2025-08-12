import { Space } from "./space.model";

export interface Property {
  id: string;
  name: string;
  features: string[];
  highlights: string[];
  transportation: string[];
  spaces: Space[];
  expanded?: boolean;
}