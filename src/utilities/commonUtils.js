import Home from "../PorfolioContainer/Home/Home";
import AboutMe from "../PorfolioContainer/AboutMe/AboutMe";
import Resume from "../PorfolioContainer/Resume/Resume";
import Testimonial from "../PorfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PorfolioContainer/ContactMe/ContactMe";

export const totalScreens = [
    {
        screenName: "Home",
        component: Home
    },
    {
        screenName: "About Me",
        component: AboutMe
    },
    {
        screenName: "Resume",
        component: Resume
    },
    {
        screenName: "Testimonial",
        component: Testimonial
    },
    {
        screenName: "Contact Me",
        component: ContactMe,
    },
]

export const getScreenIndex = (screenName) => {
    if (!screenName) return -1;
    for (const screenIndex in totalScreens) {
        if (screenIndex.screenName === screenName) return screenIndex
    }
    return -1//nothing
}
