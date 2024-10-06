import { Card } from "flowbite-react";

/* eslint-disable @next/next/no-img-element */
const ProjectCard = () => {
  return (
    <div className="pl-10">
          <Card
      className="max-w-xs"
      imgAlt="Project image"
      imgSrc='./shoes.jpeg'
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

    </div>
  );
}

export default ProjectCard