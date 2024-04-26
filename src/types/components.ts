import { IReview } from "./dataObjs";

export interface IButton {
    text: string;
    className?: string;
    padding?: string;
}

export interface IReviewCard {
    review: IReview;
}