import type { Currency } from "../../../api/exchangeRates/exchangeRates.types";
import ListItem from "../../common/list-item/ListItem";
import FlagImage from "./FlagImage";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

interface ExchangeRateCardProps {
  currency: Currency;
}

// todo: filter out items with missing name and currency
// todo: adjust the filtration based on not just currency but also the country name
const ExchangeRateCard = ({ currency }: ExchangeRateCardProps) => {
  return (
    <ListItem
      ImageComponent={() => <FlagImage />}
      RightComponent={() => (
        <RightComponent
          countryName={currency.nameI18N ?? ""}
          currency={currency.currency}
        />
      )}
      LeftComponent={() => (
        <LeftComponent exchangeRate={currency.exchangeRate} />
      )}
    />
  );
};

export default ExchangeRateCard;
