import { IPersistentData } from './persistentData';

export interface IPost extends IPersistentData {
    content: string;
    lastModified: Date;
    created: Date;
}
