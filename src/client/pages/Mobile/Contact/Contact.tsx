import React from "react";
import "./Contact.less";
import Raising from "../../../components/Raising/Raising";

interface Props {
    page: number;
}

export default class Contact extends React.Component<Props> {
    pageCode = 5;
    render() {
        return (
            <div className="contact-main-mobile" style={{ zIndex: this.props.page === this.pageCode ? 600 : 0 }}>
                <div className="info">
                    <Raising active={this.props.page === this.pageCode} delay={this.props.page === this.pageCode ? 600 : 450}>
                        <div className="item" style={{ color: "gray", marginBottom: 36 }}>
                            謝謝你的瀏覽，希望你喜歡我的作品！
                        </div>
                    </Raising>
                    <Raising active={this.props.page === this.pageCode} delay={this.props.page === this.pageCode ? 750 : 300}>
                        <div className="item">
                            <p style={{ display: "inline" }}>Email</p>
                            <a href="mailto:im.yuanlinlin@gmail.com">
                                <h4 style={{ display: "inline" }}>im.yuanlinlin@gmail.com</h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising active={this.props.page === this.pageCode} delay={this.props.page === this.pageCode ? 900 : 150}>
                        <div className="item">
                            <p style={{ display: "inline" }}>Line</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4 style={{ display: "inline", marginRight: 8 }}>varedx20001207</h4>
                            </a>
                        </div>
                    </Raising>
                    <Raising active={this.props.page === this.pageCode} delay={this.props.page === this.pageCode ? 1050 : 0}>
                        <div className="item">
                            <p style={{ display: "inline" }}>Facebook</p>
                            <a href="https://www.facebook.com/ken20001207">
                                <h4 style={{ display: "inline", marginRight: 8 }}>ken20001207</h4>
                            </a>
                            <a href="https://m.me/ken20001207" className="fb-msg-btn">
                                Messenger
                            </a>
                        </div>
                    </Raising>
                </div>
            </div>
        );
    }
}
