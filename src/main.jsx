import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <AppRouter />);
} else {
  ReactDOM.createRoot(rootElement).render(<AppRouter />);
}
