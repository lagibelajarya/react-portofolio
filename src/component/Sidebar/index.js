import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.svg'
import LogoSub from '../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faLightbulb,
  faWindowRestore,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const barBtnClick = (e) => {
    // e.preventDefault()
    setToggleNav((prev) => !prev)
  }

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" to="/about" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skill-link"
            to="/skill"
          >
            <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" to="/skill" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/project"
          >
            <FontAwesomeIcon
              icon={faWindowRestore}
              color="#4d4d4e"
              to="/project"
            />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" to="/contact" />
          </NavLink>
          <div onClick={() => barBtnClick()} className="bar-btn">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/muhammad-rifaldi-023b9822b/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rifaldimuhammad"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCBZmo6oSnjNBWbaYBPOuATg"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/rival_io"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>

      <div className={'bar-mobile-bg ' + (toggleNav ? 'active' : '')}></div>
      <div className={'bar-mobile ' + (toggleNav ? 'active' : '')}>
        <div className={'bar-mobile-nav '}>
          <NavLink
            onClick={() => {
              barBtnClick()
            }}
            exact="true"
            activeclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            <p>Home</p>
          </NavLink>
          <NavLink
            onClick={() => {
              barBtnClick()
            }}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" to="/about" />
            <p>about</p>
          </NavLink>
          <NavLink
            onClick={() => {
              barBtnClick()
            }}
            exact="true"
            activeclassname="active"
            className="skill-link"
            to="/skill"
          >
            <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" to="/skill" />
            <p>skill</p>
          </NavLink>
          <NavLink
            onClick={() => {
              barBtnClick()
            }}
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/project"
          >
            <FontAwesomeIcon
              icon={faWindowRestore}
              color="#4d4d4e"
              to="/project"
            />
            <p>project</p>
          </NavLink>
          <NavLink
            onClick={() => {
              barBtnClick()
            }}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" to="/contact" />
            <p>contact</p>
          </NavLink>
        </div>

        <div className={'bar-mobile-media '}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/muhammad-rifaldi-023b9822b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rifaldimuhammad"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCBZmo6oSnjNBWbaYBPOuATg"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/rival_io"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
