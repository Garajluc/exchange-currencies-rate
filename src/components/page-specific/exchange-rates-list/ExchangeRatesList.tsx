import { List, ListItem } from "@mui/material";
import type { CurrencyWithFlag } from "../../../api/exchangeRates/exchangeRates.types";
import ExchangeRateCard from "../exchange-rate-card/ExchangeRateCard";

interface ExchangeRatesListProps {
  exchangeRatesData: CurrencyWithFlag[] | null | undefined;
}

const ExchangeRatesList = ({ exchangeRatesData }: ExchangeRatesListProps) => {
  return (
    <List>
      {exchangeRatesData?.map((currency) => (
        <ListItem
          key={currency.currency}
          sx={{ justifyContent: "center", paddingX: 0 }}
        >
          <ExchangeRateCard currency={currency} key={currency.currency} />
        </ListItem>
      ))}
    </List>
  );
};

export default ExchangeRatesList;
