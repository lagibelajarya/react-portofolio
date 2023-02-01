import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { workData } from './workData'
import mysqlLogo from '../../assets/images/mysql.png'
const Project = () => {
  return (
    <>
      <div className="project">
        {workData.map((item, index) => {
          return (
            <div key={index} className="project-wrapper">
              <div className="project-title">
                <p>03. </p>
                <p>{item.name}</p>
                <span></span>
              </div>
              <div className="project-content">
                <div className="project-content-left">
                  <div
                    className="project-content-left-src"
                    style={{
                      backgroundImage: `../../assets/images/${item.image}`,
                    }}
                  ></div>
                </div>
                <div className="project-content-right">
                  <div className="project-content-right-1">
                    <p>Featured Project</p>
                    <p>{item.type}</p>
                  </div>
                  <div className="project-content-right-2">{item.desc}</div>
                  <div className="project-content-right-3">
                    <p>vue </p>
                    <p>react</p>
                  </div>
                  <div className="project-content-right-4">
                    <FontAwesomeIcon icon={faGithub} color="#a8b2d1" />
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
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Project
