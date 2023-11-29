"use client"
import React, { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import projectData from "../assets/projects.json";
import ProjectCard from "./ProjectCard";
import FilterSidebar from "./FilterSidebar";
export default function ProjectGrid() {
  const [originalData, setOriginalData] = useState(projectData);
  const [filters, setFilters] = useState<string[]>([]);
  const [projects, setProjects] = useState(projectData);
  const memoizedOriginalData = useMemo(() => [...originalData], []);

  useEffect(() => {
    if (filters.length === 0) {
      setProjects(originalData)
    } else {
      const filteredProjects = memoizedOriginalData.filter((project) => {
        return filters.every((criteria) => project.filterBy.includes(criteria));
      });
  
      setProjects(filteredProjects);
    }
  }, [filters, memoizedOriginalData]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    if (checked) {
      setFilters((prev) => [...prev, name]);
    } else {
      setFilters((prev) => prev.filter((filter) => filter !== name));
    }
  };
  
    
  return (
    <section className="py-28 mb-28" id="all-projects">
      <div className="flex flex-col md:flex-row ">
        <div className="w-1/5" onChange={(e: any)=> handleChange(e)}>
          <FilterSidebar />
        </div>
        <div className="w-4/5 mt-12 px-4 grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ title, shortDescription, githubUrl, documentationUrl }, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={title}
                  shortDescription={shortDescription}
                  githubUrl={githubUrl}
                  documentationUrl={documentationUrl}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
