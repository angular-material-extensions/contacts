export interface Contact {
  id?: string;
  path?: string;
  name: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  metadata: MetaData;
}

export interface MetaData {
  created_at: Date;
  updated_at: Date;
}
