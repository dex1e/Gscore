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
}

export const card: ICard = {
  title: "Gscore",
  licenseItem: "Single site license",
  price: "$77",
  currentPeriodEnd: 1691231766,
};

export const domainCard: IDomainCard = {
  licenseTitle: "License code",
  domainTitle: "Domain",
  licenseUrl: "sl=ru&tl=en&texte=%D0...",
  domainUrl: "https://translate.google.com/?=...",
};
