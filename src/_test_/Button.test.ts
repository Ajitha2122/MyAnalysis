import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("renders Button component", () => {
  render(<Button>Click Me</Button>); 
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

