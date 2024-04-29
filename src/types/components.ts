import { IListItem, IReview } from "./dataObjs";

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