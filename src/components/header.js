import { Link } from "gatsby"
import React from "react"
import "./header.css"

import TwitterIcon from "../assets/twitter.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import InstagramIcon from "../assets/instagram.svg"
import GithubIcon from "../assets/github.svg"

const Header = () => (
  <header>
    <div className="header-body">
      <div className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="socials">
        <a aria-label="Twitter" href="https://twitter.com/Hrishikeshrai2">
          <TwitterIcon />
        </a>
        <a
          aria-label="Linked In"
          href="https://www.linkedin.com/in/hrishikesh-rai-b04a88179/"
        >
          <LinkedInIcon />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/hrishi_kesh_rai/"
        >
          <InstagramIcon />
        </a>
        <a aria-label="Github" href="https://github.com/SskYwaLkeR">
          <GithubIcon />
        </a>
      </div>
    </div>
  </header>
)

export default Header
