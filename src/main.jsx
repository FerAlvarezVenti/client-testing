import { hydrate, render } from "react-dom";
import { AppRouter } from "./AppRouter";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<AppRouter />, rootElement);
} else {
  render(<AppRouter />, rootElement);
}
