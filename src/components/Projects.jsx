import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Canalúa E-commerce",
      description: "Made with WordPress",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fcanalua_web.png?alt=media&token=91fcecea-a1a9-404f-a31a-33081f36cd7e",
      url: "https://canalua.com"
    },
    {
      title: "Vintila House Cat E-commerce",
      description: "Made with WordPress",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fvintila_web.png?alt=media&token=dd0b2548-ac00-446f-826b-59b17e01b3a8",
        url: "https://vintilahousecat.com"
    },
    {
      title: "Glamping Natural Sound",
      description: "Made with Wordpress ",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fglamping_web.png?alt=media&token=d23aa44c-6d2b-4e7d-bc29-0f0f50533593",
        url: "https://glampingnaturalsound.com"
    },
    {
      title: "Sofka U",
      description: "Made with Html, Css and javascript Vanilla",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FSofkachallege_web.png?alt=media&token=4b55138c-74d0-434f-bce2-8903aa895cca",
      url: "https://ingramirezrivera.github.io/SofkaU-Challenge/"
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
