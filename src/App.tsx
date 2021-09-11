import { Grommet } from "grommet";
import { defaultTheme } from "./themes/defaultTheme";
import FullLayout from "./layout/FullLayout";

function App() {
  return (
    <Grommet theme={defaultTheme}>
      <FullLayout />
    </Grommet>
  );
}

export default App;
