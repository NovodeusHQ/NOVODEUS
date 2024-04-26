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

export interface IReview {
    id: number;
    companyLogo: string | StaticImageData;
    quote: string;
    name: string;
    role: string;
}