import homework from "../assets/img/homework.svg";
import tutoring from "../assets/img/tutoring.svg";
import lab from "../assets/img/lab.svg";
import project from "../assets/img/project.svg";
import writing from "../assets/img/writing.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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
                        <h2>Our Offerings</h2>
                        <p>We prioritize your academic success with 24/7 support, ensuring assistance is available whenever you need it. With us by your side, you can confidently embark on your college journey knowing that all your academic needs will be met with precision and excellence.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={homework} alt="Image" />
                                <h5>Assignment Help</h5>
                            </div>
                            <div className="item">
                                <img src={tutoring} alt="Image" />
                                <h5>Live Tutoring</h5>
                            </div>
                            <div className="item">
                                <img src={lab} alt="Image" />+
                                <h5>Lab Work</h5>
                            </div>
                            <div className="item">
                                <img src={project} alt="Image" />+
                                <h5>Project Help</h5>
                            </div>
                            <div className="item">
                                <img src={writing} alt="Image" />+
                                <h5>Writing Help</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
