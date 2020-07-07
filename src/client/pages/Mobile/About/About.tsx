import React from "react";
import { Spring, Trail } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./About.less";
import Raising from "../../../components/Raising/Raising";

interface Props {
    page: number;
}

export default class About extends React.Component<Props> {
    pageCode = 1;
    about = [
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
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ height: "0vh" }}
                to={{ height: page === this.pageCode ? "60vh" : "0vh" }}
                config={{ easing: easing.easeCubicInOut, delay: page === this.pageCode ? 600 : 450 }}
            >
                {(bgWidthProps) => (
                    <div className="intro-mobile" style={bgWidthProps}>
                        <div className="about">
                            <Raising active={page === this.pageCode} delay={page === this.pageCode ? 750 : 300}>
                                <h2>關於我</h2>
                            </Raising>
                            <Trail
                                items={this.about}
                                keys={(item) => item.key}
                                from={{ top: 144 }}
                                to={{ top: page === this.pageCode ? 0 : 144 }}
                                config={{ easing: easing.easeCubicInOut, delay: page === this.pageCode ? 1200 : 0 }}
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
