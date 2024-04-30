import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

const Connect = ({ Connect }) => {
  const email = Connect.email;

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      id="connect"
      className="w-full h-full my-10 flex flex-col font-cairo p-6 justify-center items-center"
    >
      <div className="name-container flex flex-col items-center flex-wrap">
        <h1 className="font-bold text-5xl tracking-widest flex flex-wrap">
          Connect With Me
        </h1>
      </div>

      <div className="listContainer flex justify-center items-center m-20 w-4/5">
        <ul className="flex flex-row w-full justify-evenly items-center">
          <li className="scale-[2] hover:scale-[3] transition-all duration-200">
            <a href={Connect.linkedin} target="_blank">
              <LinkedInIcon />
            </a>
          </li>
          <li className="scale-[2] hover:scale-[3] transition-all duration-200">
            <a href={Connect.github} target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li className="scale-[2] hover:scale-[3] transition-all duration-200">
            <a href="" target="_self">
              {" "}
              <InstagramIcon />{" "}
            </a>
          </li>
          <li className="scale-[2] hover:scale-[3] transition-all duration-200">
            <a href="" target="_self">
              <XIcon />
            </a>
          </li>
          <li className="scale-[2] hover:scale-[3] transition-all duration-200">
            <a href={`mailto:${email}`} onClick={handleEmailClick}>
              <EmailIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Connect;
