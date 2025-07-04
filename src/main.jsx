import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
// import ThemeProvider from "./Provider/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    {/* </ThemeProvider> */}
  </StrictMode>
);
