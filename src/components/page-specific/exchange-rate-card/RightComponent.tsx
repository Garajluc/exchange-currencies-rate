import { Grid } from "@mui/material";
import ElementSubHeader from "../../common/typography/ElementSubHeader";
import InlineText from "../../common/typography/InlineText";

interface RightComponentProps {
  countryName: string;
  currency: string;
}

const RightComponent = ({ countryName, currency }: RightComponentProps) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ElementSubHeader>{countryName}</ElementSubHeader>
      </Grid>
      <Grid item>
        <InlineText colorVariant="secondary">{currency}</InlineText>
      </Grid>
    </Grid>
  );
};

export default RightComponent;
