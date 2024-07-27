import { AppBar as MuiAppBar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { APP_BAR_HEIGHT } from "./WithLayoutConsts";

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: APP_BAR_HEIGHT }}>
      <MuiAppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          boxShadow: "-6px 6px 7px 0px rgb(186 171 205 / 20%)",
        }}
      >
        <Toolbar>
          <Box sx={{ pr: 2 }}>
            <PriceChangeIcon fontSize="large" color="primary" />
          </Box>
          <Typography variant="h3">Exchange Rates</Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
