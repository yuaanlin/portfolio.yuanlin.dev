import React, { Component, Suspense } from "react";
import "./App.less";

import Topnav from "./components/Topnav/Topnav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollIndicator from "./components/Desktop/ScrollIndicator/ScrollIndicator";

import ScrollIndicatorM from "./components/Mobile/ScrollIndicator/ScrollIndicator";
import Welcome from "./pages/Desktop/Welcome/Welcome";
import About from "./pages/Desktop/About/About";
import MyService from "./pages/Desktop/MyService/MyService";
import DesignPortfolio from "./pages/Desktop/DesignPortfolio/DesignPortfolio";
import DevPortfolio from "./pages/Desktop/DevPortfolio/DevPortfolio";
import Contact from "./pages/Desktop/Contact/Contact";

interface State {
    page: number;
    timer: number;
    mobile: boolean;
}

class App extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            mobile: false,
            page: 0,
            timer: 0,
        };
    }

    locateSection = (scrollY: number) => {
        var page_break_points = [0, 1, 1200, 2400, 3600, 4800, 6000];

        for (var i = 0; i < page_break_points.length; i++) {
            if (
                scrollY >= page_break_points[i] &&
                scrollY < page_break_points[i + 1]
            ) {
                this.setState({ page: i });
                return;
            }
        }
    };

    componentDidMount = () => {
        if (window.innerWidth <= window.innerHeight)
            this.setState({ mobile: true });

        // timer for animation
        setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
            1000
        );

        // scroll listener
        window.addEventListener("scroll", () => {
            this.locateSection(window.scrollY);
        });

        // locate the section of begin
        this.locateSection(window.scrollY);

        const ele = document.getElementById("ipl-progress-indicator");
        if (ele) {
            setTimeout(() => {
                ele.classList.add("available");
                setTimeout(() => {
                    ele.outerHTML = "";
                }, 2000);
            }, 500);
        }
    };

    render() {
        if (!this.state.mobile)
            return (
                <div className="main">
                    <Topnav mobile={this.state.mobile} />
                    <SocialLinks />
                    <ScrollIndicator
                        page={this.state.page}
                        timer={this.state.timer}
                    />
                    <Welcome page={this.state.page} />
                    <About page={this.state.page} />
                    <MyService page={this.state.page} />
                    <DesignPortfolio page={this.state.page} />
                    <DevPortfolio page={this.state.page} />
                    <Contact page={this.state.page} />
                </div>
            );
        else
            return (
                <div className="main">
                    <Topnav mobile={this.state.mobile} />
                    <ScrollIndicatorM
                        mobile={this.state.mobile}
                        page={this.state.page}
                        timer={this.state.timer}
                    />
                </div>
            );
    }
}

export default App;
