import { createRoot } from "react-dom/client";
import App from "./App";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(console.log("wee"));
