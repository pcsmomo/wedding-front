import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders wedding header", () => {
  render(<App />);
  const weddingHeader = screen.getByRole("heading", { name: /wedding/i });
  expect(weddingHeader).toBeInTheDocument();
});
