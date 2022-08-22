export enum CodeStatus {
  ACTIVE = "ACTIVE",
  HOLD = "HOLD",
  INACTIVE = "INACTIVE",
}

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

export type EventOnClickOutside = MouseEvent | TouchEvent;
