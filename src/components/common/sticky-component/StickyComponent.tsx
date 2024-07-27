import { Box, styled, useScrollTrigger } from "@mui/material";
import type { BoxProps } from "@mui/material";
import React from "react";
import { APP_BAR_HEIGHT } from "../layout/WithLayoutConsts";

interface StickyComponentProps {
  children: React.ReactNode;
}

const BoxTest = styled(Box)<BoxProps>(() => ({
  position: "sticky",
  top: 0,
  zIndex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  background: "#fff",
}));

interface ElevationScrollProps {
  children: React.ReactNode;
}

const StickyScroll = ({ children }: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: APP_BAR_HEIGHT,
  });

  const styles = {
    paddingTop: "15px",
    paddingBottom: "15px",
    transition: "padding-bottom 0.5s, padding-top 0.5s",
  };

  return <BoxTest sx={{ ...(trigger ? styles : {}) }}>{children}</BoxTest>;
};

const StickyComponent = ({ children }: StickyComponentProps) => {
  return <StickyScroll>{children}</StickyScroll>;
};

export default StickyComponent;
