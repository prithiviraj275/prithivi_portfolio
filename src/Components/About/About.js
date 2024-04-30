import React from 'react';
import Typewriter from 'typewriter-effect';
import proImg from '../assets/HeroImg.png'



const About = ({Bio}) => {
  return (
    <section  id='About' name='About' className='w-full overflow-hidden drop-shadow-2xl flex flex-row items-center justify-center font-cairo z-0   max-[767px]:flex-col-reverse ' style={{height:"120%"}}>
        <div className={`leftcontainer md:overflow-hidden w-full sm:w-11/12 md:w-2/4 m-4 bg-white rounded-2xl flex flex-col justify-center items-center z-0 max-[767px]:w-4/5 h-3/4`}>
            <div className='nameContainer  ml-14  max-[400px]:ml-14 md:my-10 ml-36 flex flex-wrap flex-col justify-center  h-1/5 w-full font-ubuntu text-purple-text ' id='left'>
                <h1 className='min-[0px]:text-2xl sm:text-4xl  md:text-5xl mt-5 '>Hi, I am  <br/><span className='font-extrabold '> {Bio.name} </span></h1>
                <h3 className='min-[0px]:text-2xl sm:text-3xl  md:text-4xl mt-5 '>I am a <span className='font-semibold'>
                    <Typewriter
                    options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    }}
                    />
                    </span>
                </h3>
            </div>
            <p className='m-5 text-lg font-ubuntu p-4 text-justify'>{Bio.description}</p>
            <a href={Bio.resume} target='display' className='m-5 text-lg mb-10 h-14 w-36 border-4 border-purple-text text-center flex justify-center items-center rounded-full tracking-widest hover:bg-purple-text hover:text-white'>Resume</a>
        </div>
        <div className='rightcontainer max-[639px]:my-5 sm:my-5 md:w-2/4 flex justify-center items-center' id='right'>
            <img src={proImg} alt="Hero-Image"  className='h-4/5 w-4/5 drop-shadow-2xl'/>
        </div>

    </section>
  )
}

export default About