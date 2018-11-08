import { IPersistentData } from './persistentData';
import { IUserRole } from './userRole';

export interface IUser extends IPersistentData {
    username: string;
    phoneNumber: string;
    role: IUserRole;
    name: string;
}
