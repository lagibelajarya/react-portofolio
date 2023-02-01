import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import reactLogo from '../../assets/images/react.png'
import jsLogo from '../../assets/images/javascript.png'
import vueLogo from '../../assets/images/vue.png'
import laravelLogo from '../../assets/images/laravel.png'
import sassLogo from '../../assets/images/sass.svg'
import bsLogo from '../../assets/images/bootstrap.png'
import jqueryLogo from '../../assets/images/jquery.png'
import mysqlLogo from '../../assets/images/mysql.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

let arrLogo = [
  {
    nama: jsLogo,
    class: '',
  },
  {
    nama: reactLogo,
    class: '',
  },
  {
    nama: vueLogo,
    class: '',
  },
  {
    nama: laravelLogo,
    class: '',
  },
  {
    nama: sassLogo,
    class: '',
  },
  {
    nama: bsLogo,
    class: '',
  },
  {
    nama: jqueryLogo,
    class: 'jquery',
  },
  {
    nama: mysqlLogo,
    class: '',
  },
]
const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)

    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader-none')
    }, 2000)
  }, [])
  return (
    <>
      <div className="container skill skill-page">
        <div className="skill-wrapper">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', '', 'S', 'k', 'i', 'l', 'l']}
                idx={15}
              />
            </h1>
          </div>
          <div className="skill-content">
            <div className="skill-content-item">
              {arrLogo.map((item, index) => {
                return (
                  <img
                    src={item.nama}
                    key={index}
                    className={item.class}
                    alt=""
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Skill
