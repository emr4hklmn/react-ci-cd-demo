import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders CI/CD Demo title", () => {
  render(<App />);
  expect(screen.getByText("CI/CD Demo")).toBeInTheDocument();
});
expect(screen.getByText("CI/CD DEMO")).toBeInTheDocument();
