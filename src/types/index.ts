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
  id: number;
  sitesCount: number;
  name: string;

  prices: [
    {
      id: number;
      isActive: boolean;
      productId: number;
      price: string;
    }
  ];
}

export interface ISubscription {
  id: number;
  userId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
}

export type EventOnClickOutside = MouseEvent | TouchEvent;
