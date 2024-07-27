import type { BoxProps } from "@mui/material";
import { Box, Grid, styled } from "@mui/material";

interface ListItemProps {
  ImageComponent: () => JSX.Element;
  RightComponent: () => JSX.Element;
  LeftComponent: () => JSX.Element;
}

const ListItemBox = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: 100,
  padding: "0px 20px",
  borderRadius: 15,
  background: "#faf4ff",
}));

const ListItem = ({
  ImageComponent,
  RightComponent,
  LeftComponent,
}: ListItemProps) => {
  return (
    <ListItemBox>
      <Grid
        container
        alignContent="center"
        sx={{ height: "100%" }}
        wrap="nowrap"
      >
        <Grid
          container
          item
          justifyContent="center"
          alignContent="center"
          sx={{ width: 250 }}
        >
          <ImageComponent />
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item alignContent="center">
            <RightComponent />
          </Grid>
          <Grid item alignContent="center">
            <LeftComponent />
          </Grid>
        </Grid>
      </Grid>
    </ListItemBox>
  );
};

export default ListItem;
