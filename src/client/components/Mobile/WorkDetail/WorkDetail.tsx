import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Row } from "react-grid-system";
import Raising from "../../Raising/Raising";
import { WorkData } from "../../../works";

import "./WorkDetail.less";

interface Props {
    watchingWork_opened: boolean;
    watching_work: WorkData | undefined;
    work_window_zindex: number;
    toggle_watch_work: (work: WorkData | undefined) => void;
}

interface State {
    image: number;
}

export default class WorkDetail extends Component<Props, State> {
    rightcol: HTMLDivElement | null = null;

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            image: 0,
        };
    }

    chage_image = (next: boolean) => {
        if (next) {
            if (this.state.image + 1 === this.props.watching_work?.images.length) {
                this.setState({ image: 0 });
            } else this.setState({ image: this.state.image + 1 });
        } else {
            if (this.state.image === 0) {
                this.setState({ image: (this.props.watching_work?.images.length ? this.props.watching_work?.images.length : 1) - 1 });
            } else this.setState({ image: this.state.image - 1 });
        }
    };

    render() {
        return (
            <Spring from={{ opacity: 0 }} to={{ opacity: this.props.watching_work ? 1 : -1 }}>
                {(props) => (
                    <div className="work-detail-mobile" style={{ ...props, zIndex: this.props.work_window_zindex }}>
                        <Row>
                            <i className="gg-arrow-left closebutton" onClick={() => this.props.toggle_watch_work(undefined)} />
                        </Row>

                        <Row>
                            <div className="infos">
                                <Raising active={this.props.watchingWork_opened} delay={this.props.watchingWork_opened ? 150 : 600}>
                                    <h3>{this.props.watching_work?.h2}</h3>
                                </Raising>
                                <Raising active={this.props.watchingWork_opened} delay={this.props.watchingWork_opened ? 300 : 450}>
                                    <h1 className="highlight1">{this.props.watching_work?.h1}</h1>
                                </Raising>
                                <Raising active={this.props.watchingWork_opened} delay={this.props.watchingWork_opened ? 450 : 300}>
                                    <p>{this.props.watching_work?.p}</p>
                                </Raising>
                                <Raising active={this.props.watchingWork_opened} delay={this.props.watchingWork_opened ? 600 : 150}>
                                    {this.props.watching_work?.tools.map((t) => (
                                        <p className="hashtag" style={{ display: "inline", marginRight: 16 }}>
                                            #{t}
                                        </p>
                                    ))}
                                </Raising>
                            </div>
                        </Row>

                        <Row>
                            {this.props.watching_work ? (
                                <Raising
                                    height={720}
                                    active={this.props.watchingWork_opened}
                                    delay={this.props.watchingWork_opened ? 750 : 0}
                                >
                                    <div
                                        ref={(r) => {
                                            this.rightcol = r;
                                        }}
                                        style={{ padding: 8, width: "65%" }}
                                        className="preview"
                                    >
                                        {this.props.watching_work?.youtube_id ? (
                                            <>
                                                <iframe
                                                    title="work-preview"
                                                    width={this.rightcol?.clientWidth}
                                                    height={((this.rightcol?.clientWidth ? this.rightcol?.clientWidth : 900) / 1920) * 1080}
                                                    src={
                                                        "https://www.youtube.com/embed/" +
                                                        this.props.watching_work.youtube_id +
                                                        "?autoplay=1"
                                                    }
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <picture>
                                                    <source
                                                        style={{ width: "100%", height: "auto" }}
                                                        srcSet={this.props.watching_work.images[this.state.image] + ".webp"}
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        style={{ width: "100%", height: "auto" }}
                                                        src={this.props.watching_work.images[this.state.image] + ".jpg"}
                                                        alt="圖片載入中"
                                                    />
                                                </picture>
                                                <button style={{ float: "left" }} onClick={() => this.chage_image(false)}>
                                                    上一張
                                                </button>
                                                <button style={{ float: "right" }} onClick={() => this.chage_image(true)}>
                                                    下一張
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Raising>
                            ) : (
                                <></>
                            )}
                        </Row>
                    </div>
                )}
            </Spring>
        );
    }
}
