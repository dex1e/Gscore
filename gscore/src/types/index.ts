import { StatusVariables } from "components/ui/Status";

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
  status: StatusVariables;
}
