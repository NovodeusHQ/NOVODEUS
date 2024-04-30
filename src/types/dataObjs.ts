import { StaticImageData } from 'next/image';

export interface ITeamMember {
    name: string;
    title: string;
    img: string | StaticImageData;
}

export interface IProject {
    img: string | StaticImageData;
    title: string;
    description: string;
}

export interface IProjectCategory {
    id: number;
    title: string;
    projects: Array<IProject>;
}

export interface IReview {
    id: number;
    companyLogo: string | StaticImageData;
    quote: string;
    name: string;
    role: string;
}

export interface IListItem {
    header: string;
    paragraph: string;
    bulletImage: string | StaticImageData;
}