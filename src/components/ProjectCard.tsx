import { Project } from "@/app/models/projects";
import Image from "next/image";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

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
      <div className="flex space-x-2 items-center justify-center">
        <div>
          <button className="button mx-5">
            <a href={github} className="flex items-center">
              <AiFillGithub className="mr-2" />
              See code
            </a>
          </button>
          <button className="button">
            <a href={web} className="flex items-center">
              <MdWeb className="mr-2" />
              Visit site
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
