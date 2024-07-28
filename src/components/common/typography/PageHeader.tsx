import { Typography } from "@mui/material";
import type { Palette } from "@mui/material";

interface PageHeaderProps {
  children: React.ReactNode;
  colorVariant?: keyof Palette;
}

const PageHeader = ({
  children,
  colorVariant = "primary",
}: PageHeaderProps) => {
  return (
    <Typography
      variant="h1"
      display="inline"
      color={colorVariant}
      sx={{ pb: 5 }}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
