import * as easing from "d3-ease";
import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import Raising from "../components/Raising";
import "../Styles/Welcome.less";

interface Props {
    page: number;
}

export class WelcomeD extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <div className="welcome-main">
                <Spring
                    from={{ marginLeft: "0%" }}
                    to={{
                        marginLeft: page === 0 ? "0%" : "40%",
                    }}
                    config={{
                        easing: easing.easeCubicInOut,
                        delay: page === 0 ? 600 : 0,
                    }}
                >
                    {(titleProps) => (
                        <div className="title-outer">
                            <div className="title" style={titleProps}>
                                <Raising
                                    active={page === 0 || page === 1}
                                    height={108}
                                    delay={page === 0 || page === 1 ? 600 : 150}
                                >
                                    <h1>你好</h1>
                                </Raising>
                                <Raising
                                    active={page === 0 || page === 1}
                                    height={72}
                                    delay={page === 0 || page === 1 ? 750 : 0}
                                >
                                    <h2 style={{ display: "inline" }}>我是</h2>
                                    <h2 className="highlight1">林沅霖</h2>
                                </Raising>
                            </div>
                        </div>
                    )}
                </Spring>
            </div>
        );
    }
}

export class WelcomeM extends Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ top: "35vh" }}
                to={{ top: page === 0 ? "35vh" : "15vh" }}
                config={{
                    easing: easing.easeCubicInOut,
                    delay: page === 0 ? 600 : 0,
                }}
            >
                {(titleProps) => (
                    <div className="title-mobile" style={titleProps}>
                        <Raising
                            active={page === 0 || page === 1}
                            height={72}
                            delay={page === 0 || page === 1 ? 600 : 150}
                        >
                            <h1>你好</h1>
                        </Raising>
                        <Raising
                            active={page === 0 || page === 1}
                            height={48}
                            delay={page === 0 || page === 1 ? 750 : 0}
                        >
                            <h2 style={{ display: "inline" }}>我是</h2>
                            <h2 className="highlight1">林沅霖</h2>
                        </Raising>
                    </div>
                )}
            </Spring>
        );
    }
}
