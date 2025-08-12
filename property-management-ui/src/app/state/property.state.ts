import { Property } from '../models/property.model';

export interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
}

export const initialPropertyState: PropertyState = {
  properties: [],
  loading: false,
  error: null
};