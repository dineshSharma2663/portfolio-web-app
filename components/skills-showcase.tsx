"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { InteractiveButton } from "@/components/interactive-button";
import { StaggerGroup, StaggerItem, fadeUpItem } from "@/components/motion";
import { portfolioData, skillGroups } from "@/data/portfolio";

type SkillGroupKey = (typeof skillGroups)[number]["key"];

export function SkillsShowcase() {
  const [activeGroup, setActiveGroup] = useState<SkillGroupKey>("core");

  return (
    <StaggerGroup className="interactive-panel elevated-card">
      <div className="tab-row" role="tablist" aria-label="Skill groups">
        {skillGroups.map((group) => (
          <InteractiveButton
            key={group.key}
            role="tab"
            aria-selected={activeGroup === group.key}
            className={activeGroup === group.key ? "tab active" : "tab"}
            onClick={() => setActiveGroup(group.key)}
          >
            {group.label}
          </InteractiveButton>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          role="tabpanel"
          className="skill-grid"
          variants={fadeUpItem}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
        >
          {portfolioData.skills[activeGroup].map((skill) => (
            <StaggerItem className="skill-chip elevated-card" key={skill}>
              {skill}
            </StaggerItem>
          ))}
        </motion.div>
      </AnimatePresence>
    </StaggerGroup>
  );
}
