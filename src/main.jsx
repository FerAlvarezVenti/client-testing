import ReactDOM from "react-dom/client";

import "./index.css";
import { AppRouter } from "./AppRouter";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<AppRouter />);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <AppRouter />);
} else {
  ReactDOM.createRoot(rootElement).render(<AppRouter />);
}
