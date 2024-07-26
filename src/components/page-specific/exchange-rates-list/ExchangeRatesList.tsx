import type { Currency } from "../../../api/exchangeRates/exchangeRates.types";

interface ExchangeRatesListProps {
  exchangeRatesData: Currency[] | null | undefined;
}

const ExchangeRatesList = ({ exchangeRatesData }: ExchangeRatesListProps) => {
  return (
    <div>
      {exchangeRatesData &&
        exchangeRatesData?.map((exchangeRateData) => {
          return (
            <div key={exchangeRateData.currency}>
              {exchangeRateData.currency}
            </div>
          );
        })}
    </div>
  );
};

export default ExchangeRatesList;
