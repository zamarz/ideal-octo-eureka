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

  console.log(projectData);

  return (
    <section>
      <div className="text-center justify-center items-center py-10">
        <h2 className="font-black text-2xl">My projects</h2>
        <p>
          {" "}
          My recent projects goes here. Connect to Firebase. See if analytics
          possible
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center justify-center items-center py-10 my-10">
        {/* {map over Firebase data here} */}
        <div>
          {projectData ? (
            projectData.map((project) => (
              <ProjectCard key={project.id} project={project.data} />
            ))
          ) : (
            <></>
          )}
          <h1>Image Here</h1>
          <h2>Title</h2>
          <p>paragraph here</p>
          <p>Button here</p>
          <p>GITHUB AND WEB LINK</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
