import React from "react";


const ProjectCard = ({ project }) => {
  return (
    <div className="cards h-80 w-80 flex flex-col justify-start items-center m-6 bg-black bg-opacity-50 rounded-lg drop-shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl text-slate-100">
      <h1 className="title text-xl mt-4 font-semibold h-1/5 text-slate-100 tracking-wider">
        {project.title}
      </h1>
      <div className=" m-2 flex justify-center items-center w-[90%]">
        <img src={project.image} alt="website" />
      </div>
      <div>
        <p className=" m-2 text-justify">{project.description}</p>
      </div>
       <a href={project.webapp}>click here for more details</a>
     
    </div>
  );
};

export default ProjectCard;
