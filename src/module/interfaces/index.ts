import {Methods} from '../enums';

export interface Contact {
  id?: string;
  path?: string;
  name: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  isFavorite?: boolean;
  metadata?: MetaData;
}

export interface MetaData {
  created_at: Date;
  updated_at: Date;
}

export interface IContactDialogData {
  method: Methods,
  contact: Contact
}
