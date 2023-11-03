import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<AppRouter />);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <AppRouter />);
} else {
  ReactDOM.createRoot(rootElement).render(<AppRouter />);
}
