import React, { Component } from "react";
import { Col, Row } from "react-grid-system";
import Raising from "../components/Raising";
import { WorkDetailD, WorkDetailM } from "../components/WorkDetail";
import { WorkListD, WorkListM } from "../components/WorkList";
import "../Styles/DesignPortfolio.less";
import { WorkData } from "../works";

interface Props {
    page: number;
}

interface State {
    watchingWork: WorkData | undefined;
    workWindowZindex: number;
    watchingWork_opened: boolean;
    image: number;
}

const pageCode = 3;

export class DesignPortfolioD extends React.Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork_opened: false,
            watchingWork: undefined,
            workWindowZindex: -1,
            image: 0,
        };
    }

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work)
            this.setState({
                watchingWork_opened: true,
                watchingWork: work,
                workWindowZindex: 50,
                image: 0,
            });
        else {
            this.setState({
                watchingWork_opened: false,
                workWindowZindex: -1,
                watchingWork: undefined,
            });
        }
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.page !== pageCode) {
            this.setState({
                watchingWork_opened: false,
                workWindowZindex: -1,
                watchingWork: undefined,
            });
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div
                className="design-portfolio-main"
                style={{
                    zIndex: page === pageCode ? 40 : -1,
                }}
            >
                <Row>
                    <Col
                        lg={6}
                        style={{
                            height: "80vh",
                            paddingLeft: "10%",
                        }}
                    >
                        <div className="des">
                            <Raising
                                active={page === pageCode}
                                delay={page === pageCode ? 1200 : 450}
                            >
                                <h1 className="highlight1">設計作品</h1>
                            </Raising>
                            <Raising
                                active={page === pageCode}
                                height={108}
                                delay={page === pageCode ? 1350 : 300}
                            >
                                <p>為您精選四個過去的設計專案</p>
                                <p>點擊作品可以查看更詳細的內容哦！</p>
                            </Raising>
                            <Raising
                                active={page === pageCode}
                                delay={page === pageCode ? 1500 : 150}
                            >
                                <p style={{ color: "gray" }}>
                                    想看更多？歡迎查看我的{" "}
                                    <a href="https://www.behance.net/yuanlinlin">
                                        Behence
                                    </a>{" "}
                                    帳號
                                </p>
                            </Raising>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <WorkListD
                            type="design"
                            show={page === pageCode}
                            watching_work={this.state.watchingWork}
                            toggle_watch_work={this.toggle_watch_work}
                        />
                    </Col>
                </Row>

                {this.state.watchingWork ? (
                    <WorkDetailD
                        watching_work={this.state.watchingWork}
                        watchingWork_opened={this.state.watchingWork_opened}
                        work_window_zindex={this.state.workWindowZindex}
                        toggle_watch_work={this.toggle_watch_work}
                    />
                ) : (
                    <div />
                )}
            </div>
        );
    }
}

export class DesignPortfolioM extends Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork_opened: false,
            watchingWork: undefined,
            workWindowZindex: -1,
            image: 0,
        };
    }

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work)
            this.setState({
                watchingWork_opened: true,
                watchingWork: work,
                workWindowZindex: 50,
                image: 0,
            });
        else {
            this.setState({
                watchingWork_opened: false,
                workWindowZindex: -1,
                watchingWork: undefined,
            });
        }
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.page !== pageCode) {
            this.setState({
                watchingWork_opened: false,
                workWindowZindex: -1,
                watchingWork: undefined,
            });
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div
                className="design-portfolio-main-mobile"
                style={{
                    zIndex: page === pageCode ? 400 : -1,
                }}
            >
                <div className="des">
                    <Raising
                        active={page === pageCode}
                        delay={page === pageCode ? 1200 : 450}
                    >
                        <h1 className="highlight1">設計作品</h1>
                    </Raising>
                    <Raising
                        active={page === pageCode}
                        height={108}
                        delay={page === pageCode ? 1350 : 300}
                    >
                        <p>為您精選四個過去的設計專案</p>
                        <p>點擊作品可以查看更詳細的內容哦！</p>
                    </Raising>
                    <Raising
                        active={page === pageCode}
                        delay={page === pageCode ? 1500 : 150}
                    >
                        <p style={{ color: "gray" }}>
                            想看更多？歡迎查看我的
                            <a href="https://www.behance.net/yuanlinlin">
                                Behence
                            </a>
                            帳號
                        </p>
                    </Raising>
                </div>

                <WorkListM
                    type="design"
                    show={page === pageCode}
                    watching_work={this.state.watchingWork}
                    toggle_watch_work={this.toggle_watch_work}
                />
                {this.state.watchingWork ? (
                    <WorkDetailM
                        watching_work={this.state.watchingWork}
                        watchingWork_opened={this.state.watchingWork_opened}
                        work_window_zindex={this.state.workWindowZindex}
                        toggle_watch_work={this.toggle_watch_work}
                    />
                ) : (
                    <div />
                )}
            </div>
        );
    }
}
