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
    <div className="mx-6 my-3 px-3 py-3">
      <Image
        src={image}
        alt="An image of the project"
        width={200}
        height={200}
        className="mx-auto h-65 w-52 mb-2"
      />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="px-3 mx-3 my-3">{description}</p>
      <button className="button mx-5">
        <a href={github}>See repo</a>
      </button>
      <button className="button">
        <a href={web}>See online</a>
      </button>
    </div>
  );
};

export default ProjectCard;
