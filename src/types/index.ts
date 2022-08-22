export enum CodeStatus {
  ACTIVE = "ACTIVE",
  HOLD = "HOLD",
  INACTIVE = "INACTIVE",
}

export type EventOnClickOutside = MouseEvent | TouchEvent;

export interface ICard {
  title: string;
  licenseItem: string;
  price: string;
  currentPeriodEnd: number;
  status: CodeStatus;
}

export interface IDomainCard {
  licenseTitle: string;
  domainTitle: string;
  licenseUrl: string;
  domainUrl: string;
  status: CodeStatus;
}

export interface IStatuses {
  label: string;
  color: string;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
}

export interface IPlan {
  id: number | null;
  sitesCount: number | null;
  name: string;

  prices: IPlanPrices[];
}

export interface IPlanPrices {
  id: number | null;
  isActive: boolean;
  productId: number | null;
  price: string;
}

export interface ISubscription {
  id: number | null;
  userId: number | null;
  currentPeriodStart: number | null;
  currentPeriodEnd: number | null;
}

export interface ISubscriptions {
  id: number | null;
  userId: number | null;
  user: {
    id: number | null;
    email: string;
    username: string;
    subscribes: [];
    codes: ICodes[];
  };
  productId: number | null;
  product: IProduct;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  codes: ICodes[];
}

export interface IProduct {
  id: number | null;
  sitesCount: number | null;
  name: number | null;
  prices: [
    {
      id: number | null;
      isActive: true;
      productId: number | null;
      product: {};
      price: string;
    }
  ];
}

export interface ICodes {
  id: number | null;
  code: string;
  origin: string;
  status: string;
  subscribeId: number | null;
  subscribe: string;
  userId: number | null;
  user: string;
}
