import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AdminPage from "./pages/AdminPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import RouteErrorPage from "./pages/RouteErrorPage";
import { LanguageProvider } from "./context/LanguageContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import { AdminAccessProvider } from "./context/AdminAccessContext";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "case-study", element: <CaseStudyPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <AdminAccessProvider>
        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </AdminAccessProvider>
    </LanguageProvider>
  </React.StrictMode>
);
