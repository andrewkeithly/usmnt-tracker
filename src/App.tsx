import { Grommet } from "grommet";
import { defaultTheme } from "./themes/defaultTheme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Grommet theme={defaultTheme}>
      <Router>
        <Routes />
      </Router>
    </Grommet>
  );
}

export default App;
