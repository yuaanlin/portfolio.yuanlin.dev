import * as easing from "d3-ease";
import React from "react";
import { Col, Row } from "react-grid-system";
import { Spring, Trail } from "react-spring/renderprops";
import Raising from "../components/Raising";
import { zh_tw } from "../lang";
import "../styles/MyService.less";

interface Props {
    page: number;
}

const pageCode = 2;

export class MyServiceD extends React.Component<Props> {
    render() {
        const page = this.props.page;
        return (
            <div className="serviceBG">
                <Spring
                    from={{ mainr: "0%" }}
                    to={{
                        mainr: page === pageCode ? "100%" : "0%",
                    }}
                    config={{
                        easing: easing.easeCubicInOut,
                        delay: page === pageCode ? 600 : 1050,
                    }}
                >
                    {(bgProps) => (
                        <Spring
                            from={{ rightr: 0 }}
                            to={{
                                rightr:
                                    page === pageCode
                                        ? window.innerWidth / 2
                                        : 0,
                            }}
                            config={{
                                easing: easing.easeCubicInOut,
                                delay: page === pageCode ? 750 : 900,
                            }}
                        >
                            {(rightProps) => (
                                <svg>
                                    <circle
                                        className="mainCircle"
                                        cx="50%"
                                        cy="50%"
                                        r={bgProps.mainr}
                                    />
                                    <circle
                                        className="rightCircle"
                                        cx="100%"
                                        cy="50%"
                                        r={rightProps.rightr}
                                    />
                                </svg>
                            )}
                        </Spring>
                    )}
                </Spring>
                <Row
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "90vh",
                    }}
                >
                    <Col lg={6}>
                        <div className="description">
                            <Raising
                                active={page === pageCode}
                                delay={page === pageCode ? 900 : 750}
                            >
                                <h1 className="highlight2">專長與技能</h1>
                            </Raising>

                            <Raising
                                active={page === pageCode}
                                height={120}
                                delay={page === pageCode ? 1050 : 600}
                            >
                                <p>
                                    我擅長為複雜的問題提供一系列的解決方案
                                    <br />
                                    右方列出的技術使我能夠處理各種不同領域的問題
                                    <br />
                                    涵蓋了常見的如下需求：
                                </p>
                            </Raising>
                            <Trail
                                items={zh_tw.services}
                                keys={(item) => item}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1200 : 600,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p className="listitem" style={props}>
                                            {item}
                                        </p>
                                    </div>
                                )}
                            </Trail>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="skills">
                            <Row>
                                <Col sm={6}>
                                    <Raising
                                        active={page === pageCode}
                                        height={36}
                                        delay={page === pageCode ? 1050 : 450}
                                    >
                                        <h5>設計技能</h5>
                                    </Raising>
                                    <Trail
                                        items={zh_tw.skills[0]}
                                        keys={(item) => item}
                                        from={{ top: 72 }}
                                        to={{
                                            top: page === pageCode ? 0 : 72,
                                        }}
                                        config={{
                                            easing: easing.easeCubicInOut,
                                            delay:
                                                page === pageCode ? 1050 : 450,
                                        }}
                                    >
                                        {(item) => (props) => (
                                            <div className="raise-warpper">
                                                <p style={props}>{item}</p>
                                            </div>
                                        )}
                                    </Trail>
                                </Col>
                                <Col sm={6}>
                                    <Raising
                                        active={page === pageCode}
                                        height={36}
                                        delay={page === pageCode ? 1200 : 300}
                                    >
                                        <h5>前端技能</h5>
                                    </Raising>
                                    <Trail
                                        items={zh_tw.skills[1]}
                                        keys={(item) => item}
                                        from={{ top: 72 }}
                                        to={{
                                            top: page === pageCode ? 0 : 72,
                                        }}
                                        config={{
                                            easing: easing.easeCubicInOut,
                                            delay:
                                                page === pageCode ? 1200 : 300,
                                        }}
                                    >
                                        {(item) => (props) => (
                                            <div className="raise-warpper">
                                                <p style={props}>{item}</p>
                                            </div>
                                        )}
                                    </Trail>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 48 }}>
                                <Col sm={6}>
                                    <Raising
                                        active={page === pageCode}
                                        height={36}
                                        delay={page === pageCode ? 1350 : 150}
                                    >
                                        <h5>後端技能</h5>
                                    </Raising>

                                    <Trail
                                        items={zh_tw.skills[2]}
                                        keys={(item) => item}
                                        from={{ top: 72 }}
                                        to={{
                                            top: page === pageCode ? 0 : 72,
                                        }}
                                        config={{
                                            easing: easing.easeCubicInOut,
                                            delay:
                                                page === pageCode ? 1350 : 150,
                                        }}
                                    >
                                        {(item) => (props) => (
                                            <div className="raise-warpper">
                                                <p style={props}>{item}</p>
                                            </div>
                                        )}
                                    </Trail>
                                </Col>
                                <Col sm={6}>
                                    <Raising
                                        active={page === pageCode}
                                        height={36}
                                        delay={page === pageCode ? 1500 : 0}
                                    >
                                        <h5>程式語言技能</h5>
                                    </Raising>
                                    <Trail
                                        items={zh_tw.skills[3]}
                                        keys={(item) => item}
                                        from={{ top: 72 }}
                                        to={{
                                            top: page === pageCode ? 0 : 72,
                                        }}
                                        config={{
                                            easing: easing.easeCubicInOut,
                                            delay: page === pageCode ? 1500 : 0,
                                        }}
                                    >
                                        {(item) => (props) => (
                                            <div className="raise-warpper">
                                                <p style={props}>{item}</p>
                                            </div>
                                        )}
                                    </Trail>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export class MyServiceM extends React.Component<Props> {
    render() {
        const page = this.props.page;
        return (
            <div className="serviceBG-mobile">
                <Spring
                    from={{ mainr: "0%" }}
                    to={{
                        mainr: page === pageCode ? "100%" : "0%",
                    }}
                    config={{
                        easing: easing.easeCubicInOut,
                        delay: page === pageCode ? 600 : 1050,
                    }}
                >
                    {(bgProps) => (
                        <Spring
                            from={{ rightr: 0 }}
                            to={{
                                rightr:
                                    page === pageCode
                                        ? window.innerHeight / 1.5
                                        : 0,
                            }}
                            config={{
                                easing: easing.easeCubicInOut,
                                delay: page === pageCode ? 750 : 900,
                            }}
                        >
                            {(rightProps) => (
                                <svg>
                                    <circle
                                        className="mainCircle"
                                        cx="50%"
                                        cy="50%"
                                        r={bgProps.mainr}
                                    />
                                    <circle
                                        className="rightCircle"
                                        cx="50%"
                                        cy="100%"
                                        r={rightProps.rightr}
                                    />
                                </svg>
                            )}
                        </Spring>
                    )}
                </Spring>
                <div className="description">
                    <Raising
                        active={page === pageCode}
                        delay={page === pageCode ? 900 : 750}
                    >
                        <h1 className="highlight2">專長與技能</h1>
                    </Raising>

                    <Raising
                        active={page === pageCode}
                        height={120}
                        delay={page === pageCode ? 1050 : 600}
                    >
                        <p>
                            我擅長為複雜的問題提供一系列的解決方案
                            <br />
                            下方列出的技術使我能夠處理
                            <br />
                            各種不同領域的問題
                        </p>
                    </Raising>
                </div>
                <div
                    className="skills"
                    style={{
                        zIndex: page === pageCode ? 500 : 30,
                    }}
                >
                    <Row style={{ width: "300%" }}>
                        <Col xs={3} sm={6}>
                            <Raising
                                active={page === pageCode}
                                height={36}
                                delay={page === pageCode ? 1050 : 450}
                            >
                                <h5>設計技能</h5>
                            </Raising>
                            <Trail
                                items={zh_tw.skills[0]}
                                keys={(item) => item}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1050 : 450,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p style={props}>{item}</p>
                                    </div>
                                )}
                            </Trail>
                        </Col>
                        <Col xs={3} sm={6}>
                            <Raising
                                active={page === pageCode}
                                height={36}
                                delay={page === pageCode ? 1200 : 300}
                            >
                                <h5>前端技能</h5>
                            </Raising>
                            <Trail
                                items={zh_tw.skills[1]}
                                keys={(item) => item}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1200 : 300,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p style={props}>{item}</p>
                                    </div>
                                )}
                            </Trail>
                        </Col>
                        <Col xs={3} sm={6}>
                            <Raising
                                active={page === pageCode}
                                height={36}
                                delay={page === pageCode ? 1350 : 150}
                            >
                                <h5>後端技能</h5>
                            </Raising>

                            <Trail
                                items={zh_tw.skills[2]}
                                keys={(item) => item}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1350 : 150,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p style={props}>{item}</p>
                                    </div>
                                )}
                            </Trail>
                        </Col>
                        <Col xs={3} sm={6}>
                            <Raising
                                active={page === pageCode}
                                height={36}
                                delay={page === pageCode ? 1500 : 0}
                            >
                                <h5>程式語言技能</h5>
                            </Raising>
                            <Trail
                                items={zh_tw.skills[3]}
                                keys={(item) => item}
                                from={{ top: 72 }}
                                to={{
                                    top: page === pageCode ? 0 : 72,
                                }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    delay: page === pageCode ? 1500 : 0,
                                }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p style={props}>{item}</p>
                                    </div>
                                )}
                            </Trail>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
