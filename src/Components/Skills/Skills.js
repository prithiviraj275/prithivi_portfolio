import React from 'react'
import SkillCards from '../Cards/SkillCards';

const Skills = ({skills}) => {

  return (
    <section  id='Skills' name='Skills' className='w-full h-full my-10 flex items-center flex-col font-cairo p-6'>
    
        <h1 className='font-bold text-5xl tracking-widest'>Skills</h1>
        <p className='my-5 text-2xl'>Here are some of the skills on which I have been working for the past 2 years.</p>
        <div  className="skillContainer w-[90%] h-full flex flex-wrap justify-center items-center">
          {skills.map((skill) => (          
              <SkillCards skill={skill} key={skill.id} />          
          ))}
        </div>
    </section>
  )
}

export default Skills