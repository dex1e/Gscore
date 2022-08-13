export enum EStatus {
  ACTIVE = "ACTIVE",
  HOLD = "HOLD",
  INACTIVE = "INACTIVE",
}

export interface ICard {
  title: string;
  licenseItem: string;
  price: string;
  currentPeriodEnd: number;
}

export interface IDomainCard {
  licenseTitle: string;
  domainTitle: string;
  licenseUrl: string;
  domainUrl: string;
  status: EStatus;
}

export interface IStatuses {
  label: string;
  color: string;
}
