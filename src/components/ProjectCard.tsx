import { Project } from "@/app/models/projects";
import Image from "next/image";
import { FC } from "react";

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = (props) => {
  const {
    project: { description, image, github, web, title },
  } = props;

  return (
    <div>
      <Image
        src={image}
        alt="An image of the project"
        width={200}
        height={200}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="button">
        <a href={github}>See repo</a>
      </button>
      <button className="button">
        <a href={web}>See online</a>
      </button>
    </div>
  );
};

export default ProjectCard;
