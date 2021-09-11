import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: FC = ({ children }) => {
  return (
    <React.Component>
        {children}
    </React.Component>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
