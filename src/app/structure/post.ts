import { IPersistentData } from './persistentData';

export interface IPost extends IPersistentData {
    content: string;
    userID: string;
    lastModified: Date;
    created: Date;
}
