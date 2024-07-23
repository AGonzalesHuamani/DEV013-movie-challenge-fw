import { render, screen } from "@testing-library/react";
//import { Home } from "../pages/home";
import '@testing-library/jest-dom'
import Header from "../components/Header";


describe("Header", () => {
  it("should render Header", () => {
    render(<Header />);
    const text = screen.getByText(/MOVIE MAGIC/i);
    expect(text).toBeInTheDocument();
  });
});