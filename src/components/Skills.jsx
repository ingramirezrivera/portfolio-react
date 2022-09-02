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
                                <img src={'https://drive.google.com/uc?id=1q51sIxhtQpkig2ePCjsP-lH7S9SEclnX'} alt="Html logo" />
                                <h2>Html</h2>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=15CeOY9KSmZpwaIx-74HjSH7eooxmUuVh'} alt="Css logo" />
                                <h3>Css</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=19NhHZDH1tOFWOD1tYhFvaqCIlu92BOe4'} alt="Javascript logo" />
                                <h3>Javascript</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=1ZzsVV8awPa0apW5r3KaoJTslGdY6g36x'} alt="React logo" />
                                <h3>React</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=1FKW3w6_5g_7hHotQcTx0E2R6s0NzL-bT'} alt="Bootstrap logo" />
                                <h3>Bootstrap</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=1W3ns1DHmrpU3c8Yq1pAosi1SDCE2D02K'} alt="Tailwind Css" />
                                <h3>Tailwind Css</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=1Nc60TieT_G5Lr9dTJHIQTCHcnisM17M2'} alt="Firebase" />
                                <h3>Firebase</h3>
                            </div>
                            <div className="item">
                                <img src={'https://drive.google.com/uc?id=1mNZwptpZu6q9cTYz6zOaG0mk4CAN7iAj'} alt="Wordpress" />
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