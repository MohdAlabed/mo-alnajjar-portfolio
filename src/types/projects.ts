export interface IProjectImage {
    url: string;
    alt: string;
}

export interface IProjectBase {
    readonly projectSlug: string;      
    title: string;        
    tags: string[];           
}

export interface IProjectData extends IProjectBase {
    startDate: string;  //yyyy-mm-dd
    endDate: string | null;
    thumbnail: IProjectImage; 
    description: string;
    githubUrl?: string; 
    images: IProjectImage[];
}

export interface IProjectPreview extends IProjectBase {
    thumbnail: IProjectImage;
    shortDescription: string;
}

export interface IProjectFullView extends IProjectBase {
    startDate: string;  //yyyy-mm-dd
    endDate: string | null;
    description: string;
    githubUrl?: string; 
    images: IProjectImage[];
}