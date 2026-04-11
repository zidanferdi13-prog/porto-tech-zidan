import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { allProjects as defaultProjects } from "../data/projects";

const STORAGE_KEY = "portfolio-projects-v1";
const ProjectsContext = createContext(null);

function readStoredProjects() {
  if (typeof window === "undefined") {
    return defaultProjects;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultProjects;
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (error) {
    return defaultProjects;
  }

  return defaultProjects;
}

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(readStoredProjects);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects]);

  const value = useMemo(
    () => ({
      projects,
      featuredProjects: projects.slice(0, 3),
      getProjectBySlug: (slug) => projects.find((project) => project.slug === slug),
      upsertProject: (project) => {
        setProjects((prev) => {
          const index = prev.findIndex((item) => item.slug === project.slug);
          if (index === -1) {
            return [project, ...prev];
          }

          const next = [...prev];
          next[index] = project;
          return next;
        });
      },
      deleteProject: (slug) => {
        setProjects((prev) => prev.filter((item) => item.slug !== slug));
      },
      resetProjects: () => setProjects(defaultProjects),
      replaceProjects: (nextProjects) => {
        if (Array.isArray(nextProjects) && nextProjects.length > 0) {
          setProjects(nextProjects);
        }
      },
      exportProjects: () => JSON.stringify(projects, null, 2)
    }),
    [projects]
  );

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used inside ProjectsProvider");
  }

  return context;
}
