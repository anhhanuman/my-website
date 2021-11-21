import { totalScreens } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
    static scrollHandler = new ScrollService();
    static currentScreenBroadcaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;

        homeScreen.scrollIntoView({ behavior: "smooth" });
    };

    scrollToHireMe = ()=>{
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;

        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    }

    isElementInView = (elem, type) => {
        const rec = elem.getBoundingClientRect();
        const elementTop = rec.top;
        const elemBottom = rec.bottom;
        const partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;
        const completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible;

            default:
                return false;
        }
    };

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) return;

        for (const screen of totalScreens) {
            const screenFromDOM = document.getElementById(screen.screenName);
            if (!screenFromDOM) continue;

            const fullyVisible = this.isElementInView(screenFromDOM, "complete");
            const partiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screenName,
                    });
                    screen["alreadyRendered"] = true;
                    break;
                }

                if (fullyVisible) {
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screenName,
                    });
                    break;
                }
            }
        }
    };
}
