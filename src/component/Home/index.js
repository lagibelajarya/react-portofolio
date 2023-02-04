import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.svg'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'f', 'a', 'l', 'd', 'i']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader-none')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m &nbsp;</span>
            <img src={LogoTitle} alt="" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Fullstack Developer / FrontEnd Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="tag-canvas-container">
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
