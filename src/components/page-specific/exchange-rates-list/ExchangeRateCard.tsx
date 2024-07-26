import type { Currency } from "../../../api/exchangeRates/exchangeRates.types";
import ListItem from "../../common/list-item/ListItem";

interface ExchangeRateCardProps {
  currency: Currency;
}

const ExchangeRateCard = ({ currency }: ExchangeRateCardProps) => {
  return (
    <ListItem
      ImageComponent={() => <div>{currency.currency}</div>}
      RightComponent={() => <div>right</div>}
      LeftComponent={() => <div>left</div>}
    />
  );
};

export default ExchangeRateCard;
