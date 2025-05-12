import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
