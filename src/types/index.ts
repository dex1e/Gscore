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
