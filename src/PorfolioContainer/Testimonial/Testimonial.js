import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

import krishna from "../../assets/img/Testimonial/krisna.jpg";
import valerie from "../../assets/img/Testimonial/valerie.jpg";
import trung from "../../assets/img/Testimonial/trung.jpg";
import tam from "../../assets/img/Testimonial/tam.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div>
            <ScreenHeading
                title={"Testimonial"}
                subHeading={"What My Client Say About Me"}
            />
            <section className="testimonial-section fade-in" id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className="owl-carousel"
                            id="testimonial-carousel"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
                                            Anh was working in the capacity of a test lead for Steadfast’s Technologies.
                                            He has great skills across many areas. He has the hunger to learn and improve. His commitment towards the projects and team was great.
                                            It was a pleasure working with Anh at Steadfast.
                                            <FontAwesomeIcon icon={faQuoteRight} className="fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={krishna} alt="no internet connection"></img>
                                        <h5>Krishnananda Honnavara</h5>
                                        <p>Test Director</p>
                                        <p>Steadfast Tech Australia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
                                            I recruited Anh to work as a Test Analyst at Contemi Reading UK and Vietnam.
                                            He impressed me at interview as an enthusiastic and focused team player.
                                            In the varied projects in which he has worked for me I have never found my first impressions to be wrong. Anh has worked on legacy systems and new agile projects and I have always trusted him to get the job done with minimal supervision.
                                            Anh has never disappointed either me or his team mates with his dedication and creativity.
                                            <FontAwesomeIcon icon={faQuoteRight} className="fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={valerie} alt="no internet connection"></img>
                                        <h5>Valerie Swain</h5>
                                        <p>Digital Project Manager</p>
                                        <p>Transport For London</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
                                            Mai Anh is one of the best QC that I have ever met, Mai Anh is very caring and knows how to listen to the reasonable and unreasonable in each task requirement.
                                            Also, Mai Anh very eager to learn and love the automation test.
                                            <FontAwesomeIcon icon={faQuoteRight} className="fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={tam} alt="no internet connection"></img>
                                        <h5>Tam Tang</h5>
                                        <p>Senior Software Engineer</p>
                                        <p>Die Mobiliar Switzerland</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
                                            I worked with Anh before at NVG technology for Die Mobiliar Switzerland client.
                                            He is a friendly teammate. He did a great job and cover all of the internal applications and make the team more confident before delivering high-quality products.
                                            Besides that, his inspirit spreading to all members of the team and make me have more positive energy.
                                            I'm delighted when working together with him.
                                            <FontAwesomeIcon icon={faQuoteRight} className="fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faStar} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={trung} alt="no internet connection"></img>
                                        <h5>Trung Nguyen</h5>
                                        <p>Technical Leader</p>
                                        <p>Setel Malaysia</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}
