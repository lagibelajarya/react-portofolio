import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader-none')
    }, 2000)
  }, [])

  const sendMail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'service_sxn4otv',
        refForm.current,
        'Yw2N5K1gLmt69rMv_'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendMail}>
              <input
                className="form-name"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
              <input
                className="form-email"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <input
                className="form-subject"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                className="form-message"
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <input
                type="submit"
                className="flat-button form-submit"
                value="SEND"
              />
            </form>
          </div>
        </div>
        <div className="map">
          <div className="map-info">
            <p>Cendono, Purwosari, Pasuruan 67162</p>
            <a href="mailto:rifald84@gmail.com">rifald84@gmail</a>
          </div>
          <div className="map-content">
            <MapContainer center={[-7.752384, 112.696566]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-7.752384, 112.696566]}>
                <Popup>disinal saya illiyin studio</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
