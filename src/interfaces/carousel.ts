import { ReactNode } from "react";

export interface ICarousel {}

export interface ICarouselContainer {
    sliding: boolean;
    dir: "PREV" | "NEXT";
    children: ReactNode;
}

export const NEXT = "NEXT";
export const PREV = "PREV";

export type Direction = typeof PREV | typeof NEXT;

export interface ICarouselState {
    pos: number;
    sliding: boolean;
    dir: Direction;
}

export interface ICarouselSlot {
    order: number;
    children: ReactNode;
}

export type CarouselAction =
    | { type: Direction; numItems: number }
    | { type: "stopSliding" | "reset" | "finish" };
