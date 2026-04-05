"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { InteractiveButton } from "@/components/interactive-button";
import { StaggerGroup, StaggerItem, fadeUpItem } from "@/components/motion";
import { portfolioData, projectCategories } from "@/data/portfolio";

type DisplayProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  organization?: string;
  tech?: string[];
  featured?: boolean;
  kind: "Featured" | "Additional";
};

const allProjects: DisplayProject[] = [
  ...portfolioData.featuredProjects.map((project) => ({
    ...project,
    kind: "Featured" as const,
  })),
  ...portfolioData.otherProjects.map((project) => ({
    ...project,
    kind: "Additional" as const,
  })),
];

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return allProjects;
    }

    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <StaggerGroup className="projects-layout">
      <div className="tab-row" role="tablist" aria-label="Project categories">
        {projectCategories.map((category) => (
          <InteractiveButton
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={activeCategory === category ? "tab active" : "tab"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </InteractiveButton>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="projects-grid"
          variants={fadeUpItem}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              className="project-card elevated-card"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="project-topline">
                <span className="eyebrow">{project.kind}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              {project.organization ? <p className="muted">{project.organization}</p> : null}
              <p>{project.description}</p>
              {project.tech?.length ? (
                <div className="pill-row">
                  {project.tech.map((item) => (
                    <span className="mini-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </StaggerGroup>
  );
}
