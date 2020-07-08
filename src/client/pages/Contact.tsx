import React, { Component } from "react";
import Raising from "../components/Raising";
import "../Styles/Contact.less";

interface Props {
    page: number;
}

const pageCode = 5;

export class ContactD extends React.Component<Props> {
    render() {
        return (
            <div className="contact-main">
                <div className="info">
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 600 : 450}
                    >
                        <div
                            className="item"
                            style={{
                                color: "gray",
                                marginBottom: 36,
                            }}
                        >
                            謝謝你的瀏覽，希望你喜歡我的作品！
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 750 : 300}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Email</p>
                            <a href="mailto:im.yuanlinlin@gmail.com">
                                <h4 style={{ display: "inline" }}>
                                    im.yuanlinlin@gmail.com
                                </h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 900 : 150}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Line</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4
                                    style={{
                                        display: "inline",
                                        marginRight: 8,
                                    }}
                                >
                                    varedx20001207
                                </h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 1050 : 0}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Facebook</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4
                                    style={{
                                        display: "inline",
                                        marginRight: 8,
                                    }}
                                >
                                    https://www.facebook.com/ken20001207
                                </h4>
                            </a>
                            <a
                                href="https://m.me/ken20001207"
                                className="fb-msg-btn"
                            >
                                Messenger
                            </a>
                        </div>
                    </Raising>
                </div>
            </div>
        );
    }
}

export class ContactM extends Component<Props> {
    render() {
        return (
            <div
                className="contact-main-mobile"
                style={{
                    zIndex: this.props.page === pageCode ? 600 : 0,
                }}
            >
                <div className="info">
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 600 : 450}
                    >
                        <div
                            className="item"
                            style={{
                                color: "gray",
                                marginBottom: 36,
                            }}
                        >
                            謝謝你的瀏覽，希望你喜歡我的作品！
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 750 : 300}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Email</p>
                            <a href="mailto:im.yuanlinlin@gmail.com">
                                <h4 style={{ display: "inline" }}>
                                    im.yuanlinlin@gmail.com
                                </h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 900 : 150}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Line</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4
                                    style={{
                                        display: "inline",
                                        marginRight: 8,
                                    }}
                                >
                                    varedx20001207
                                </h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising
                        active={this.props.page === pageCode}
                        delay={this.props.page === pageCode ? 1050 : 0}
                    >
                        <div className="item">
                            <p style={{ display: "inline" }}>Facebook</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4
                                    style={{
                                        display: "inline",
                                        marginRight: 8,
                                    }}
                                >
                                    ken20001207
                                </h4>
                            </a>
                            <a
                                href="https://m.me/ken20001207"
                                className="fb-msg-btn"
                            >
                                Messenger
                            </a>
                        </div>
                    </Raising>
                </div>
            </div>
        );
    }
}
