import { Typography } from "@mui/material";
import type { Palette } from "@mui/material";

interface ElementHeaderProps {
  children: React.ReactNode;
  colorVariant?: keyof Palette;
}

const ElementHeader = ({
  children,
  colorVariant = "primary",
}: ElementHeaderProps) => {
  return (
    <Typography
      variant="h3"
      display="inline"
      color={colorVariant}
      sx={{ pt: 4 }}
    >
      {children}
    </Typography>
  );
};

export default ElementHeader;
