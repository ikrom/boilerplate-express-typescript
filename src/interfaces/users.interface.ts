import { Role } from '@interfaces/roles.interface';
import { UUIDVersion } from 'class-validator';
export interface User {
  id: UUIDVersion;
  name: string;
  email: string;
  password: string;
  salt: string;
  no_hp: string;
  role: Role;
  regional?: string;
  unit?: string;
  linkedin?: string;
  instagram?: string;
  school?: string;
  major?: string;
}
