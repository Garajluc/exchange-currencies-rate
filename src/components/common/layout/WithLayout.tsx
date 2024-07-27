import { Stack } from "@mui/material";
import { Footer } from "./Footer";
import { CONTENT_HEIGHT } from "./WithLayoutConsts";
import { AppBar } from "./AppBar";

interface WithLayoutPops {
  children: React.ReactNode;
}

const WithLayout = ({ children }: WithLayoutPops) => {
  return (
    <>
      <AppBar />
      <Stack
        sx={{
          minHeight: CONTENT_HEIGHT,
          maxWidth: "75vw",
          margin: "auto",
          py: 5,
        }}
      >
        {children}
      </Stack>
      <Footer />
    </>
  );
};

export default WithLayout;
