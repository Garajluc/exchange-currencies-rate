import { Grid, Stack, Typography } from "@mui/material";

type EmptyScreenProps = {
  title: string;
  body: string | React.ReactNode;
  actionButton?: React.ReactNode;
};
export const EmptyScreen = ({
  title,
  body,
  actionButton,
}: EmptyScreenProps) => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <img
        src="/empty-search.jpg"
        width={450}
        height={350}
        alt="upload cover"
      />
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ pb: 10 }}
      >
        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
          {title}
        </Typography>
        <Grid container justifyContent={"center"}>
          <Typography sx={{ textAlign: "center" }}>{body}</Typography>
        </Grid>
        {actionButton}
      </Stack>
    </Stack>
  );
};
