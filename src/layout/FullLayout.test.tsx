import { render } from "@testing-library/react";

import FullLayout from "./FullLayout";

describe("<FullLayout />", () => {
  test("should render without crashing", () => {
    render(<FullLayout />);
  });
});
