import { Grid } from "@mui/material";
import type { ExchangeRate } from "../../../api/exchangeRates/exchangeRates.types";
import ElementSubHeader from "../../common/typography/ElementSubHeader";
import InlineText from "../../common/typography/InlineText";

interface LeftComponentProps {
  exchangeRate?: ExchangeRate;
}

const LeftComponent = ({ exchangeRate }: LeftComponentProps) => {
  if (!exchangeRate) {
    return <InlineText>Exchange rate is not available</InlineText>;
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ElementSubHeader>Buy: </ElementSubHeader>
        <InlineText>{exchangeRate.buy}</InlineText>
      </Grid>
      <Grid item>
        <ElementSubHeader>Sell: </ElementSubHeader>
        <InlineText>{exchangeRate.sell}</InlineText>
      </Grid>
    </Grid>
  );
};

export default LeftComponent;
