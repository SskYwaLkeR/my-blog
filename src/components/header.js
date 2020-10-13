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
        <Link to="/">About</Link>
      </div>
      <div className="socials">
        <Link to="/">
          <TwitterIcon />
        </Link>
        <Link to="/">
          <LinkedInIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <GithubIcon />
        </Link>
      </div>
    </div>
  </header>
)

export default Header
