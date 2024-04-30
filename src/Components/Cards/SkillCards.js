import React from 'react';


const SkillCards = ({ skill }) => {

  return (
    <div  className='cards h-80 w-80 flex flex-col justify-start items-center m-6 bg-black bg-opacity-50 rounded-lg drop-shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl'>
      <h1 className="title text-xl mt-4 font-semibold h-1/5 text-slate-100 tracking-wider">{skill.title}</h1>
      <div className='skilllist flex flex-wrap mx-2 my-2 justify-center items-start  h-4/5 gap-x-4'>
        {skill.skills.map((item) => (
          <div className='skillitem flex flex-col items-center justify-center space-x-2 m-2 text-slate-100' key={item.id}>
            <img src={item.image} alt={item.name} className='h-8 drop-shadow-lg' />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
