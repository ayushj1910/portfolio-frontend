"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const socialIcons = [
  {
    link: "www.linkedin.com/in/ayushj19",
    iconName: <FaLinkedin />,
  },
  {
    link: "https://twitter.com/Ayushj_19",
    iconName: <FaTwitterSquare />,
  },
  {
    link: "https://github.com/ayushj1910",
    iconName: <FaGithubSquare />,
  },
  {
    link: "https://www.instagram.com/ayushj19/",
    iconName: <FaInstagramSquare />,
  },
];

export const Socials = (props) => {
  return (
    <div className="flex justify-start">
      {socialIcons.map((socials) => {
        return (
          <span key={socials.link} className={"text-3xl pr-2 " + props.color}>
            <Link className="mr-1 text-white" href={socials.link}>
              {socials.iconName}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
