import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { routes } from "./routes";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={`/${route.path}/`}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
