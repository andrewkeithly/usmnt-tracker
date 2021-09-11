import { Grid, Nav, Box } from "grommet";

const grid = {
  areas: [
    { name: "nav", start:  [0, 0], end: [1, 0] },
    { name: "main", start: [0, 1], end: [1, 1] },
    { name: "foot", start: [0, 2], end: [1, 2] },
  ],
  columns: ["small", "flex"],
  rows: ["small", "xlarge", "xsmall"],
  gap: "small",
};

const FullLayout = () => {
  return (
    <Grid areas={grid.areas} columns={grid.columns} rows={grid.rows} gap={grid.gap}>
      <Nav gridArea="nav" background="accent-4" direction="row" />
      <Box gridArea="main" background="brand" />
      <Box gridArea="foot" background="accent-1" />
    </Grid>
  );
};

export default FullLayout;
