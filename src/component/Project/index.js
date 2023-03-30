import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { workData } from './workData'
import Loader from 'react-loaders'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  const [toggle, setToggle] = useState(false)
  let reverseToggle = (e) => {
    setToggle((prev) => !prev)
  }
  setTimeout(() => {
    document.querySelector('.loader').classList.add('loader-none')
  }, 2000)

  const [indexImg, setIndexImg] = useState(0)

  let imgClick = (index) => {
    setIndexImg((prev) => (prev = index))
    reverseToggle()
  }
  return (
    <>
      <div className="project">
        {workData.map((item, index) => {
          return (
            <div key={index} className="project-wrapper">
              <div className="project-title">
                <p>{index + 1}</p>
                <p>{item.name}</p>
                <span></span>
              </div>
              <div className="project-content">
                <div className="project-content-left">
                  <div
                    onClick={() => {
                      imgClick(index)
                    }}
                    className="project-content-left-src"
                    key={index}
                    style={{
                      backgroundImage: `url(./assets/images/${item.image})`,
                    }}
                  ></div>
                </div>
                <div className="project-content-right">
                  <div className="project-content-right-1">
                    <p>{item.divisi} </p>
                    <p>{item.type} </p>
                  </div>
                  <div className="project-content-right-2">{item.desc}</div>
                  <div className="project-content-right-3">
                    {item.language.map((e) => {
                      return <p key={e}>{e} </p>
                    })}
                  </div>
                  <div className="project-content-right-4">
                    <a href={item.link} target="_blank">
                      <FontAwesomeIcon icon={faGithub} color="#a8b2d1" />
                    </a>
                    <a href={item.link} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#a8b2d1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={('mySwiper', toggle ? 'show size-full ' : 'hide size-0 ')}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="closeSwiper"
          onClick={reverseToggle}
          color="#fff"
        />
        `
        {workData[indexImg].swiper.map((item) => {
          return (
            <SwiperSlide key={item}>
              <div
                key={item}
                className="slide-img"
                style={{ background: `url(./assets/images/${item})` }}
              ></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Loader type="pacman" />
    </>
  )
}
export default Project
