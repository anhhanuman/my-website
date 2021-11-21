import React from "react";
import {totalScreens} from "../utilities/commonUtils";

export default function PortfolioContainer() {
    const mapAllScreens = () => {
        return (
            totalScreens.map((screen) => (
                (screen.component) ?
                    <screen.component screenName={screen.screenName} key={screen.screenName} id={screen.screenName}/> :
                    <div key={screen.screenName}></div>
            ))
        )
    }
    return (
        <div className={'portfolio-container'}>
            {mapAllScreens()}
        </div>
    )
}
