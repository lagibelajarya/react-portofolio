import './index.scss'
import LogoS from '../../../assets/images/logo-s.svg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoS} ref={solidLogoRef} />
      <svg
        width="559pt"
        height="897pt"
        viewBox="0 0 634 728"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
            // transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            className="svg-container"
            ref={outlineLogoRef}
            d="M0.210205 728V0.727234H287.142C342.066 0.727234 388.941 10.5521 427.767 30.2017C466.83 49.6146 496.541 77.195 516.901 112.943C537.497 148.454 547.795 190.24 547.795 238.298C547.795 286.594 537.379 328.142 516.545 362.943C495.712 397.508 465.527 424.023 425.991 442.489C386.692 460.955 339.107 470.188 283.236 470.188H91.1193V346.608H258.378C287.734 346.608 312.118 342.583 331.531 334.534C350.944 326.485 365.385 314.411 374.855 298.312C384.562 282.214 389.415 262.209 389.415 238.298C389.415 214.151 384.562 193.791 374.855 177.219C365.385 160.647 350.826 148.099 331.176 139.577C311.763 130.817 287.26 126.437 257.668 126.437H153.974V728H0.210205ZM392.966 397.034L573.719 728H403.974L227.128 397.034H392.966Z"
            fill="#FFD700"
          />
        </g>
        <g
          className="svg-container"
            // transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M60.2102 728V0.727234H347.142C402.066 0.727234 448.941 10.5521 487.767 30.2017C526.83 49.6146 556.541 77.195 576.901 112.943C597.497 148.454 607.795 190.24 607.795 238.298C607.795 286.594 597.379 328.142 576.545 362.943C555.712 397.508 525.527 424.023 485.991 442.489C446.692 460.955 399.107 470.188 343.236 470.188H151.119V346.608H318.378C347.734 346.608 372.118 342.583 391.531 334.534C410.944 326.485 425.385 314.411 434.855 298.312C444.562 282.214 449.415 262.209 449.415 238.298C449.415 214.151 444.562 193.791 434.855 177.219C425.385 160.647 410.826 148.099 391.176 139.577C371.763 130.817 347.26 126.437 317.668 126.437H213.974V728H60.2102ZM452.966 397.034L633.719 728H463.974L287.128 397.034H452.966Z"
            fill="#115173"
          />
        </g>
      </svg>
    </div>
  )
}
export default Logo
