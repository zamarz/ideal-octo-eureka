"use client";

import { useEffect, useState } from "react";
import { getProjects } from "../app/utils/firebase";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projectData, setProjectData] = useState<Array<{
    id: string;
    data: any;
  }> | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectList = await getProjects();
      setProjectData(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="px-10 py-10 mx-auto container min-h-screen"
    >
      <div className="text-center justify-center items-center">
        <h2 className="font-black text-3xl">My projects</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center justify-center items-center">
          {projectData ? (
            projectData.map((project) => (
              <ProjectCard key={project.id} project={project.data} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
