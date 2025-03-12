/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import Layout from "./Layout";
import Clarity from '@microsoft/clarity';
import config from "./data/config";

import "./index.css";
import App from "./pages/Home";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

Clarity.init(config.clarity.id);

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={App} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root!,
);
