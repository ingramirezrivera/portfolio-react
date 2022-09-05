import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:
        "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/project-img3.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Here some of works and practices to grow my knoledges</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={
          "https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/color-sharp2.png"
        }
      ></img>
    </section>
  );
};
