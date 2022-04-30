import React, { Component } from "react";
import {
  ScrollIndicatorD,
  ScrollIndicatorM,
} from "./components/ScrollIndicator";
import SocialLinks from "./components/SocialLinks";
import Topnav from "./components/Topnav";
import { AboutD, AboutM } from "./pages/About";
import { ContactD, ContactM } from "./pages/Contact";
import { DesignPortfolioD, DesignPortfolioM } from "./pages/DesignPortfolio";
import { DevPortfolioD, DevPortfolioM } from "./pages/DevPortfolio";
import { MyServiceD, MyServiceM } from "./pages/MyService";
import { WelcomeD, WelcomeM } from "./pages/Welcome";
import "./styles/App.less";

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
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);

    // scroll listener
    window.addEventListener("scroll", () => {
      this.locateSection(window.scrollY);
    });

    // locate the section of begin
    this.locateSection(window.scrollY);

    // const ele = document.getElementById("ipl-progress-indicator");
    // if (ele) {
    //   setTimeout(() => {
    //     ele.classList.add("available");
    //     setTimeout(() => {
    //       ele.outerHTML = "";
    //     }, 2000);
    //   }, 500);
    // }
  };

  render() {
    if (!this.state.mobile)
      return (
        <div className="main">
          <Topnav mobile={this.state.mobile} />
          <SocialLinks />
          <ScrollIndicatorD
            mobile={this.state.mobile}
            page={this.state.page}
            timer={this.state.timer}
          />
          <WelcomeD page={this.state.page} />
          <AboutD page={this.state.page} />
          <MyServiceD page={this.state.page} />
          <DesignPortfolioD page={this.state.page} />
          <DevPortfolioD page={this.state.page} />
          <ContactD page={this.state.page} />
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
          <WelcomeM page={this.state.page} />
          <AboutM page={this.state.page} />
          <MyServiceM page={this.state.page} />
          <DesignPortfolioM page={this.state.page} />
          <DevPortfolioM page={this.state.page} />
          <ContactM page={this.state.page} />
        </div>
      );
  }
}

export default App;
