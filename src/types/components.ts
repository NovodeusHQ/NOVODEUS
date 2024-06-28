import React from "react";
import { IListItem, IReview, IClientTestimonial, ISuggestedProjectDetails } from "./dataObjs";
import { StaticImageData } from 'next/image';
import { Url } from "next/dist/shared/lib/router/router";

export interface IButton {
    text: string;
    className?: string;
    padding?: string;
    link?: boolean;
    href?: Url;
}

export interface IServiceButton extends IButton {
    service: string;
    setService: React.Dispatch<React.SetStateAction<string>> | ((selectedService: string) => void);
    active: boolean;
}

export interface IReviewCard {
    review: IReview;
    className?: string;
}

export interface IHeadedList {
    listItem: IListItem
}

export interface ITestimonial {
    testimonial: IClientTestimonial;
    active: boolean;
}

export interface ISuggestedProject {
    project: ISuggestedProjectDetails;
}