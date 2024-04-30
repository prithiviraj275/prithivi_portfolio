import React from "react";
import { LuSchool } from "react-icons/lu";

const EducationCard = ({ item }) => {
  return (
    <div className="card overflow-auto hover:shadow-glow w-[90%] transform rounded-2xl bg-black bg-opacity-50 p-2 font-cairo text-white shadow-black drop-shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
      <div className="titleContainer m-2 flex flex-wrap justify-center items-center p-2">
        <div className="imageContainer ">
          {item.img === "" ? (
            <LuSchool size='3rem' />
          ) : (
            <img src={item.img} alt="image" />
          )}
        </div>
        <div className="namecontainer ml-4 flex flex-col items-start">
          <h1>{item.degree}</h1>
          <h1>{item.school}</h1>
          <h1>{item.date}</h1>
        </div>
      </div>
      <div className="detailsContainer m-2 text-justify flex flex-col">
        <p>{item.desc}</p>
        <p className="my-2"><span>Grade : </span>{item.grade}</p>
      </div>
    </div>
  );
};

export default EducationCard;
