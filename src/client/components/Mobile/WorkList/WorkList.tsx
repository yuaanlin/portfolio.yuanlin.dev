import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import { Trail, Spring } from "react-spring/renderprops";
import { works, WorkData } from "../../../works";
import { easeCubicInOut } from "d3-ease";

import "./WorkList.less";

interface Props {
    type: "development" | "design";
    show: boolean;
    watching_work: WorkData | undefined;
    toggle_watch_work: (work: WorkData | undefined) => void;
}

export default class WorkList extends Component<Props> {
    render() {
        return (
            <Row style={{ height: "40vh", overflowY: "scroll" }}>
                <Trail
                    items={works.filter((w) => w.type === this.props.type)}
                    from={{ width: "0%", opacity: 0 }}
                    keys={(item) => item.id}
                    to={{
                        width: this.props.show ? "100%" : "0%",
                        opacity: this.props.show ? 1 : 0,
                    }}
                    config={{ delay: this.props.show ? 1200 : 0 }}
                >
                    {(item) => (props) => (
                        <Col xs={this.props.type === "design" ? 6 : 6}>
                            <Spring
                                from={{ transform: "scale(1)" }}
                                to={{
                                    transform: this.props.watching_work === item ? "scale(10)" : "scale(1)",
                                }}
                                config={{ easing: easeCubicInOut }}
                            >
                                {(scaleProp) => (
                                    <div
                                        className="workblock"
                                        style={{
                                            ...props,
                                            transform: scaleProp.transform,
                                        }}
                                    >
                                        <picture onClick={() => this.props.toggle_watch_work(item)}>
                                            <source className="workblock-inner" srcSet={item.cover_image_url + ".webp"} type="image/webp" />
                                            <img className="workblock-inner" src={item.cover_image_url + ".jpg"} alt="圖片載入中" />
                                        </picture>
                                        <h4>{item.h2}</h4>
                                        <h1>{item.h1}</h1>
                                    </div>
                                )}
                            </Spring>
                        </Col>
                    )}
                </Trail>
            </Row>
        );
    }
}
