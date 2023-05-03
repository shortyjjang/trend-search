
export const COLORS = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

export interface Datum {
    text: string;
    value: number;
}
  
export type WordCloudProps = {
    data: Datum[];
    width?: number;
    height?: number;
};

export type TagsProps = {
    font: string
    hasText: boolean
    height: number
    padding: number
    rotate: number
    size: number
    style: string
    text: string
    value: number
    weight: string
    width: number
    x: number
    x9: number
    x1: number
    xoff: number
    y: number
    y0: number
    y1: number
    yoff: number
  }