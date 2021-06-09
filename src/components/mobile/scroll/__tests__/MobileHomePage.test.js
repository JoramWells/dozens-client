import { render, cleanup, screen } from "@testing-library/react";
import MobileHomePage from "../MobileHomePage";

afterEach(()=>{
    cleanup()
})
test("should render infinite scroll", () => {
  const product = {
    id: 1,
    src: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    alt: "img1",
    productName: "",
    price: "1234/=",
    discount: "4,322/=",
    likes: "45",
  };
  render(<MobileHomePage product={product} />);
  const productElement = screen.getByTestId("product-1")
  expect(productElement).toBeInTheDocument()
  expect(productElement).toHaveTextContext("img1")
});
test("should have discount price", () => {
  const product = {
    id: 1,
    src: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    alt: "img1",
    productName: "img1",
    price: "1234/=",
    discount: "4,322/=",
    likes: "45",
  };
  render(<MobileHomePage product={product} />);
  const productElement = screen.getByTestId("product-1")
  expect(productElement).toBeInTheDocument()
  expect(productElement).toHaveTextContext("img1")
  expect(productElement).toContainHTML("<strike>")

});
