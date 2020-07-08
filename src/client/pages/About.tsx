import * as easing from "d3-ease";
import React from "react";
import { Spring, Trail } from "react-spring/renderprops";
import Raising from "../components/Raising";
import "../Styles/About.less";

interface Props {
    page: number;
}

const pageCode = 1;

const about = [
    { key: 0, item: <h4>台灣桃園人</h4> },
    {
        key: 1,
        item: (
            <>
                <h4 style={{ display: "inline" }}>目前在 </h4>
                <h4 className="highlight3">浙江大學</h4>
                <h4 style={{ display: "inline" }}> 主修 </h4>
                <h4 className="highlight3">資訊工程</h4>
            </>
        ),
    },
    {
        key: 2,
        item: (
            <>
                <h4 style={{ display: "inline" }}>擁有一年的 </h4>
                <h4 className="highlight3">React 前端開發</h4>
                <h4 style={{ display: "inline" }}> 實務經驗</h4>
            </>
        ),
    },
];

export class AboutD extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ width: "0%" }}
                to={{
                    width: page === pageCode ? "45%" : "0%",
                }}
                config={{
                    easing: easing.easeCubicInOut,
                    delay: page === pageCode ? 600 : 450,
                }}
            >
                {(bgWidthProps) => (
                    <div className="intro" style={bgWidthProps}>
                        <div className="about">
                            <Raising
                                active={page === pageCode}
                                delay={page === pageCode ? 750 : 300}
                            >
                                <h2>關於我</h2>
                            </Raising>
                            <Trail
                                items={about}
                                keys={(item) => item.key}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1200 : 0,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <div className="listitem" style={props}>
                                            {item.item}
                                        </div>
                                    </div>
                                )}
                            </Trail>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}

export class AboutM extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ height: "0vh" }}
                to={{
                    height: page === pageCode ? "60vh" : "0vh",
                }}
                config={{
                    easing: easing.easeCubicInOut,
                    delay: page === pageCode ? 600 : 450,
                }}
            >
                {(bgWidthProps) => (
                    <div className="intro-mobile" style={bgWidthProps}>
                        <div className="about">
                            <Raising
                                active={page === pageCode}
                                delay={page === pageCode ? 750 : 300}
                            >
                                <h2>關於我</h2>
                            </Raising>
                            <Trail
                                items={about}
                                keys={(item) => item.key}
                                from={{ top: 144 }}
                                to={{
                                    top: page === pageCode ? 0 : 144,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1200 : 0,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <div className="listitem" style={props}>
                                            {item.item}
                                        </div>
                                    </div>
                                )}
                            </Trail>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}
