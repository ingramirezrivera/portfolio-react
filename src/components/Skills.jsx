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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/meter1.svg'} alt="Meter 1" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/meter2.svg'} alt="Meter 2" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/meter3.svg'} alt="Meter 3" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/meter3.svg'} alt="Meter 4" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={'https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/color-sharp.png'} alt=" Image Sharp" />
    </section>
  )
}