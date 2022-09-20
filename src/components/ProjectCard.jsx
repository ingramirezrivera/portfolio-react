import { Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";


export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <button className="vvd">
                <span>
                  <a href={url} target="_blank" rel="noreferrer" className="visit-link">
                    Visit now <BsArrowRightCircle />
                  </a>
                </span>
          </button>
        </div>
      </div>
    </Col>
  )
}