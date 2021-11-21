import React, {useEffect, useState} from "react";
import {totalScreens, getScreenIndex} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.css'

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;

        const screenIndex = getScreenIndex(currentScreen.screenInView);
        if (screenIndex < 0) return;
    };

    const currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = () => {
        return totalScreens.map((Screen, i) => (
            <div
                key={Screen.screenName}
                className={getHeaderOptionsClasses(i)}
                onClick={() => switchScreen(i, Screen)}
            >
                <span>{Screen.screenName}</span>
            </div>
        ));
    }

    const getHeaderOptionsClasses = (index) => {
        let classes = "header-option ";
        if (index < totalScreens.length - 1) classes += "header-option-separator ";

        if (selectedScreen === index) classes += "selected-header-option ";

        return classes;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screenName);
        if (!screenComponent) return;

        screenComponent.scrollIntoView({behavior: "smooth"});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };

    useEffect(() => {
        return () => {
            currentScreenSubscription.unsubscribe();
        };
    }, [currentScreenSubscription]);

    return (
        <div className={'header-container'}
             onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
            <div className={'header-parent'}>
                <div className={'header-hamburger'} onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className={'header-hamburger-bars'} icon={faBars}/>
                </div>
                <div className={'header-logo'}>
                    <span>Anh Mai</span>
                </div>
                <div className={
                    showHeaderOptions
                        ? "header-options show-hamburger-options"
                        : "header-options"
                }
                >
                    {getHeaderOptions()}
                </div>

            </div>

        </div>
    )

}
