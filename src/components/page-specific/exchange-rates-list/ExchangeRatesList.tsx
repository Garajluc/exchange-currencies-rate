import { List, ListItem } from "@mui/material";
import type { CurrencyWithFlag } from "../../../api/exchangeRates/exchangeRates.types";
import ExchangeRateCard from "../exchange-rate-card/ExchangeRateCard";
import { EmptyScreen } from "../../common/empty-screen/EmptyScreen";
import ElementHeader from "../../common/typography/ElementHeader";

interface ExchangeRatesListProps {
  exchangeRatesData: CurrencyWithFlag[] | null | undefined;
}

const ExchangeRatesList = ({ exchangeRatesData }: ExchangeRatesListProps) => {
  if (!exchangeRatesData?.length) {
    return (
      <EmptyScreen
        title="No Exchange Rate Found"
        body={
          "Please try adjusting your search to match a currency or country name."
        }
      />
    );
  }

  return (
    <>
      <ElementHeader>Today's rates</ElementHeader>
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
    </>
  );
};

export default ExchangeRatesList;
