import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
    return (
        <div className={'profile-container'}>
            <div className={'profile-parent'}>
                <div className={'profile-details'}>
                    <div className={'colz'}>
                        <div className={'colz-icon'}>
                            <a href={"https://www.linkedin.com/in/anh-mai-mobile-automation-appium-ios-android-pom-24aba054/"}>
                                <i className={'fa fa-linkedin-square'}/>
                            </a>
                            <a href={"https://github.com/anhhanuman"}>
                                <i className={'fa fa-github-square'}/>
                            </a>
                            <a href={"https://facebook.com"}>
                                <i className={'fa fa-facebook-square'}/>
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
