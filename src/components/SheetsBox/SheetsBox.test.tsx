import { render } from "@testing-library/react";
import axios from "axios";

import SheetsBox from "./SheetsBox";

jest.mock("axios");

describe("<SheetsBox />", () => {
  test("should render without crashing", () => {
    render(<SheetsBox />);
  });

  test("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a",
          },
          {
            objectID: "2",
            title: "b",
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData("react")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API}/search?query=react`);
  });

  test("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData("react")).rejects.toThrow(errorMessage);
  });
});
