import type { CurrencyWithFlag } from "../../../api/exchangeRates/exchangeRates.types";
import ListItem from "../../common/list-item/ListItem";
import FlagImage from "./FlagImage";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

interface ExchangeRateCardProps {
  currency: CurrencyWithFlag;
}

const ExchangeRateCard = ({ currency }: ExchangeRateCardProps) => {
  return (
    <ListItem
      ImageComponent={() => (
        <FlagImage
          flagPath={currency.flagPath ?? ""}
          title={`${currency.nameI18N ?? currency.currency}`}
        />
      )}
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
