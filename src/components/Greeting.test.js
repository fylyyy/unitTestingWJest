import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greetings />", () => {

  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const textElement = screen.getByText(/hello world!/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders good to see you before button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const textElement = screen.getByText(/Good to see you/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    userEvent.click(screen.getByRole("button"));

    // Assert
    const textElement = screen.getByText(/Changed!/i);
    expect(textElement).toBeInTheDocument();
  });

  test("not renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    userEvent.click(screen.getByRole("button"));

    // Assert
    const textElement = screen.queryByText(/Good to see you/i, {expect: false});
    expect(textElement).toBeNull()
  });
});
