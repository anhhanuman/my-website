import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
    return (
        <div className={'profile-container'}>
            <div className={'profile-parent'}>
                <div className={'profile-details'}>
                    <div className={'colz'}>
                        <div className={'colz-icon'}>
                            <a href={"https://linkedin.com"}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href={"https://facebook.com"}>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </a>
                            <a href={"https://linkedin.com"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                    <div className={'profile-details-name'}>
                    <span className={'primary-text'}>
                        {""}
                        Hello, I'm <span className={'highlighted-text'}>Anh Engineer</span>
                    </span>
                    </div>
                    <div className={'profile-details-role'}>
                        <span className={'primary-text'}>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Software Quality 🧑🏻‍💻️",
                                        1000,
                                        "Frontend Automation",
                                        1000,
                                        "Backend Automation",
                                        1000,
                                        "System Analysis",
                                        1000,
                                        "Performance Test",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className={'profile-role-tagline'}>
                            Skills in Manual and Automation Testing.
                            </span>
                        </span>
                    </div>
                    <div className={'profile-options'}>
                        <button className={'btn primary-btn'}>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href={'AnhMai.pdf'} download={'AnhMai.pdf'}>
                            <button className={'btn highlighted-btn'}>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className={'profile-picture'}>
                    <div className={'profile-picture-background'}></div>
                </div>
            </div>
        </div>
    )
}
// in the visual studio code, the extension is React-Native/React/Redux snippets for es6/es7
