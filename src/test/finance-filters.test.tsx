import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "../App";

describe("finance filters", () => {
  it("clears the search and resets the type filter", () => {
    render(<App />);

    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "Sunrise" } });
    fireEvent.click(screen.getByRole("radio", { name: "RTGS" }));

    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));

    expect(searchInput).toHaveValue("");
    expect(screen.getByRole("radio", { name: "All" })).toBeChecked();
  });
});