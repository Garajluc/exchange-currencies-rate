import type { BoxProps } from "@mui/material";
import { Box, styled } from "@mui/material";

interface ListItemProps {
  ImageComponent: () => JSX.Element;
  RightComponent: () => JSX.Element;
  LeftComponent: () => JSX.Element;
}

// https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component
const ListItemBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: 300,
  background: "lightBlue",
}));

const ListItem = ({
  ImageComponent,
  RightComponent,
  LeftComponent,
}: ListItemProps) => {
  return (
    <ListItemBox>
      <ImageComponent />
      <RightComponent />
      <LeftComponent />
    </ListItemBox>
  );
};

export default ListItem;
