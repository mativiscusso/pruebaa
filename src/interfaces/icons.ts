import { TextColor } from "interfaces/materialUI";
import { ReactNode } from "react";
import { FontFamily, TextVariant, TextWeight } from "./materialUI";

export interface ISvgIcon {
    width?: number | string;
    height?: number | string;
    fill?: string;
}

export interface ITextIcon {
    icon: ReactNode;
    text: string | number;
    padding?: string | number;
    font: FontFamily;
    color?: TextColor;
    textVariant: TextVariant;
    textWeight: TextWeight;
}

export interface IAvatar {
    image: string;
    name?: string;
    aditionalText?: string;
}

export interface IScore {
    score: number;
    viewBox?: string;
    textVariant?: TextVariant;
    color?: string;
}

export interface IDistance {
    distance: number;
    color?: string;
    viewBox?: string;
    padding?: number | string;
    font?: FontFamily;
    textVariant?: TextVariant;
    textWeight?: TextWeight;
}

export interface IPriceRange {
    priceRange: string;
    textVariant?: TextVariant;
    textColor?: TextColor;
}
