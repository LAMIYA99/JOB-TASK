import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};
export type headingTypes = {
  title?: string;
  desc?: string;
};

export type ProductCardProps = {
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
};

type ArticlesCardsProps = {
  image: string;
  category: string;
  date: string;
  title: string;
};