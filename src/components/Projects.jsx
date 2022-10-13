import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";

export const Projects = () => {
  const projectsHtmlCssJavascript = [
    {
      title: "Sofka U",
      description: "Made with Html, Css and Javascript",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FSofkachallege_web.png?alt=media&token=4b55138c-74d0-434f-bce2-8903aa895cca",
      url: "https://ingramirezrivera.github.io/SofkaU-Challenge/",
    },
    {
      title: "Social proof section",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fsocial-proof-section-master.png?alt=media&token=61a795c9-2dda-4335-8d04-b3e286a99862",
      url: "https://ingramirezrivera.github.io/social-proof-section-master/",
    },
    {
      title: "Profile Card Component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fprofile-card-component.png?alt=media&token=2c4b04bf-fc2a-4452-9450-cd89f1e8fe84",
      url: "https://ingramirezrivera.github.io/profile-card-component/",
    },
    {
      title: "Four-card-feature-section",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Ffour-card-feature-section-master.png?alt=media&token=9dd84b1b-987a-4c32-86d1-58c2959d8146",
      url: "https://ingramirezrivera.github.io/four-card-feature-section-master/",
    },
    {
      title: "Single price grid component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FSingle-price-grid-component.png?alt=media&token=ef1474f6-1f06-4206-9284-e8a1007e133a",
      url: "https://ingramirezrivera.github.io/Single-price-grid-component/",
    },
    {
      title: "Huddle landing page",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FHuddle-landing-page.png?alt=media&token=ccb5eb60-3af0-40d4-a420-a4ff5f75749d",
      url: "https://ingramirezrivera.github.io/Huddle-landing-page/",
    },
    {
      title: "Stats preview card component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fstats-preview-card-component.png?alt=media&token=c2a78510-0cc6-485e-abec-8bf27427cc9a",
      url: "https://ingramirezrivera.github.io/stats-preview-card-component/",
    },
    {
      title: "3 column preview card component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2F3-column-preview-card-component.png?alt=media&token=10bc4842-4eb6-47ec-8052-a3ad792bc089",
      url: "https://ingramirezrivera.github.io/3-column-preview-card-component/",
    },
    {
      title: "Order summary component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FOrder-summary-component.png?alt=media&token=e7f65c4c-3586-469a-a2e1-5bd26a7ee0fc",
      url: "https://ingramirezrivera.github.io/Order-summary-component/",
    },
    {
      title: "NFT preview card component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FNFT-preview-card-component.png?alt=media&token=2f7f93b3-3282-4e69-b6b5-279634039eb0",
      url: "https://ingramirezrivera.github.io/NFT-preview-card-component/",
    },
    {
      title: "QR code component",
      description: "Made with Html & Css",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FQR-code-component.png?alt=media&token=8453d7f0-6e24-41de-b259-4fbdb7311a8d",
      url: "https://ingramirezrivera.github.io/QR-code-component/",
    },
    {
      title: "Ping single column coming soon page",
      description: "Made with Html, Css & Javascript",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FPing-single-column-coming-soon-page.png?alt=media&token=88dd0e9f-ad0e-488d-b895-1241f7a2bef9",
      url: "https://ingramirezrivera.github.io/Ping-single-column-coming-soon-page/",
    },
    {
      title: "Intro-component-with-signup-form",
      description: "Made with Html, Css & Javascript",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FIntro-component-with-signup-form.png?alt=media&token=4beb9d9c-60fe-4379-bdde-1790107ba760",
      url: "https://ingramirezrivera.github.io/Intro-component-with-signup-form/",
    },
    {
      title: "Base Apparel coming soon page",
      description: "Made with Html, Css & Javascript",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fbaseapparel.png?alt=media&token=50c3cad7-e35c-4086-a9bc-ebb2b886ddcc",
      url: "https://ingramirezrivera.github.io/Base-Apparel-coming-soon-page/",
    },
  ];
  const projectsReact = [
    {
      title: "Parallax Efect React",
      description: "Made with React",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fparallax-react.png?alt=media&token=8636fc04-d97d-40e3-8bba-0964724a6bd6",
      url: "https://ingramirezrivera.github.io/parallax-react/",
    },
    {
      title: "Aptive React",
      description: "Made with React",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fnavbar-tutorial-react.png?alt=media&token=cd0017c3-0da6-49d4-a422-0778d4857e7c",
      url: "https://ingramirezrivera.github.io/aptive-react/",
    },
    {
      title: "Execute Financial",
      description: "Made with React",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2FExecute-financial.png?alt=media&token=e07ab563-27c2-464d-965a-46dc1afc3286",
      url: "https://ingramirezrivera.github.io/Execute-financial/",
    },
    {
      title: "Momentum Clone",
      description: "Made with React",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fmomentum-clone.png?alt=media&token=4af1bdcc-7a5d-4525-a9cb-fe8d07181ffd",
      url: "https://ingramirezrivera.github.io/momentum-clone/",
    },
    {
      title: "Galaxy Travel",
      description: "Made with React",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fgalaxy-travel.png?alt=media&token=52f1e29b-8422-4a4b-a744-68c5fc1c043e",
      url: "https://ingramirezrivera.github.io/galaxy-travel/",
    },
  ];

  const projectsWordpress = [
    {
      title: "Canalúa E-commerce",
      description: "Made with WordPress",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fcanalua_web.png?alt=media&token=91fcecea-a1a9-404f-a31a-33081f36cd7e",
      url: "https://canalua.com",
    },
    {
      title: "Vintila House Cat E-commerce",
      description: "Made with WordPress",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fvintila_web.png?alt=media&token=dd0b2548-ac00-446f-826b-59b17e01b3a8",
      url: "https://vintilahousecat.com",
    },
    {
      title: "Glamping Natural Sound",
      description: "Made with Wordpress ",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fglamping_web.png?alt=media&token=d23aa44c-6d2b-4e7d-bc29-0f0f50533593",
      url: "https://glampingnaturalsound.com",
    },
    {
      title: "Club Camaro Medellín",
      description: "Made with Wordpress ",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fclubcamaromedellin.png?alt=media&token=95177d1c-0823-4ceb-8e85-795c7b751651",
      url: "http://clubcamaromedellin.com/",
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
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Vanilla</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Word Press</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsHtmlCssJavascript.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsReact.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsWordpress.map((project, index) => {
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
