import { Main, Grid, Box } from "grommet";
import Header from "./Header";

const grid = {
  areas: [
    { name: "nav", start: [0, 0], end: [1, 0] },
    { name: "main", start: [0, 1], end: [1, 1] },
    { name: "foot", start: [0, 2], end: [1, 2] },
  ],
  columns: ["small", "flex"],
  rows: ["auto", "flex", "xsmall"],
  gap: "large",
};

const FullLayout = () => {
  return (
    <Main background="brand">
      <Grid
        areas={grid.areas}
        columns={grid.columns}
        rows={grid.rows}
        gap={grid.gap}
      >
        <Box gridArea="nav" background="accent-4">
          <Header />
        </Box>
        <Box gridArea="main" background="brand" />
        <Box gridArea="foot" background="accent-1" />
      </Grid>
    </Main>
  );
};

export default FullLayout;
