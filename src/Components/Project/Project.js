import React from "react";
import ProjectCard from "../Cards/ProjectCard";


const Project = ({projects}) => {
  return (
    <section
      id="Projects"
      className="w-full h-full my-10 flex flex-col font-cairo p-6"
    >
      <div className="name-container flex flex-col items-center">
        <h1 className="font-bold text-5xl tracking-widest">Project</h1>
        <p className="my-5 text-2xl">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
      </div>
      <div className="projectContainer my-20 w-full flex justify-center items-center flex-wrap ">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))};
      </div>
    </section>
  );
};

export default Project;
