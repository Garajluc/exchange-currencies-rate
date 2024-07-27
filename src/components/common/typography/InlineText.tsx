import { Typography } from "@mui/material";
import type { Palette } from "@mui/material";

interface InlineTextProps {
  children: React.ReactNode;
  colorVariant?: keyof Palette;
}

const InlineText = ({
  children,
  colorVariant = "primary",
}: InlineTextProps) => {
  return (
    <Typography variant="body1" display="inline" color={colorVariant}>
      {children}
    </Typography>
  );
};

export default InlineText;
