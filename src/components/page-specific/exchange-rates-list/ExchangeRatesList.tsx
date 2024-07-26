import { List, ListItem } from "@mui/material";
import type { Currency } from "../../../api/exchangeRates/exchangeRates.types";
import ExchangeRateCard from "./ExchangeRateCard";

interface ExchangeRatesListProps {
  exchangeRatesData: Currency[] | null | undefined;
}

const ExchangeRatesList = ({ exchangeRatesData }: ExchangeRatesListProps) => {
  return (
    <List>
      {exchangeRatesData?.map((currency) => (
        <ListItem>
          <ExchangeRateCard currency={currency} key={currency.currency} />
        </ListItem>
      ))}
    </List>
  );
};

export default ExchangeRatesList;
