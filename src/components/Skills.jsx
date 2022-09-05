import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Some of the technologies learned over time.  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fhtml_logo.png?alt=media&token=6acb8893-57d3-4ce4-b285-d2a82e51d405'} alt="Html logo" />
                                <h3>Html</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fcss_logo.png?alt=media&token=5958c49e-72a8-46ff-b8bc-fdeb23713136'} alt="Css logo" />
                                <h3>Css</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fjavascript_logo.png?alt=media&token=1fab50d1-8dc9-4c37-bfc0-ba55fc3f7af3'} alt="Javascript logo" />
                                <h3>Javascript</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Freact_logo.png?alt=media&token=ba2cb24b-3c63-49e2-af0d-cd7d2fe4b8cd'} alt="React logo" />
                                <h3>React</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fbootstrap_logo.png?alt=media&token=644cb8a7-f385-4efe-93fa-ec6b62259651'} alt="Bootstrap logo" />
                                <h3>Bootstrap</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Ftailwind_logo.png?alt=media&token=b560f6d6-ec85-4bc3-8fe0-aec989efb368'} alt="Tailwind Css" />
                                <h3>Tailwind Css</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Ffirebase_logo.png?alt=media&token=d4266cae-66d1-4cfd-bda9-2282b7207803'} alt="Firebase" />
                                <h3>Firebase</h3>
                            </div>
                            <div className="item">
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fwordpress.png?alt=media&token=8e4ccda4-39c6-431d-99af-7c9c5cab2609'} alt="Wordpress" />
                                <h3>Wordpress</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={'https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/color-sharp.png'} alt=" Image Sharp" /> */}
    </section>
  )
}