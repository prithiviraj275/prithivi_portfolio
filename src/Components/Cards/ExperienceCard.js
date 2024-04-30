import React from 'react';

const ExperienceCard = ({ item }) => {
  return (   
    <div className="card hover:shadow-glow w-[90%] transform rounded-2xl bg-black bg-opacity-50 p-2 font-cairo text-white shadow-black drop-shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
      <div className="head m-4 flex flex-row items-center justify-center">
        <img src={item.img} className="img h-14 w-14" alt='image' />
        <div className="title m-4  flex flex-col items-start flex-wrap ">
          <h1 className="role flex flex-wrap text-xl">{item.role}</h1>
          <h3 className="company text-lg">{item.company}</h3>          
        </div>
      </div>
      <div className="desc m-4 min-h-16 w-[90%] flex  ">
        <p className="desc flex text-justify items-center min-h-full w-full ">{item.desc}</p>
      </div>
      <div className="m-4 flex h-1/3">
        <h1 className="text-lg">Skills:</h1>
        <ul className="skilllist ml-3 pl-2 flex w-[80%] flex-wrap justify-start">
          {item.skills.map((skill, index) => (
            <li key={index} className="mx-3 mb-3 ">{skill}</li>
          ))}
        </ul>
      </div>
    </div> 
  );
};

export default ExperienceCard;
