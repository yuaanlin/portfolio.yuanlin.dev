import React from "react";
import { Row, Col } from "react-grid-system";
import "./Topnav.less";

interface Props {
    mobile: boolean;
}

export default class Topnav extends React.Component<Props> {
    render() {
        return (
            <div className="topbar">
                <Row style={{ width: "100%" }}>
                    <Col xs={6} lg={8}>
                        <h5 onClick={() => window.scrollTo(0, 0)}>Yuanlin Lin</h5>
                    </Col>
                    <Col style={{ padding: 0 }} xs={6} lg={3}>
                        <p onClick={() => alert("Sorry, English version will be there soon!")}>Eng</p>
                        <p onClick={() => alert("简体中文版本正在开发中！")} style={{ marginRight: this.props.mobile ? 16 : 64 }}>
                            简
                        </p>
                        <p style={{ marginRight: this.props.mobile ? 16 : 64 }}>繁</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
