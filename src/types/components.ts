import { IListItem, IReview, IClientTestimonial } from "./dataObjs";
import { StaticImageData } from 'next/image';

export interface IButton {
    text: string;
    className?: string;
    padding?: string;
}

export interface IReviewCard {
    review: IReview;
}

export interface IHeadedList {
    listItem: IListItem
}

export interface ITestimonial {
    testimonial: IClientTestimonial;
    active: boolean;
}