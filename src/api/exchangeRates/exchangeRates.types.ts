export interface ExchangeRatesRoot {
  institute: number;
  lastUpdated: string;
  comparisonDate: string;
  baseCurrency: string;
  fx: Currency[];
}

export interface Currency {
  currency: string;
  precision: number;
  nameI18N?: string;
  exchangeRate?: ExchangeRate;
  banknoteRate?: BanknoteRate;
  flags?: string[];
  denominations?: number[];
}

export interface ExchangeRate {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
}

export interface BanknoteRate {
  buy: number;
  middle: number;
  sell?: number;
  indicator: number;
  lastModified: string;
}

export interface ExchangeRatesRootWithFlags extends ExchangeRatesRoot {
  fx: CurrencyWithFlag[];
}

export interface CurrencyWithFlag extends Currency {
  flagPath: string;
}
