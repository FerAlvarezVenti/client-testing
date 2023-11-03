import ReactDOM from "react-dom/client";

import "./index.css";
import { AppRouter } from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <AppRouter />);
} else {
  ReactDOM.createRoot(rootElement).render(<AppRouter />);
}
