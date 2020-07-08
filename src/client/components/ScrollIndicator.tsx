import * as easing from "d3-ease";
import React from "react";
import { Spring } from "react-spring/renderprops";
import { zh_tw } from "../lang";
import "../Styles/ScrollIndicator.less";

interface Props {
    page: number;
    timer: number;
    mobile: boolean;
}

export class ScrollIndicatorD extends React.Component<Props> {
    getColor = (page: number) => {
        return "black";
    };

    render() {
        var page = this.props.page;
        var timer = this.props.timer;
        return (
            <Spring
                from={{ color: "black", width: "90%", opacity: 1 }}
                to={{
                    color: this.getColor(page),
                    width: page === 0 ? "90%" : "10%",
                    opacity: zh_tw.pageTitles[page + 1] === undefined ? 0 : 1,
                }}
                config={{ easing: easing.easeCubicInOut, duration: 1000 }}
            >
                {(colorProps) => (
                    <Spring
                        from={{ bottom: 36 }}
                        to={{ bottom: timer % 2 ? 36 : 52 }}
                        config={{
                            easing: easing.easeCubicInOut,
                            duration: 1000,
                        }}
                    >
                        {(floatprops) => (
                            <div
                                className="scroll-down-button"
                                style={{
                                    bottom: floatprops.bottom,
                                    color: colorProps.color,
                                    width: colorProps.width,
                                    opacity: colorProps.opacity,
                                }}
                            >
                                <div className="scroll-down-button-inner">
                                    <div style={{ display: "inline-block" }}>
                                        <i className="gg-scroll-v" />
                                    </div>
                                    <p>{zh_tw.pageTitles[page + 1]}</p>
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </Spring>
        );
    }
}

export class ScrollIndicatorM extends React.Component<Props> {
    getColor = (page: number) => {
        if (this.props.mobile && page === 2) return "white";
        return "black";
    };

    render() {
        var page = this.props.page;
        var timer = this.props.timer;
        return (
            <Spring
                from={{ color: "black", opacity: 1 }}
                to={{
                    color: this.getColor(page),
                    opacity: zh_tw.pageTitles[page + 1] === undefined ? 0 : 1,
                }}
                config={{ easing: easing.easeCubicInOut, duration: 1000 }}
            >
                {(colorProps) => (
                    <Spring
                        from={{ bottom: 36 }}
                        to={{ bottom: timer % 2 ? 36 : 52 }}
                        config={{
                            easing: easing.easeCubicInOut,
                            duration: 1000,
                        }}
                    >
                        {(floatprops) => (
                            <div
                                className="scroll-down-button-mobile"
                                style={{
                                    bottom: floatprops.bottom,
                                    color: colorProps.color,
                                    opacity: colorProps.opacity,
                                }}
                            >
                                <div className="scroll-down-button-inner">
                                    <div style={{ display: "inline-block" }}>
                                        <i className="gg-scroll-v" />
                                    </div>
                                    <p>{zh_tw.pageTitles[page + 1]}</p>
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </Spring>
        );
    }
}
